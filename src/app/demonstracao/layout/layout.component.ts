import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { LOGO_CAIXA_BRANCO_SRC, LOGO_CAIXA_SRC, LOGO_COMPLETO_SRC, LOGO_COMPLETO_BRANCO_SRC, BootstrapTheme, GradientTheme } from "src/app/guia-caixa/constants/constants";
import { GuiaCaixaStyleService, Tema } from "src/app/guia-caixa/services/style-guia-caixa.service";
import { SideMenuService } from "src/app/menu/side-menu/side-menu.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {

  logoBranco = LOGO_CAIXA_BRANCO_SRC;
  logoPadrao = LOGO_CAIXA_SRC;
  logoCompleto = LOGO_COMPLETO_SRC;
  logoCompletoBranco = LOGO_COMPLETO_BRANCO_SRC;

  constructor(
    public styleService: GuiaCaixaStyleService,
    private fb: FormBuilder,
    private menuService: SideMenuService
  ) { }

  temas = [];
  temasGradiente = [];
  temaGlobal: Tema;

  formToolbar = this.fb.group({
    icone: [""],
    bg: [""],
    tom: [""]
  });

  formSidemenu = this.fb.group({
    bg: [""],
    tom: [""]
  });

  rows: any[] = [];

  resources = [];

  groupColumns(resources: any[]): any[] {
    const newRows = [];
    for (let index = 0; index < resources.length; index += 3) {
      newRows.push(resources.slice(index, index + 3));
    }
    return newRows;
  }

  ngOnInit() {
    this.temas = BootstrapTheme.getTemas();
    this.temasGradiente = GradientTheme.getTemas();
    this.menuService.menuItems$.subscribe(items => {
      const componentes = items.find((item) => item.url === "/layout").submenu;
      componentes.forEach(item => {
        this.resources.push(item);
      });
      this.resources = [].concat(this.resources);
      this.rows = this.groupColumns(this.resources);
    });
  }

  onIconChange(src: string): void {
    if (!src) { return; }
    this.styleService.setToolbarIcon(src);
  }

  onToolbarBgChange(theme: string, tom: string = ""): void {

    if (!theme) { return; }

    const temaSelecionado = this.temas.find(tema => tema.name === theme) || (this.temasGradiente.find(tema => tema.name === theme));
    if (!temaSelecionado) { return; }

    if (!tom && this.formToolbar.get("tom").value) {
      tom = this.formToolbar.get("tom").value;
    } else if (!tom || theme.includes("gradient")) {
      tom = "";
    }

    this.styleService.setToolbarBg(temaSelecionado.name + tom);
    this.styleService.setToolbarText(temaSelecionado.textColor);
  }

  onSidemenuBgChange(theme: string, tom?: string): void {

    const temaSelecionado = this.temas.find(tema => tema.name === theme) || { name: "light-light" };

    if (!tom && this.formSidemenu.get("tom").value) {
      tom = this.formSidemenu.get("tom").value;
    } else if (!tom) {
      tom = "";
    }

    this.styleService.setSidemenuBg(temaSelecionado.name + tom);
    this.styleService.setSidemenuText(temaSelecionado.textColor);
  }

  onConteudoPrincipalChange(theme: string) {
    this.styleService.setConteudoPrincipalBg(theme);
  }

}
