// tslint:disable-next-line: max-line-length
export const loremIpsumPlaceHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export interface ColorTheme {
	name: string;
	textColor: string;
}

export class BootstrapTheme {

	// private to disallow creating other instances of this type
	private constructor(private readonly key: string, public readonly value: ColorTheme) { }

	static readonly PRIMARY = new BootstrapTheme(
		"PRIMARY", { name: "primary", textColor: "light" });
	static readonly PRIMARY_LIGHT = new BootstrapTheme(
		"PRIMARY", { name: "primary-light", textColor: "light" });
	static readonly PRIMARY_LIGHTER = new BootstrapTheme(
		"PRIMARY", { name: "primary-lighter", textColor: "light" });
	static readonly PRIMARY_DARK = new BootstrapTheme(
		"PRIMARY", { name: "primary-dark", textColor: "light" });
	static readonly PRIMARY_DARKER = new BootstrapTheme(
		"PRIMARY", { name: "primary-darker", textColor: "light" });

	static readonly SECONDARY = new BootstrapTheme(
		"SECONDARY", { name: "secondary", textColor: "light" });
	static readonly SECONDARY_LIGHT = new BootstrapTheme(
		"SECONDARY_LIGHT", { name: "secondary-light", textColor: "light" });
	static readonly SECONDARY_LIGHTER = new BootstrapTheme(
		"SECONDARY_LIGHTER", { name: "secondary-lighter", textColor: "light" });
	static readonly SECONDARY_DARK = new BootstrapTheme(
		"SECONDARY_DARK", { name: "secondary-dark", textColor: "light" });
	static readonly SECONDARY_DARKER = new BootstrapTheme(
		"SECONDARY_DARKER", { name: "secondary-darker", textColor: "light" });

	static readonly SUCCESS = new BootstrapTheme(
		"SUCCESS", { name: "success", textColor: "light" });
	static readonly SUCCESS_LIGHT = new BootstrapTheme(
		"SUCCESS_LIGHT", { name: "success-light", textColor: "light" });
	static readonly SUCCESS_LIGHTER = new BootstrapTheme(
		"SUCCESS_LIGHTER", { name: "success-lighter", textColor: "light" });
	static readonly SUCCESS_DARK = new BootstrapTheme(
		"SUCCESS_DARK", { name: "success-dark", textColor: "light" });
	static readonly SUCCESS_DARKER = new BootstrapTheme(
		"SUCCESS_DARKER", { name: "success-darker", textColor: "light" });

	static readonly DANGER = new BootstrapTheme(
		"DANGER", { name: "danger", textColor: "light" });
	static readonly DANGER_LIGHT = new BootstrapTheme(
		"DANGER_LIGHT", { name: "danger-light", textColor: "light" });
	static readonly DANGER_LIGHTER = new BootstrapTheme(
		"DANGER_LIGHTER", { name: "danger-lighter", textColor: "light" });
	static readonly DANGER_DARK = new BootstrapTheme(
		"DANGER_DARK", { name: "danger-dark", textColor: "light" });
	static readonly DANGER_DARKER = new BootstrapTheme(
		"DANGER_DARKER", { name: "danger-darker", textColor: "light" });

	static readonly INFO = new BootstrapTheme(
		"INFO", { name: "info", textColor: "light" });
	static readonly INFO_LIGHT = new BootstrapTheme(
		"INFO_LIGHT", { name: "info-light", textColor: "light" });
	static readonly INFO_LIGHTER = new BootstrapTheme(
		"INFO_LIGHTER", { name: "info-lighter", textColor: "light" });
	static readonly INFO_DARK = new BootstrapTheme(
		"INFO_DARK", { name: "info-dark", textColor: "light" });
	static readonly INFO_DARKER = new BootstrapTheme(
		"INFO_DARKER", { name: "info-darker", textColor: "light" });

