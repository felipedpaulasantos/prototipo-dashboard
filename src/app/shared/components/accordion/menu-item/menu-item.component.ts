import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';
import { AccordionMenu } from '../types/accordion-menu';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class MenuItemComponent implements OnInit {

  constructor(
    public menuService: SideMenuService,
    private router: Router
  ) { }

  @Input()
  menus: AccordionMenu[] = [];

  @Input()
  parentRef: any;

  @Output()
  activateMenu = new EventEmitter<AccordionMenu>();

  ngOnInit(): void {
  }

  activate(menu: AccordionMenu) {
    if (menu.isLink) {
      this.navigate(menu.url);
    } else {
      menu.active = !menu.active;
    }
  }

  collapse(menu: AccordionMenu) {
    menu.active = !menu.active;
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }

  abrirMenuLateral() {
    this.menuService.abrir();
  }

  fecharMenuLateral() {
    this.menuService.fechar();
  }

}
