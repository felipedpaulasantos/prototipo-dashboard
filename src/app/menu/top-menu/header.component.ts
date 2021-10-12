import { Component, Input, OnInit, ElementRef, ViewChild, Renderer2 } from "@angular/core";
import { OAuthService } from "angular-oauth2-oidc";
import { Observable } from "rxjs";

import { UserService } from "../../authentication/users/user.service";
import { User } from "../../authentication/users/user";
import { ModalService } from "src/app/guia-caixa/services/modal.service";
import { SideMenuService } from "../side-menu/side-menu.service";
import { GuiaCaixaStyleService, Tema } from "src/app/guia-caixa/services/style-guia-caixa.service";
import { LOGO_CAIXA_BRANCO_SRC, LOGO_COMPLETO_BRANCO_SRC, Meses } from "src/app/guia-caixa/constants/constants";
import { StyleService } from "src/app/shared/services/style.service";
import { GlobalThemeVariables, GlobalThemes, GlobalTheme } from "src/app/shared/model/global-style";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {

  logoXBranco = LOGO_CAIXA_BRANCO_SRC;
  logoCompletoBranco = LOGO_COMPLETO_BRANCO_SRC;

  @ViewChild("headerGeral") headerGeral: ElementRef;
  @Input() tema: Tema;
  @Input() resources;
  user$ = new Observable<User>(null);
  user: User;
  isMenuAberto: boolean;
  dataHora: string;

  currentFontSize: string;
  currentTheme: GlobalThemes;

  constructor(
    private oauthService: OAuthService,
    private userService: UserService,
    private modalService: ModalService,
    private sidemenuService: SideMenuService,
    private styleService: StyleService,
    private renderer: Renderer2
  ) {
    this.user$ = this.userService.perfil;
    this.sidemenuService.isAberto$.subscribe(isAberto => this.isMenuAberto = isAberto);
    this.styleService.currentFontSize$.subscribe(fontSize => this.currentFontSize = fontSize);
    this.styleService.currentGlobalStyle$.subscribe(theme => this.currentTheme = theme);
    this.showDate();
    this.setDefaultTheme();
  }

  fontSizes = [
    { name: "Pequeno", value: "13px" },
    { name: "Médio", value: "14px" },
    { name: "Grande", value: "15px" },
    { name: "Muito Grande", value: "16px" },
    { name: "Extra Grande", value: "17px" }
  ];

  themes: GlobalThemes[] = [];

  ngOnInit(): void {
    this.user = this.setMockUser();
    const themes = GlobalThemes.getThemes();
    themes.forEach(theme => {
      const body = theme.value.theme.cxBodyBgColor;
      const secundario = theme.value.theme.cxAccent;
      const textColor = theme.value.theme.cxBodyTextColor;
      const style = getComputedStyle(document.body);
      const colorBody = style.getPropertyValue(body);
      const colorSecundario = style.getPropertyValue(secundario);
      const colorText = style.getPropertyValue(textColor);
      if (theme.value.name === "highContrast") {
        theme["background"] = `linear-gradient(-45deg, ${colorText}, ${colorText} 49%, white 49%, white 51%, ${colorBody} 51%)`;
      } else {
        theme["background"] = `linear-gradient(-45deg, ${colorSecundario}, ${colorSecundario} 49%, white 49%, white 51%, ${colorBody} 51%)`;
      }
    });
    this.themes = themes;
  }

  toggleHeaderBackground() {
    console.log("TEMA", this.currentTheme);
    const temaAtual = this.currentTheme.value.theme;
    const headerBgVariableValue = this.styleService.getCssVariableValue("--cxHeaderBgColor");
    if (headerBgVariableValue === this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor)) {
      console.log("IGUAL", headerBgVariableValue, temaAtual.cxHeaderBgColor);
      this.styleService.setCssVariable(
        "--cxHeaderBgColor",
        "linear-gradient(90deg, #005CA9 40%, #54BBAB 100%)"
      );
    } else {
      console.log("DIFERENTE", headerBgVariableValue, temaAtual.cxHeaderBgColor);
      this.styleService.setCssVariable(
        "--cxHeaderBgColor",
        this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor)
      );
    }
    console.log("HEADER BG COLOR", this.styleService.getCssVariableValue(temaAtual.cxHeaderBgColor));
  }

  showLogoutModal() {
    this.modalService.show({
      showCancelar: true,
      titulo: "Logout",
      classTitulo: "subtitulo text-danger-dark",
      mensagem: "Deseja realmente sair?",
      btOkTexto: "Sair",
      btnOkClass: "btn btn-danger",
      btnCancelarClass: "btn btn-outline-dark",
      btCancelarTexto: "Cancelar",
      modalBodyClass: "bg-danger-dark text-cinza-light"
    });

    this.modalService.btOKEvent.subscribe(() => {
      this.sair();
    });
  }

  sair(): void {
    this.oauthService.logOut();
  }

  trocaMenuLateral() {
    this.sidemenuService.trocar();
  }

  setMockUser(): User {
    return {
      nome_completo: "Usuário Teste",
      primeiro_nome: "Usuário",
      matricula: "C123456",
      roles: []
    };
  }

  showDate(): void {
    this.setDate(new Date());
    setInterval(() => {
      this.setDate(new Date());
    }, 1000);
  }

  setDate(data: Date) {
    const hora = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = Meses[data.getMonth()];
    const ano = data.getFullYear();

    this.dataHora = `${hora}h${minutos} - ${dia} ${mes} ${ano}`;
  }

  setFontSize(fontSize: string): void {
    this.styleService.setFontSize(fontSize);
  }

  setTheme(tema: string) {
    this.styleService.setGlobalTheme(tema);
  }

  setDefaultTheme() {
    this.styleService.setDefaultStyle();
  }

}