	static readonly WARNING = new BootstrapTheme(
		"WARNING", { name: "warning", textColor: "light" });
	static readonly WARNING_LIGHT = new BootstrapTheme(
		"WARNING_LIGHT", { name: "warning-light", textColor: "light" });
	static readonly WARNING_LIGHTER = new BootstrapTheme(
		"WARNING_LIGHTER", { name: "warning-lighter", textColor: "light" });
	static readonly WARNING_DARK = new BootstrapTheme(
		"WARNING_DARK", { name: "warning-dark", textColor: "light" });
	static readonly WARNING_DARKER = new BootstrapTheme(
		"WARNING_DARKER", { name: "warning-darker", textColor: "light" });

	static readonly TURQUESA = new BootstrapTheme(
		"TURQUESA", { name: "turquesa", textColor: "light" });
	static readonly TURQUESA_LIGHT = new BootstrapTheme(
		"TURQUESA_LIGHT", { name: "turquesa-light", textColor: "light" });
	static readonly TURQUESA_LIGHTER = new BootstrapTheme(
		"TURQUESA_LIGHTER", { name: "turquesa-lighter", textColor: "light" });
	static readonly TURQUESA_DARK = new BootstrapTheme(
		"TURQUESA_DARK", { name: "turquesa-dark", textColor: "light" });
	static readonly TURQUESA_DARKER = new BootstrapTheme(
		"TURQUESA_DARKER", { name: "turquesa-darker", textColor: "light" });

	static readonly LIMAO = new BootstrapTheme(
		"LIMAO", { name: "limao", textColor: "light" });
	static readonly LIMAO_LIGHT = new BootstrapTheme(
		"LIMAO_LIGHT", { name: "limao-light", textColor: "light" });
	static readonly LIMAO_LIGHTER = new BootstrapTheme(
		"LIMAO_LIGHTER", { name: "limao-lighter", textColor: "light" });
	static readonly LIMAO_DARK = new BootstrapTheme(
		"LIMAO_DARK", { name: "limao-dark", textColor: "light" });
	static readonly LIMAO_DARKER = new BootstrapTheme(
		"LIMAO_DARKER", { name: "limao-darker", textColor: "light" });

	static readonly GOIABA = new BootstrapTheme(
		"GOIABA", { name: "goiaba", textColor: "light" });
	static readonly GOIABA_LIGHT = new BootstrapTheme(
		"GOIABA_LIGHT", { name: "goiaba-light", textColor: "light" });
	static readonly GOIABA_LIGHTER = new BootstrapTheme(
		"GOIABA_LIGHTER", { name: "goiaba-lighter", textColor: "light" });
	static readonly GOIABA_DARK = new BootstrapTheme(
		"GOIABA_DARK", { name: "goiaba-dark", textColor: "light" });
	static readonly GOIABA_DARKER = new BootstrapTheme(
		"GOIABA_DARKER", { name: "goiaba-darker", textColor: "light" });

	static readonly CEU = new BootstrapTheme(
		"CEU", { name: "ceu", textColor: "light" });
	static readonly CEU_LIGHT = new BootstrapTheme(
		"CEU_LIGHT", { name: "ceu-light", textColor: "light" });
	static readonly CEU_LIGHTER = new BootstrapTheme(
		"CEU_LIGHTER", { name: "ceu-lighter", textColor: "light" });
	static readonly CEU_DARK = new BootstrapTheme(
		"CEU_DARK", { name: "ceu-dark", textColor: "light" });
	static readonly CEU_DARKER = new BootstrapTheme(
		"CEU_DARKER", { name: "ceu-darker", textColor: "light" });

	static readonly TANGERINA = new BootstrapTheme(
		"TANGERINA", { name: "tangerina", textColor: "light" });
	static readonly TANGERINA_LIGHT = new BootstrapTheme(
		"TANGERINA_LIGHT", { name: "tangerina-light", textColor: "light" });
	static readonly TANGERINA_LIGHTER = new BootstrapTheme(
		"TANGERINA_LIGHTER", { name: "tangerina-lighter", textColor: "light" });
	static readonly TANGERINA_DARK = new BootstrapTheme(
		"TANGERINA_DARK", { name: "tangerina-dark", textColor: "light" });
	static readonly TANGERINA_DARKER = new BootstrapTheme(
		"TANGERINA_DARKER", { name: "tangerina-darker", textColor: "light" });

