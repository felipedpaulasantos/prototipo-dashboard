import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { loremIpsumPlaceHolder } from "src/app/guia-caixa/constants/constants";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../../componentes/componentes-interface";


@Component({
  selector: "app-tipografia",
  templateUrl: "./tipografia.component.html",
  styleUrls: ["./tipografia.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TipografiaComponent extends ComponentesInterface implements OnInit {

  constructor(public toastr: ToastrService) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelCardFonte";

  navItems: CodeFixedNavItem[] = [
    { id: "painelCardFonte", name: "Fonte" },
    { id: "painelCardTitulosProprios", name: "Títulos Próprios" },
    { id: "painelCardTamanhoPadrao", name: "Títulos - tamanho padrão" },
    { id: "painelCardIcones", name: "Ícones" }
  ];

  placeholder = loremIpsumPlaceHolder;

  titulosGenericos = [
    { tag: "<h1></h1>", exemplo: "<h1>Título</h1>" },
    { tag: "<h2></h2>", exemplo: "<h2>Título</h2>" },
    { tag: "<h3></h3>", exemplo: "<h3>Título</h3>" },
    { tag: "<h4></h4>", exemplo: "<h4>Título</h4>" },
    { tag: "<h5></h5>", exemplo: "<h5>Título</h5>" },
    { tag: "<h6></h6>", exemplo: "<h6>Título</h6>" }
  ];

  titulosPadrao = [
    {
      tag: "<h1 class='titulo'></h1>",
      exemplo: "<h1 class='titulo'>Título de página</h1>",
      uso: `Sempre com a tag h1, no início de cada página. <br>Aplica a fonte Futura LT Bold, a cor de destaque e acrescenta espaçamento inferior de 2rem`
    },
    {
      tag: "<h5 class='subtitulo'></h5>",
      exemplo: "<h5 class='subtitulo'>Subtítulo padrão</h5>",
      uso: `Pode ser utilizada nas tags h2 até h6. <br>Aplica a fonte Futura LT Bold e acrescenta espaçamento inferior de 1rem.`
    },
  ];

  fontIntroducao = `<span>Texto na fonte padrão.</span>
<br>
<b>Texto com a tag "b".</b>
<br>
<strong>Texto com a tag "strong".</strong>
<br>
<span class="font-fam-bold">Texto com a classe "font-fam-bold".</span>`.trim();

  iconesExemplo = `<span class="mr-5">
  <i class="fa fa-check mr-3"></i> <!-- Sucesso -->
  <i class="fa fa-times mr-3"></i> <!-- Erro -->
  <i class="fa fa-exclamation mr-3"></i> <!-- Alerta -->
  <i class="fa fa-info mr-3"></i> <!-- Informação -->
</span>
<h4 class="d-inline mr-5">
  <i class="fa fa-check fa-lg text-success mr-3"></i>
  <i class="fa fa-times fa-lg text-danger mr-3"></i>
  <i class="fa fa-exclamation text-warning fa-lg mr-3"></i>
  <i class="fa fa-info fa-lg text-info mr-3"></i>
</h4>
<h2 class="d-inline mr-5">
  <i class="fa fa-check fa-lg text-success mr-3"></i>
  <i class="fa fa-times fa-lg text-danger mr-3"></i>
  <i class="fa fa-exclamation text-warning fa-lg mr-3"></i>
  <i class="fa fa-info fa-lg text-info mr-3"></i>
</h2>`.trim();

  ngOnInit(): void {
  }

}
