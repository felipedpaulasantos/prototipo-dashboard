export interface GlobalThemeMainVariables {
   cxHeaderBgColor: string;
   cxHeaderTextColor: string;
   cxSidemenuBgColor: string;
   cxSidemenuTextColor: string;
   cxSidemenuActiveBgColor: string;
   cxSidemenuActiveTextColor: string;
   cxBodyBgColor: string;
   cxBodyTextColor: string;
   cxMain: string;
   cxMainDark: string;
   cxMainDarker: string;
   cxMainLight: string;
   cxMainLighter: string;
   cxAccent: string;
   cxAccentDark: string;
   cxAccentDarker: string;
   cxAccentLight: string;
   cxAccentLighter: string;
   cxLink: string;
   cxRemark: string;
   cxAux: string;
   cxAuxDark: string;
   cxAuxDarker: string;
   cxAuxLight: string;
   cxAuxLighter: string;
   cxCancel: string;
   cxCancelDark: string;
   cxCancelDarker: string;
   cxCancelLight: string;
   cxCancelLighter: string;
}
export interface GlobalThemeBaseVariables {
   cxSuccess: string;
   cxSuccessContrast: string;
   cxSuccessInvert: string;
   cxSuccessInvertContrast: string;
   cxDanger: string;
   cxDangerContrast: string;
   cxDangerInvert: string;
   cxDangerInvertContrast: string;
   cxWarning: string;
   cxWarningContrast: string;
   cxWarningInvert: string;
   cxWarningInvertContrast: string;
   cxInfo: string;
   cxInfoContrast: string;
   cxInfoInvert: string;
   cxInfoInvertContrast: string;
   cxBase: string;
   cxBackground: string;
   cxContrast: string;
   cxShadow: string;
   cxShadowSm: string;
   cxShadowLg: string;
   cxTransparentBase025: string;
   cxTransparentBase050: string;
   cxTransparentBase075: string;
   cxTransparentBase25: string;
   cxTransparentBase50: string;
   cxTransparentBase75: string;
   cxTransparentContrast025: string;
   cxTransparentContrast050: string;
   cxTransparentContrast075: string;
   cxTransparentContrast25: string;
   cxTransparentContrast50: string;
   cxTransparentContrast75: string;
}

export interface GlobalThemeVariables extends GlobalThemeMainVariables, GlobalThemeBaseVariables {}

const baseLightTheme: GlobalThemeBaseVariables = {
   cxSuccess: "--success",
   cxSuccessContrast: "--cinza-lighter",
   cxSuccessInvert: "--success-lighter",
   cxSuccessInvertContrast: "--cinza-lighter",
   cxDanger: "--danger",
   cxDangerContrast: "--white",
   cxDangerInvert: "--danger-lighter",
   cxDangerInvertContrast: "--grafite-dark",
   cxWarning: "--warning",
   cxWarningContrast: "--grafite-dark",
   cxWarningInvert: "--warning-lighter",
   cxWarningInvertContrast: "--grafite-dark",
   cxInfo: "--info",
   cxInfoContrast: "--white",
   cxInfoInvert: "--info-lighter",
   cxInfoInvertContrast: "--white",
   cxBase: "--cinza-lighter",
   cxBackground: "--polar",
   cxContrast: "--grafite-dark",
   cxShadow: "--cxShadowDark",
   cxShadowSm: "--cxShadowDarkSm",
   cxShadowLg: "--cxShadowDarkLg",
   cxTransparentBase025: "rgba(255, 255, 255, 0.025)",
   cxTransparentBase050: "rgba(255, 255, 255, 0.05)",
   cxTransparentBase075: "rgba(255, 255, 255, 0.075)",
   cxTransparentBase25: "rgba(255, 255, 255, 0.25)",
   cxTransparentBase50: "rgba(255, 255, 255, 0.5)",
   cxTransparentBase75: "rgba(255, 255, 255, 0.75)",
   cxTransparentContrast025: "rgba(0, 0, 0, 0.025)",
   cxTransparentContrast050: "rgba(0, 0, 0, 0.05)",
   cxTransparentContrast075: "rgba(0, 0, 0, 0.075)",
   cxTransparentContrast25: "rgba(0, 0, 0, 0.25)",
   cxTransparentContrast50: "rgba(0, 0, 0, 0.5)",
   cxTransparentContrast75: "rgba(0, 0, 0, 0.75)"
};

const baseDarkTheme: GlobalThemeBaseVariables = {
   cxSuccess: "--success",
   cxSuccessContrast: "--cinza-lighter",
   cxSuccessInvert: "--success-lighter",
   cxSuccessInvertContrast: "--cinza-lighter",
   cxDanger: "--danger",
   cxDangerContrast: "--white",
   cxDangerInvert: "--danger-lighter",
   cxDangerInvertContrast: "--grafite-dark",
   cxWarning: "--warning",
   cxWarningContrast: "--grafite-dark",
   cxWarningInvert: "--warning-lighter",
   cxWarningInvertContrast: "--grafite-dark",
   cxInfo: "--info",
   cxInfoContrast: "--white",
   cxInfoInvert: "--info-lighter",
   cxInfoInvertContrast: "--white",
   cxBase: "--grafite-darker",
   cxBackground: "--grafite-dark",
   cxContrast: "--cinza-lighter",
   cxShadow: "--cxShadowLight",
   cxShadowSm: "--cxShadowLightSm",
   cxShadowLg: "--cxShadowLightLg",
   cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
   cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
   cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
   cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
   cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
   cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
   cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
   cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
   cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
   cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
   cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};

