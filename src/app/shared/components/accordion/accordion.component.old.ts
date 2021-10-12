import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { Config } from 'protractor';
import { AccordionMenu } from './types/accordion-menu';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  constructor(
    private cdr: ChangeDetectorRef,
    private location: Location,
    private router: Router,
    public menuService: SideMenuService
  ) {}

  @Input() options;
  @Input() menus: AccordionMenu[];
  config: Config;
  url: string;

  private indexMap = new Map<number, number[]>();

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
    this.router.events.subscribe(ev => {

      if (ev instanceof NavigationEnd) {
        this.toggleAllFalse(this.menus);
        this.indexMap.clear();
        this.toggleByLocation(this.location.path(), this.menus);
        this.cdr.detectChanges();
      }

/*       if (ev instanceof NavigationEnd) {
        this.toggleAllFalse(this.menus);
        const loc = this.location.path();
        this.toggleByLocation(loc, this.menus);
        this.cdr.detectChanges();
      } */

/*       if (ev instanceof NavigationEnd) {
        const loc = this.location.path();
        this.menus.forEach((menu, index) => {
          if (loc.includes(menu.url)) {
            if (!menu.active) {
              this.toggle(index);
              this.cdr.detectChanges();
            }
          }
          if (menu.submenu) {
            menu.submenu.forEach((submenu, subindex) => {
              if (loc.includes(submenu.url)) {
                if (!submenu.active) {
                  this.toggle(index, true, subindex);
                  this.cdr.detectChanges();
                }
              }
            });
          }
        });
      } */
    });
  }

/*   toggleByLocation(location: string, menus: AccordionMenu[], isSubmenu = false, topIndex = null) {
    this.toggleAllFalse(menus);
    menus.forEach((menu, index) => {

      if (!isSubmenu) {
        if (location.includes(menu.url)) {
          if (!menu.active) {
            this.toggle(index);
            this.cdr.detectChanges();
          }
        }
        if (menu.submenu) {
          this.toggleByLocation(location, menu.submenu, true, index);
        }
      }

      if (isSubmenu) {
        if (location.includes(menu.url)) {
          this.toggle(topIndex, true, index);
          this.cdr.detectChanges();
        }
      }

    });
  } */

  toggleByLocation(location: string, menus: AccordionMenu[]) {

    menus.forEach((menu, menuIndex) => {
      if (location.includes(menu.url)) {
        if (menu.submenu) {
          this.toggleByLocation(location, menu.submenu);
        } else {
          menu.active = true;
        }
      }
    });
  }

  mergeConfig(options: Config) {
    const config = {
      // selector: '#accordion',
      multi: true
    };
    return { ...config, ...options };
  }

/*   toggle(index: number, isSubmenu = false, submenuIndex = null) {

    this.menus[index].active = true;

    if (!this.config.multi) {
      this.menus.filter(
        (menu, i) => i !== index && menu.active && !this.location.path().includes(menu.url)
      ).forEach(
        (menu) => menu.active = !menu.active);
    }

    if (isSubmenu) {
      const submenus = this.menus[index].submenu;
      submenus.filter(
        (submenu, i) => i !== submenuIndex && submenu.active
      ).forEach(
        (submenu) => submenu.active = !submenu.active);
      this.menus[index].submenu[submenuIndex].active = true;
    }
  } */

  toggle(indexArray: number[], menus: AccordionMenu[]) {

    indexArray.forEach((indexValue, indexPosition) => {

      if (indexPosition == 0) {

        menus[indexValue].active = true;
        menus.filter(
          (menu, i) => i !== indexValue && menu.active && !this.location.path().includes(menu.url)
        ).forEach(
          (menu) => menu.active = !menu.active);

      } else {

        let submenus: AccordionMenu[] = menus;
        if (submenus) {
          for (let index = 0; index < indexPosition; index++) {
            submenus = submenus[indexArray[indexPosition - 1]].submenu;
          }

          submenus.filter(
            (submenu, i) => i !== indexValue && submenu.active
          ).forEach(
            (submenu) => submenu.active = !submenu.active);
          submenus[indexValue] ? submenus[indexValue].active = true : null;
        }

      }
    });
  }

  toggleAllFalse(menus: AccordionMenu[]) {
    menus.forEach(menu => {
      if (!menu.submenu || (menu.submenu && !menu.active)) {
        menu.active = false;
      }
      if (menu.submenu) { this.toggleAllFalse(menu.submenu); }
    });
  }

  activate(menu: AccordionMenu) {
    if (menu.isLink) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }

  private navigate(url: string) {
    this.router.navigateByUrl(url).then(msg => console.log("Routing", msg));
  }

  private callAction(menu: AccordionMenu, index: number) {
    // this.toggle(index);
    if (!menu.onClick) { return; }
    menu.onClick.call(menu.onClick);
  }

  trocarMenuLateral(): void {
    this.menuService.trocar();
  }

  fecharMenulateral(): void {
    this.menuService.fechar();
  }

  abrirMenuLateral(): void {
    this.menuService.abrir();
  }

}