	static readonly UVA = new BootstrapTheme(
		"UVA", { name: "uva", textColor: "light" });
	static readonly UVA_LIGHT = new BootstrapTheme(
		"UVA_LIGHT", { name: "uva-light", textColor: "light" });
	static readonly UVA_LIGHTER = new BootstrapTheme(
		"UVA_LIGHTER", { name: "uva-lighter", textColor: "light" });
	static readonly UVA_DARK = new BootstrapTheme(
		"UVA_DARK", { name: "uva-dark", textColor: "light" });
	static readonly UVA_DARKER = new BootstrapTheme(
		"UVA_DARKER", { name: "uva-darker", textColor: "light" });

	static readonly CINZA = new BootstrapTheme(
		"CINZA", { name: "cinza", textColor: "light" });
	static readonly CINZA_LIGHT = new BootstrapTheme(
		"CINZA_LIGHT", { name: "cinza-light", textColor: "light" });
	static readonly CINZA_LIGHTER = new BootstrapTheme(
		"CINZA_LIGHTER", { name: "cancel-lighter", textColor: "light" });
	static readonly CINZA_DARK = new BootstrapTheme(
		"CINZA_DARK", { name: "cinza-dark", textColor: "light" });
	static readonly CINZA_DARKER = new BootstrapTheme(
		"CINZA_DARKER", { name: "cinza-darker", textColor: "light" });

	static readonly GRAFITE = new BootstrapTheme(
		"GRAFITE", { name: "grafite", textColor: "light" });
	static readonly GRAFITE_LIGHT = new BootstrapTheme(
		"GRAFITE_LIGHT", { name: "grafite-light", textColor: "light" });
	static readonly GRAFITE_LIGHTER = new BootstrapTheme(
		"GRAFITE_LIGHTER", { name: "grafite-lighter", textColor: "light" });
	static readonly GRAFITE_DARK = new BootstrapTheme(
		"GRAFITE_DARK", { name: "grafite-dark", textColor: "light" });
	static readonly GRAFITE_DARKER = new BootstrapTheme(
		"GRAFITE_DARKER", { name: "grafite-darker", textColor: "light" });

	static getTemas() {
		const temas: ColorTheme[] = [];
		Object.getOwnPropertyNames(BootstrapTheme).forEach((theme: any) => {
			const tema = BootstrapTheme[theme].value;
			if (tema) {
				temas.push(tema);
			}
		});
		return temas;
	}

	toString() {
		return this.key;
	}
}

export class GradientTheme {
	static readonly PRIMARY = new GradientTheme(
		"PRIMARY", { name: "gradient-primary", textColor: "light" });
	static readonly SECONDARY = new GradientTheme(
		"SECONDARY", { name: "gradient-sky", textColor: "light" });
	static readonly SUCCESS = new GradientTheme(
		"SUCCESS", { name: "gradient-success", textColor: "light" });
	static readonly DANGER = new GradientTheme(
		"DANGER", { name: "gradient-aux", textColor: "light" });
	static readonly INFO = new GradientTheme(
		"INFO", { name: "gradient-light", textColor: "dark" });
	static readonly WARNING = new GradientTheme(
		"WARNING", { name: "gradient-dark", textColor: "light" });

	static getTemas() {
		const temas = [];
		Object.getOwnPropertyNames(GradientTheme).forEach((theme: any) => {
			const tema = GradientTheme[theme].value;
			if (tema) {
				temas.push(tema);
			}
		});
		return temas;
	}

	// private to disallow creating other instances of this type
	private constructor(private readonly key: string, public readonly value: ColorTheme) {
	}

	toString() {
		return this.key;
	}
}

export const LOGO_CAIXA_BRANCO_SRC = "assets/images/caixa-logo-x-branco.png";
export const LOGO_CAIXA_SRC = "assets/images/caixa-logo-x.png";
export const LOGO_COMPLETO_SRC = "assets/images/caixa-logo-completo.png";
export const LOGO_COMPLETO_BRANCO_SRC = "assets/images/caixa-logo-completo-branco.png";

export enum Meses {
	JAN = 0,
	FEV,
	MAR,
	ABR,
	MAI,
	JUN,
	JUL,
	AGO,
	SET,
	OUT,
	NOV,
	DEZ
}
