import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { Config } from 'protractor';
import { AccordionMenu } from './types/accordion-menu';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { SideMenuService } from 'src/app/menu/side-menu/side-menu.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
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

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
    this.router.events.subscribe(ev => {
      if (ev instanceof NavigationEnd) {
        this.toggleAllFalse(this.menus);
        this.toggleActiveByLocation(this.location.path(), this.menus);
        this.cdr.detectChanges();
      }
    });
  }

  toggleActiveByLocation(location: string, menus: AccordionMenu[]) {
    menus.forEach((menu) => {
      if (location.includes(menu.url)) {
        menu.active = true;
        if (menu.submenu) {
          this.toggleActiveByLocation(location, menu.submenu);
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

  toggleAllFalse(menus: AccordionMenu[]) {
    menus.forEach(menu => {
      menu.active = false;
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
    this.router.navigateByUrl(url);
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
