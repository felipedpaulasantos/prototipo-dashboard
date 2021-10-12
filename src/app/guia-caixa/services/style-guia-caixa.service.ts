import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LOGO_CAIXA_BRANCO_SRC } from "../constants/constants";


export interface Tema {
  toolbarBg: string;
  toolbarText: string;
  toolbarIcon: string;
  sidemenuBg: string;
  sidemenuText: string;
  counteudoPrincipalBg: string;
}

@Injectable({
  providedIn: "root"
})
export class GuiaCaixaStyleService {

  constructor() { }

  private defaultTheme: Tema = {
    toolbarBg: "gradient-primary",
    toolbarText: "light-light",
    toolbarIcon: LOGO_CAIXA_BRANCO_SRC,
    sidemenuBg: "light-light",
    sidemenuText: "dark",
    counteudoPrincipalBg: ""
  };

  private globalThemeSource = new BehaviorSubject<Tema>(this.defaultTheme);
  globalTheme$ = this.globalThemeSource.asObservable();

  private toolbarBgSource = new BehaviorSubject<string>("primary");
  toolbarBg$ = this.toolbarBgSource.asObservable();

  private toolbarTextSource = new BehaviorSubject<string>("light");
  toolbarText$ = this.toolbarTextSource.asObservable();

  private toolbarIconSource = new BehaviorSubject<string>(LOGO_CAIXA_BRANCO_SRC);
  toolbarIcon$ = this.toolbarIconSource.asObservable();

  private sidemenuBgSource = new BehaviorSubject<string>("light-light");
  sidemenuBg$ = this.sidemenuBgSource.asObservable();

  private conteudoPrincipalBg = new BehaviorSubject<string>("");
  conteudoPrincipalBg$ = this.conteudoPrincipalBg.asObservable();

  setToolbarBg(className: string) {
    const tema = this.globalThemeSource.value;
    tema.toolbarBg = className;
    this.globalThemeSource.next(tema);
  }

  setToolbarText(className: string) {
    const tema = this.globalThemeSource.value;
    tema.toolbarText = className;
    this.globalThemeSource.next(tema);
  }

  setToolbarIcon(src: string) {
    const tema = this.globalThemeSource.value;
    tema.toolbarIcon = src;
    this.globalThemeSource.next(tema);
  }

  setSidemenuBg(className: string) {
    const tema = this.globalThemeSource.value;
    tema.sidemenuBg = className;
    this.globalThemeSource.next(tema);
  }

  setSidemenuText(className: string) {
    const tema = this.globalThemeSource.value;
    tema.sidemenuText = className;
    this.globalThemeSource.next(tema);
  }

  setConteudoPrincipalBg(className: string) {
    const tema = this.globalThemeSource.value;
    tema.counteudoPrincipalBg = className;
    this.globalThemeSource.next(tema);
  }
}
