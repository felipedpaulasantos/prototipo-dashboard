import {
  Component, Input, ComponentFactoryResolver, ViewChild, ElementRef, ViewContainerRef, Type, ComponentRef,
  Injector, OnInit, OnDestroy, HostListener
} from "@angular/core";
import { SideMenuService } from "./side-menu.service";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Subscription } from "rxjs";
import { filter, tap, map, mergeMap } from "rxjs/operators";
import { AccordionConfig } from "src/app/shared/components/accordion/types/accordion-config";
import { AccordionMenu } from "src/app/shared/components/accordion/types/accordion-menu";
import { GuiaCaixaStyleService, Tema } from "src/app/guia-caixa/services/style-guia-caixa.service";
import { mockedSideMenuItems } from "src/app/shared/constants";

const MENU_ROUTE_PROPERTY = "menuLateral";
const MOBILE_BREAKPOINT = 991.9;

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"]
})
export class SideMenuComponent implements OnInit, OnDestroy {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private router: Router,
    private route: ActivatedRoute,
    public menuService: SideMenuService,
    public styleService: GuiaCaixaStyleService) { }

  @Input() tema: Tema;
  options: AccordionConfig = { multi: false };

  @ViewChild("menuLateral", { read: ElementRef })
  menuLateral: ElementRef;

  @ViewChild("menuTarget", { read: ViewContainerRef })
  menuTargetRef: ViewContainerRef;

  @ViewChild("inputSearch", { read: ElementRef })
  inputSearch: ElementRef;

  larguraTela: number;
  isAberto: boolean;

  componenteParaInjetar: any;
  injectorComponentParaInjetar: Injector;

  componentRef: ComponentRef<Component>;
  component: Type<Component>;
  refInjector: Injector;
  resolverSub: Subscription;

  menus: AccordionMenu[] = [];

  ngOnInit() {
    this.larguraTela = window.innerWidth;

    this.menuService.isAberto$.subscribe((isAberto: boolean) => {
      this.isAberto = isAberto;
    });

    this.menuService.menuItems$.subscribe(menus => this.menus = [...menus]);

    this.verificarContextoMudancaRota();
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.larguraTela = window.innerWidth;
    this.fecharSeMobile();
    this.abrirSeDesktop();
  }

  fecharSeMobile() {
    if (this.larguraTela <= MOBILE_BREAKPOINT) {
      this.menuService.fechar();
    }
  }

  abrirSeDesktop() {
    if (this.larguraTela > MOBILE_BREAKPOINT) {
      this.menuService.abrir();
    }
  }

  /* Verifica na mudança de rota se há informação de menu para a nova rota acessada */
  verificarContextoMudancaRota() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => this.fecharSeMobile()),
        map(() => {
          let route = this.route.firstChild;
          let child = route;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
              route = child;
            } else {
              child = null;
            }
          }
          return route;
        }),
        mergeMap(route => route.data)
      )
      .subscribe(data => {
        if (data && data[MENU_ROUTE_PROPERTY]) {
          this.componenteParaInjetar = data[MENU_ROUTE_PROPERTY];
          this.injetarComponente();
        } else {
          this.clearComponent();
        }
      });
  }

  injetarComponente() {

    /* Verifica se o componente a injetar já foi recebido,
      seja pelo receberContexto(), ou pela mudança de rota
    */
    if (!this.componenteParaInjetar) {
      this.clearComponent();
      return console.error("Não há componente a ser injetado.");
    }

    if (
      this.componentRef &&
      this.componentRef.componentType &&
      this.componenteParaInjetar.toString() ===
      this.componentRef.componentType.toString()
    ) { return; }

    this.clearComponent();

    const factoryComponenteInjetado = this.componentFactoryResolver.resolveComponentFactory(
      this.componenteParaInjetar
    );

    // tslint:disable-next-line: deprecation
    const injetorComponenteInjetado = Injector.create(
      [{ provide: this.componenteParaInjetar, useValue: this.componenteParaInjetar }],
      this.injectorComponentParaInjetar
    );

    this.componentRef = this.menuTargetRef.createComponent(
      factoryComponenteInjetado,
      0,
      injetorComponenteInjetado
    );

    this.componentRef.changeDetectorRef.detectChanges();
  }

  clearComponent() {
    this.menuTargetRef.clear();
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }

  openSearch() {
    this.menuService.abrir();
    setTimeout(() => {
      this.inputSearch.nativeElement.focus();
    }, 0);
  }

  filterMenu(ev) {
    this.menus = JSON.parse(JSON.stringify(mockedSideMenuItems));
    const text: string = ev.target.value.trim();

    const filteredMenus = this.menus.filter(function f(menu) {
      const nameLowercase = menu.name.toLowerCase();
      const test = (nameLowercase.includes(text.toLowerCase()) || menu.url.includes(text)) ||
            (menu.submenu && (menu.submenu = menu.submenu.filter(f)).length);
      return test;
    });

    this.menus = JSON.parse(JSON.stringify(filteredMenus));
  }

  ngOnDestroy() {
    this.resolverSub.unsubscribe();
    this.clearComponent();
  }

}