const baseHighContrastTheme: GlobalThemeBaseVariables = {
   cxSuccess: "--success-lighter",
   cxSuccessContrast: "--grafite-darker",
   cxSuccessInvert: "--success-lighter",
   cxSuccessInvertContrast: "--cinza-lighter",
   cxDanger: "--danger-lighter",
   cxDangerContrast: "--white",
   cxDangerInvert: "--danger-lighter",
   cxDangerInvertContrast: "--grafite-darker",
   cxWarning: "--warning",
   cxWarningContrast: "--grafite-dark",
   cxWarningInvert: "--warning-lighter",
   cxWarningInvertContrast: "--grafite-darker",
   cxInfo: "--info-lighter",
   cxInfoContrast: "--white",
   cxInfoInvert: "--info-lighter",
   cxInfoInvertContrast: "--white",
   cxBase: "--grafite-darker",
   cxBackground: "--grafite-darker",
   cxContrast: "--warning",
   cxShadow: "--cxShadowLight",
   cxShadowSm: "--cxShadowLightSm",
   cxShadowLg: "--cxShadowLightLg",
   cxTransparentBase025: "rgba(0, 0, 0, 0.025)",
   cxTransparentBase050: "rgba(0, 0, 0, 0.05)",
   cxTransparentBase075: "rgba(0, 0, 0, 0.075)",
   cxTransparentBase25: "rgba(0, 0, 0, 0.25)",
   cxTransparentBase50: "rgba(0, 0, 0, 0.5)",
   cxTransparentBase75: "rgba(0, 0, 0, 0.75)",
   cxTransparentContrast025: "rgba(255, 255, 255, 0.025)",
   cxTransparentContrast050: "rgba(255, 255, 255, 0.05)",
   cxTransparentContrast075: "rgba(255, 255, 255, 0.075)",
   cxTransparentContrast25: "rgba(255, 255, 255, 0.25)",
   cxTransparentContrast50: "rgba(255, 255, 255, 0.5)",
   cxTransparentContrast75: "rgba(255, 255, 255, 0.75)"
};

/* Light blue theme */
const blueLightBaseTheme: GlobalThemeMainVariables = {
   cxHeaderBgColor: "--primary",
   cxHeaderTextColor: "--white",
   cxSidemenuBgColor: "--white",
   cxSidemenuTextColor: "--grafite",
   cxSidemenuActiveBgColor: "--primary",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--polar",
   cxBodyTextColor: "--grafite",
   cxMain: "--secondary",
   cxMainDark: "--secondary-dark",
   cxMainDarker: "--secondary-darker",
   cxMainLight: "--secondary-light",
   cxMainLighter: "--secondary-lighter",
   cxAccent: "--primary",
   cxAccentDark: "--primary-dark",
   cxAccentDarker: "--primary-darker",
   cxAccentLight: "--primary-light",
   cxAccentLighter: "--primary-lighter",
   cxLink: "--primary-light",
   cxRemark: "--turquesa",
   cxAux: "--grafite-light",
   cxAuxDark: "--grafite",
   cxAuxDarker: "--grafite-dark",
   cxAuxLight: "--grafite-lighter",
   cxAuxLighter: "--cancel-darker",
   cxCancel: "--cinza",
   cxCancelDark: "--cinza-dark",
   cxCancelDarker: "--cinza-darker",
   cxCancelLight: "--cinza-light",
   cxCancelLighter: "--cinza-lighter",
};
export const blueLightTheme: GlobalThemeVariables = Object.assign(blueLightBaseTheme, baseLightTheme);

/* Dark lightblue theme */
const blueDarkBaseTheme: GlobalThemeMainVariables = {
   cxHeaderBgColor: "--grafite-darker",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--grafite-darker",
   cxSidemenuTextColor: "--cinza-lighter",
   cxSidemenuActiveBgColor: "--primary-lighter",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--grafite-dark",
   cxBodyTextColor: "--white",
   cxMain: "--secondary",
   cxMainDark: "--secondary-dark",
   cxMainDarker: "--secondary-darker",
   cxMainLight: "--secondary-light",
   cxMainLighter: "--secondary-lighter",
   cxAccent: "--primary-lighter",
   cxAccentDark: "--primary-light",
   cxAccentDarker: "--primary",
   cxAccentLight: "--primary-lighter",
   cxAccentLighter: "--primary-lighter",
   cxLink: "--primary-light",
   cxRemark: "--turquesa",
   cxAux: "--cinza",
   cxAuxDark: "--cinza-dark",
   cxAuxDarker: "--cinza-darker",
   cxAuxLight: "--cinza-light",
   cxAuxLighter: "--cinza-lighter",
   cxCancel: "--grafite-light",
   cxCancelDark: "--grafite",
   cxCancelDarker: "--grafite-dark",
   cxCancelLight: "--grafite-lighter",
   cxCancelLighter: "--cancel-darker",
};
export const blueDarkTheme: GlobalThemeVariables = Object.assign(blueDarkBaseTheme, baseDarkTheme);

