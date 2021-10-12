import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GlobalThemes } from "../model/global-style";

@Injectable({
  providedIn: "root"
})
export class StyleService {

  private renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  readonly BODY_FONT_SIZE = "bodyFontSize";
  readonly BODY_FONT_SIZE_CSS = "--cxBodyFontSize";
  readonly DEFAULT_BODY_FONT_SIZE = "13px";
  readonly BODY_BG_COLOR = "bodyBgColor";
  readonly BODY_TEXT_COLOR = "bodyTextColor";
  readonly GLOBAL_THEME = "globalTheme";
  readonly DEFAULT_GLOBAL_THEME_NAME = GlobalThemes.lightTheme.value.name;

  private currentGlobalStyleSource = new BehaviorSubject<GlobalThemes>(null);
  public currentGlobalStyle$ = this.currentGlobalStyleSource.asObservable();

  private currentFontSizeSource = new BehaviorSubject<string>(null);
  public currentFontSize$ = this.currentFontSizeSource.asObservable();

  public setDefaultStyle(): void {
    let bodyFontSize = this.getLocalStorageValue(this.BODY_FONT_SIZE);
    if (!bodyFontSize || bodyFontSize === "null") {
      bodyFontSize = this.DEFAULT_BODY_FONT_SIZE;
    }
    this.setFontSize(bodyFontSize);

    let themeName = this.getLocalStorageValue(this.GLOBAL_THEME);
    if (!themeName || !GlobalThemes[themeName]) {
      themeName = this.DEFAULT_GLOBAL_THEME_NAME;
    }
    this.setGlobalTheme(themeName);
  }

  public setFontSize(fontSize: string) {
    this.setCssVariable(this.BODY_FONT_SIZE_CSS, fontSize);
    window.localStorage.setItem(this.BODY_FONT_SIZE, fontSize);
    this.currentFontSizeSource.next(fontSize);
  }

  public setGlobalTheme(tema: string) {
    const body = this.document.body;
    const globalTheme: GlobalThemes = GlobalThemes[tema];
    const theme = globalTheme.value.theme;
    let color = "";
    for (const prop in theme) {
      if (theme.hasOwnProperty(prop)) {
        if (theme[prop][0] === "-") {
          const style = getComputedStyle(document.body);
          color = style.getPropertyValue(theme[prop]);
        } else {
          color = theme[prop];
        }
        this.setCssVariable(`--${prop}`, color);
      }
    }
    this.renderer.setAttribute(body, "class", globalTheme.value.className);
    this.setLocalStorageValue(this.GLOBAL_THEME, tema);
    this.currentGlobalStyleSource.next(globalTheme);
  }

  public getCssVariableValue(name: string) {
    const style = getComputedStyle(document.body);
    return style.getPropertyValue(name);
  }

  public setCssVariable(name: string, value: string): void {
    const root = this.document.documentElement;
    root.style.setProperty(name, value);
  }

  private getLocalStorageValue(name: string): string {
    return window.localStorage.getItem(name);
  }

  private setLocalStorageValue(name: string, value: string) {
    window.localStorage.setItem(name, value);
  }

}
