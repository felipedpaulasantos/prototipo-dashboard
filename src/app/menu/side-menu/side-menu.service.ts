import { Injectable, ComponentFactoryResolver, Injector, Type, Component } from "@angular/core";
import { BehaviorSubject, Subject } from 'rxjs';
import { AccordionMenu } from 'src/app/shared/components/accordion/types/accordion-menu';
import { mockedSideMenuItems } from 'src/app/shared/constants';
import { ContextoInjecaoComponente } from './contexto-injecao-componente';

@Injectable({
  providedIn: 'root'
})
export class SideMenuService {

  constructor() { }

  private menus: AccordionMenu[] = mockedSideMenuItems;

  private contextoInjecaoSource = new Subject<ContextoInjecaoComponente>();
  contextoInjecao$ = this.contextoInjecaoSource.asObservable();

  private abertoSource = new BehaviorSubject<boolean>(false);
  isAberto$ = this.abertoSource.asObservable();

  private menuItemsSource = new BehaviorSubject<AccordionMenu[]>(this.menus);
  menuItems$ = this.menuItemsSource.asObservable();

  public trocar() {
    this.abertoSource.next(!this.abertoSource.value);
  }

  public abrir() {
    this.abertoSource.next(true);
  }

  public fechar() {
    this.abertoSource.next(false);
  }

  public receberContexto(resolver: ComponentFactoryResolver, injector: Injector, componenteParaInjetar?: any) {
    this.contextoInjecaoSource.next({
      resolver, injector, componenteParaInjetar
    });
  }

  public updateMenu(menu: AccordionMenu[]): void {
    this.menuItemsSource.next(menu);
  }

  public inserirItemMenu(menuItem: AccordionMenu, parentMenuItemName?: string): void {
    if (!parentMenuItemName) {
      const newMenuItems = this.menuItemsSource.value;
      newMenuItems.push(menuItem);
      this.menuItemsSource.next(newMenuItems);
    } else {
      const menuItems = this.menuItemsSource.value;
      const parentMenu = menuItems.filter(item => item.name === parentMenuItemName)[0];
      parentMenu.submenu.push(menuItem);
    }
  }

}