/* Purple Theme */
const purpleLightBaseTheme: GlobalThemeMainVariables = {
   cxHeaderBgColor: "--uva-darker",
   cxHeaderTextColor: "--cinza-lighter",
   cxSidemenuBgColor: "--white",
   cxSidemenuTextColor: "--grafite",
   cxSidemenuActiveBgColor: "--uva",
   cxSidemenuActiveTextColor: "--white",
   cxBodyBgColor: "--polar",
   cxBodyTextColor: "--grafite",
   cxMain: "--secondary",
   cxMainDark: "--secondary-dark",
   cxMainDarker: "--secondary-darker",
   cxMainLight: "--secondary-light",
   cxMainLighter: "--secondary-lighter",
   cxAccent: "--uva",
   cxAccentDark: "--uva-dark",
   cxAccentDarker: "--uva-darker",
   cxAccentLight: "--uva-light",
   cxAccentLighter: "--uva-lighter",
   cxLink: "--primary-light",
   cxRemark: "--tangerina",
   cxAux: "--grafite-light",
   cxAuxDark: "--grafite",
   cxAuxDarker: "--grafite-dark",
   cxAuxLight: "--grafite-lighter",
   cxAuxLighter: "--cancel-darker",
   cxCancel: "--cinza",
   cxCancelDark: "--cinza-dark",
   cxCancelDarker: "--cinza-darker",
   cxCancelLight: "--cinza-light",
   cxCancelLighter: "--cinza-lighter",
};
export const purpleLightTheme: GlobalThemeVariables = Object.assign(purpleLightBaseTheme, baseLightTheme);


/* High Contrast theme */
const highContrastBaseTheme: GlobalThemeMainVariables = {
   cxHeaderBgColor: "--black",
   cxHeaderTextColor: "--warning",
   cxSidemenuBgColor: "--black",
   cxSidemenuTextColor: "--warning",
   cxSidemenuActiveBgColor: "--warning",
   cxSidemenuActiveTextColor: "--black",
   cxBodyBgColor: "--black",
   cxBodyTextColor: "--warning",
   cxMain: "--secondary-light",
   cxMainDark: "--secondary-dark",
   cxMainDarker: "--secondary-darker",
   cxMainLight: "--secondary-light",
   cxMainLighter: "--secondary-lighter",
   cxAccent: "--ceu",
   cxAccentDark: "--ceu-dark",
   cxAccentDarker: "--ceu-darker",
   cxAccentLight: "--ceu-light",
   cxAccentLighter: "--ceu-lighter",
   cxLink: "--primary-light",
   cxRemark: "--turquesa",
   cxAux: "--cinza-lighter",
   cxAuxDark: "--cinza-dark",
   cxAuxDarker: "--cinza-darker",
   cxAuxLight: "--cinza-light",
   cxAuxLighter: "--cinza-lighter",
   cxCancel: "--cinza-lighter",
   cxCancelDark: "--grafite",
   cxCancelDarker: "--grafite-dark",
   cxCancelLight: "--grafite-lighter",
   cxCancelLighter: "--cancel-darker",
};
export const highContrastTheme: GlobalThemeVariables = Object.assign(highContrastBaseTheme, baseHighContrastTheme);


export interface GlobalTheme {
   name: string;
   className: string;
   theme: GlobalThemeVariables;
}
export class GlobalThemes {

   private constructor(
      public readonly key: string,
      public readonly value: GlobalTheme
   ) { }

   static readonly lightTheme = new GlobalThemes(
      "Tema Padrão", { name: "lightTheme", className: "tema-padrao", theme: blueLightTheme }
   );

/*    static readonly purpleTheme = new GlobalThemes(
      "Tema Claro e Roxo", { name: "purpleTheme", className: "tema-claro", theme: purpleLightTheme }
   ); */

   static readonly darkTheme = new GlobalThemes(
      "Tema Escuro", { name: "darkTheme", className: "tema-escuro", theme: blueDarkTheme }
   );

   static readonly highContrast = new GlobalThemes(
      "Tema Alto Contraste", { name: "highContrast", className: "tema-alto-contraste", theme: highContrastTheme }
   );

   static getThemes(): GlobalThemes[] {
		const temas: GlobalThemes[] = [];
		Object.getOwnPropertyNames(GlobalThemes).forEach((theme: any) => {
         const tema = GlobalThemes[theme];
			if (tema && tema.value) {
				temas.push(tema);
			}
		});
		return temas;
   }

   toString(): string {
      return this.key;
   }
}
