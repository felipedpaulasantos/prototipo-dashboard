import { loremIpsumPlaceHolder } from '../guia-caixa/constants/constants';

export const textosCores = {
	primary: `
	Coloque o texto aqui, podendo utilizar <b>HTML</b> se desejado.<br>
	Pule linhas e use classes <span class="text-principal">normalmente</span>.<br>
	${loremIpsumPlaceHolder}
	`,

	secondary: loremIpsumPlaceHolder,

	success: loremIpsumPlaceHolder + "<br>" + loremIpsumPlaceHolder,

	danger: loremIpsumPlaceHolder,

	info: loremIpsumPlaceHolder + "<br>" + loremIpsumPlaceHolder,

	warning: loremIpsumPlaceHolder,

	apoio: loremIpsumPlaceHolder + "<br>" + loremIpsumPlaceHolder,

	aux: loremIpsumPlaceHolder + "<br>" + loremIpsumPlaceHolder,

	light: loremIpsumPlaceHolder,

	dark: loremIpsumPlaceHolder

};
