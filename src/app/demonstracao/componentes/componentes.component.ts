import { Component, OnInit } from "@angular/core";
import { SideMenuService } from "src/app/menu/side-menu/side-menu.service";

@Component({
  selector: "app-componentes",
  templateUrl: "./componentes.component.html",
  styleUrls: ["./componentes.component.css"]
})
export class ComponentesCaixaComponent implements OnInit {

  constructor(
    private menuService: SideMenuService
  ) { }

  rows: any[] = [];

  resources = [];

  ngOnInit() {
    this.menuService.menuItems$.subscribe(items => {
      const componentes = items.find((item) => item.url === "/componentes-caixa").submenu;
      componentes.forEach(item => {
        this.resources.push(item);
      });
      this.resources = [].concat(this.resources);
      this.rows = this.groupColumns(this.resources);
    });
  }

  groupColumns(resources: any[]): any[] {
    const newRows = [];

    for (let index = 0; index < resources.length; index += 3) {
      newRows.push(resources.slice(index, index + 3));
    }

    return newRows;
  }

}
