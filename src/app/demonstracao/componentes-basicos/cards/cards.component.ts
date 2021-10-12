import { Component, OnInit, ViewChild } from "@angular/core";
import { ComponentesInterface } from "../../componentes/componentes-interface";
import { ToastrService } from "ngx-toastr";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class CardsComponent extends ComponentesInterface {

  constructor(
    public toastr: ToastrService
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelCards";

  navItems: CodeFixedNavItem[] = [
    { id: "painelCards", name: "Padrão" },
    { id: "painelCardsTematicos", name: "Temáticos" },
    { id: "painelCardsEfeito", name: "Com efeito" }
  ];

  cardsIntroducao = `<div class="card">
  <div class="card-header">
    <h4 class="subtitulo">Título</h4>
  </div>
  <div class="card-body">
    <h5>Este é um subtítulo</h5>
    <span>Este é o corpo do card</span>
  </div>
  <div class="card-footer">
    <h5>Isso é um rodapé</h5>
  </div>
</div>`.trim();

  cardsTematicos = `<div class="row">
  <div class="col-12 col-md-6 my-2">
    <div class="card bg-contraste text-base">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>

  <div class="col my-2">
    <div class="card bg-accent text-base">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>
</div>`.trim();

  cardsSombra = `<div class="card card-hover">
  <div class="card-body">
    <span>Este card possui efeito de sombra.</span>
  </div>
</div>`.trim();

  cardHome = `<div id="cardHome" class="card card-hover border border-dark">
  <div class="card-body">
    <i class="fa fa-home fa-4x mr-4"></i>
    <h2 class="d-inline font-fam-bold mb-0">HOME</h2>
  </div>
</div>

<style>
  #cardHome {
    max-width: 20rem;
  }
</style>`.trim();

  htmlCodeCards = `            <div class="card">
  <div class="card-header">
    <h4 class="subtitulo">Título</h4>
  </div>
  <div class="card-body">
    <h5>Este é um subtítulo</h5>
    <span>Este é o corpo do card</span>
  </div>
  <div class="card-footer">
    <h5>Isso é um rodapé</h5>
  </div>
</div>`.trim();

  htmlCodeCardsTematicos = `            <div class="row">
  <div class="col-12 col-md-6 my-2">
    <div class="card bg-grafite text-cinza">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->

  <div class="col my-2">
    <div class="card bg-accent text-cinza">
      <div class="card-header">
        <h4 class="subtitulo">Título</h4>
      </div>
      <div class="card-body">
        <h5>Este é um subtítulo</h5>
        <span>Este é o corpo do card</span>
      </div>
      <div class="card-footer">
        <h5>Isso é um rodapé</h5>
      </div>
    </div>
  </div>  <!-- Coluna -->
</div>  <!-- Linha -->`.trim();

  htmlCodeCardsEfeito = `        <div class="card card-hover">
  <div class="card-body">
    <span>Este card possui efeito de sombra.</span>
  </div>
</div>`.trim();

  htmlCodeCardBotao = `        <div class="row">
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover border border-dark">
      <div class="card-body">
        <i class="fa fa-home fa-4x mr-4"></i>
        <h2 class="d-inline font-fam-bold mb-0">HOME</h2>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover border border-primary bg-gradient-ceu text-white">
      <div class="card-body">
        <i class="fa fa-users fa-4x"></i>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
  <div class="col-6 col-md-4 mb-3">
    <div class="card card-hover bg-opacity-2 border border-dark-dark">
      <div class="card-body">
        <i class="fa fa-file-archive fa-4x"></i>
      </div>
    </div>  <!-- Card -->
  </div>  <!-- Col -->
</div>  <!-- Row -->`.trim();

  cssCodeCardBotao = `.cards-menu .card {
  cursor: pointer;
  margin-right: 2rem;
  border-width: 2px !important;
  border-top-left-radius: 0px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}`.trim();

  htmlCodeCardLayout = `<div id="cardDadosProposta" class="card">
  <div class="card-header">
    <h4 class="d-inline-block mr-2 font-fam-bold">Dados da proposta</h4>
    <a class="text-link">0007.1556.0000112-3</a>
  </div>
  <div class="card-body p-0">
    <div class="info-row bg-fundo border-top border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Código da Reserva</h6>
          1.797
        </div>
        <div class="col">
          <h6 class="subtitulo">Fonte de recurso</h6>
          SBPE
        </div>
      </div>
    </div>  <!-- Info-Row -->
    <div class="info-row border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Tipo de financiamento</h6>
          143 - CCSBPE - AQUISIÇÃO DE TERRENO E CONSTRUÇÃO - PF -SHF - POS
        </div>
      </div>
    </div>  <!-- Info-Row -->
    <div class="info-row bg-fundo border-bottom">
      <div class="row">
        <div class="col">
          <h6 class="subtitulo">Seguradora</h6>
          CAIXA SEGUROS
        </div>
        <div class="col">
          <h6 class="subtitulo">Apólice</h6>
          61170 - CAIXA SEGUROS - SBPE
        </div>
      </div>
    </div>  <!-- Info-Row -->
  </div>  <!-- Card-body -->
  <div class="card-footer text-center">
    <i class="fa fa-chevron-down mr-3"></i>
    <span>Mais dados da proposta</span>
  </div>
</div>`.trim();

  cssCodeCardLayout = `#cardDadosProposta {
  width: 800px;
}
.info-row {
  padding: 1.2rem;
}`.trim();

}
