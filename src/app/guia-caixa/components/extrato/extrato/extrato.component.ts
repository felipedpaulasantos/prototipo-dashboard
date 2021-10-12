// tslint:disable-next-line:max-line-length
import { Component, AfterViewInit, Renderer2, ViewChild, ElementRef, ContentChild, ChangeDetectionStrategy, Input } from "@angular/core";
import { AgrupamentoExtrato, AgrupamentoExtratoDataFormatada } from "src/app/shared/model/agrupamento-extrato.model";
import { TabelaExtratoDirective } from "./tabela-extrato.directive";

@Component({
  selector: "cx-extrato",
  templateUrl: "./extrato.component.html",
  styleUrls: ["./extrato.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExtratoComponent implements AfterViewInit {

  private readonly ATRIBUTO_AGRUPADOR = "data-agrupador";
  private readonly DIAS_SEMANA = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];

  private TITULO_CLASSES: string[] = "subtitulo mb-2".split(" ");
  private SUBTITULO_PRINCIPAL_CLASSES: string[] = "text-accent".split(" ");
  private SUBTITULO_COMPLEMENTAR_CLASSES: string[] = "text-aux".split(" ");
  private CARD_TABELA_CLASSES: string[] = "card".split(" ");
  private CARD_ULTIMO_CLASSES: string[] = "mb-4".split(" ");
  private CARD_BODY_CLASSES: string[] = "card-body".split(" ");
  private TABELA_CLASSES: string[] = "table mb-0".split(" ");
  private PAINEL_AGRUPAMENTO_CLASSES: string[] = "painel-agrupamento".split(" ");
  private SEPARADOR_CLASSES: string[] = "separador-agrupamento".split(" ");

  @ViewChild("novoExtrato", { static: false })
  novoExtrato: ElementRef;

  @ContentChild(TabelaExtratoDirective, { read: TabelaExtratoDirective, static: true })
  tabelaExtratoDirective: TabelaExtratoDirective;

  agrupamentosExtrato: AgrupamentoExtrato[] = [];

  /*
    O 'nativeElement' da tabela original, capturado pela diretiva TabelaExtratoDirective
  */
  tabelaOriginal: HTMLTableElement;

  /*
    A linha de cabeçalho da tabela original, sem a coluna de valor agrupador, que pode se repetir ou não nos agrupamentos
  */
  trHeader: HTMLTableRowElement;

  /*
    Todas as linhas da tabela original
  */
  linhasTabela: HTMLTableRowElement[] = [];

  /*
    Indica se as linhas de cabeçalho 'th - table header' serão exibidas em todos os agrupamentos ou só no primeiro
  */
  @Input()
  headerApenasNoPrimeiroAgrupamento = true;

  /*
    Função para ordenar os agrupamentos.
    Por padrão, compara os atributos agrupadores como texto.
    Por este motivo, caso o atributo seja uma data, o ideal é passá-lo no formato ISO,
    já preparado para comparação textual.
  */
  @Input()
  sortFunctionAgrupamentos: (a: any, b: any) => number = (a, b) => {
    return (a < b) ? 1 : ((a > b) ? -1 : 0);
  }

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit(): void {
    this.initAgrupamentoExtrato();
  }

  public reload() {
    setTimeout(() => {
      this.initAgrupamentoExtrato();
    }, 0);
  }

  public initAgrupamentoExtrato(): void {
    if (!this.tabelaExtratoDirective || !this.tabelaExtratoDirective.elementRef) { return; }

    this.tabelaOriginal = this.tabelaExtratoDirective.elementRef.nativeElement;
    this.TABELA_CLASSES = this.tabelaOriginal.className.split(" ");

    this.tabelaOriginal.querySelectorAll("tr").forEach(
      linhaTabela => this.linhasTabela.push(linhaTabela)
    );
    if (!this.linhasTabela) { return; }

    this.agrupamentosExtrato = this.criaAgrupamentosExtrato(this.tabelaOriginal);
    if (!this.agrupamentosExtrato || this.agrupamentosExtrato.length < 1) { return; }

    this.trHeader = this.getHeaderFromTabelaOriginal(this.linhasTabela);
    this.populaNovasTabelasAgrupadas(this.agrupamentosExtrato, this.linhasTabela);
  }

  private criaAgrupamentosExtrato(tabelaOriginal: any): AgrupamentoExtrato[] {
    const tdsComAtributoAgrupador: any[] = [];
    tabelaOriginal.querySelectorAll(`td[${this.ATRIBUTO_AGRUPADOR}]`).forEach(td => {
      tdsComAtributoAgrupador.push(td);
    });
    if (!tdsComAtributoAgrupador || tdsComAtributoAgrupador.length < 1) { return; }

    const conteudoTdsComAgrupador: any[] = [...new Set(tdsComAtributoAgrupador.map(td => td.innerHTML))];
    conteudoTdsComAgrupador.sort(this.sortFunctionAgrupamentos);

    const agrupamentosExtrato: AgrupamentoExtrato[] = conteudoTdsComAgrupador.map(conteudoTdAgrupador => {
      return {
        valorAgrupador: conteudoTdAgrupador,
        linhasDoAgrupamento: [],
        dataFormatada: null
      };
    });

    return agrupamentosExtrato;
  }

  private getHeaderFromTabelaOriginal(linhasTabela: any): any {
    const trHeader = linhasTabela[0];
    const thAgrupador = trHeader.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
    this.renderer.setStyle(thAgrupador, "display", "none");
    return trHeader;
  }

  private populaNovasTabelasAgrupadas(agrupamentosExtrato: AgrupamentoExtrato[], linhasTabela): void {
    linhasTabela.forEach(linha => {
      const tdAgrupador = linha.querySelector(`[${this.ATRIBUTO_AGRUPADOR}]`);
      if (!tdAgrupador) { return; }
      const conteudoTdAgrupador = tdAgrupador.textContent;
      const objAgrupador = agrupamentosExtrato.find(agrupador => agrupador.valorAgrupador === conteudoTdAgrupador);
      if (!objAgrupador) {
        return;
      }
      objAgrupador.linhasDoAgrupamento.push(linha);
      this.renderer.setStyle(tdAgrupador, "display", "none");
    });

    agrupamentosExtrato.forEach((agrupador, index) => {
      const linhasDoAgrupamento = agrupador.linhasDoAgrupamento;
      linhasDoAgrupamento.sort((a, b) => {
        a = a.firstChild.textContent;
        b = b.firstChild.textContent;
        return (a < b) ? -1 : ((a > b) ? 1 : 0);
      });
      const newTbody = this.renderer.createElement("tbody");
      linhasDoAgrupamento.forEach((linha) => {
        this.renderer.appendChild(newTbody, linha);
      });
      const newTable: HTMLTableElement = this.renderer.createElement("table");
      const isFirst = (index === 0);
      const isLast = (index === agrupamentosExtrato.length - 1);
      this.renderNovaTabelaAgrupada(newTable, newTbody, agrupador, this.trHeader, isFirst, isLast);
    });
  }

  private renderNovaTabelaAgrupada(
    newTable: HTMLTableElement, newTbody: any, agrupamento: AgrupamentoExtrato, trHeader: any, isFirst: boolean, isLast: boolean): void {

    if (isFirst) {
      const newThead = this.renderer.createElement("thead");
      this.renderer.appendChild(newThead, trHeader);
      this.renderer.appendChild(newTable, newThead);
    }

    /* Formata data do título */
    agrupamento = this.setDataFormatadaAgrupador(agrupamento);

    /* Cria título */
    const titulo = this.renderer.createElement("h5");
    const subtituloPrincipal = this.renderer.createElement("span");
    const subtituloComplementar = this.renderer.createElement("span");
    const separador = this.renderer.createElement("hr");

    this.TITULO_CLASSES.forEach(classe => this.renderer.addClass(titulo, classe));
    this.SUBTITULO_PRINCIPAL_CLASSES.forEach(classe => this.renderer.addClass(subtituloPrincipal, classe));
    this.SUBTITULO_COMPLEMENTAR_CLASSES.forEach(classe => this.renderer.addClass(subtituloComplementar, classe));
    this.SEPARADOR_CLASSES.forEach(classe => this.renderer.addClass(separador, classe));

    this.renderer.setProperty(subtituloPrincipal, "innerHTML", agrupamento.dataFormatada.principal);
    this.renderer.setProperty(subtituloComplementar, "innerHTML", `, (${agrupamento.dataFormatada.complementar})`);
    this.renderer.appendChild(titulo, subtituloPrincipal);
    this.renderer.appendChild(titulo, subtituloComplementar);
    this.renderer.appendChild(titulo, separador);

    /* Cria card */
    const card = this.renderer.createElement("div");
    this.CARD_TABELA_CLASSES.forEach(classe => this.renderer.addClass(card, classe));
    if (!isLast) {
      this.CARD_ULTIMO_CLASSES.forEach(classe => this.renderer.addClass(card, classe));
    }
    const cardBody = this.renderer.createElement("div");
    this.CARD_BODY_CLASSES.forEach(classe => this.renderer.addClass(cardBody, classe));
    this.renderer.appendChild(card, cardBody);

    /* Cria tabela */
    this.TABELA_CLASSES.forEach(classe => this.renderer.addClass(newTable, classe));
    this.renderer.appendChild(newTable, newTbody);

    /* Cria painel de agrupamento */
    const painelAgrupamento = this.renderer.createElement("div");
    this.renderer.setAttribute(painelAgrupamento, "data-valor-agrupador", agrupamento.valorAgrupador);
    this.PAINEL_AGRUPAMENTO_CLASSES.forEach(classe => this.renderer.addClass(painelAgrupamento, classe));

    /* Renderiza o painel de agrupamento */
    if (this.novoExtrato) {
      this.renderer.appendChild(this.novoExtrato.nativeElement, painelAgrupamento);
      this.renderer.appendChild(painelAgrupamento, titulo);
      this.renderer.appendChild(painelAgrupamento, card);
      this.renderer.appendChild(cardBody, newTable);
    }
  }

  setDataFormatadaAgrupador(agrupamento: AgrupamentoExtrato): AgrupamentoExtrato {
    const data = agrupamento.valorAgrupador;
    const dataAgrupador = new Date(data);

    const hoje = new Date();

    const ontem = new Date();
    ontem.setDate(hoje.getDate() - 1);

    const dataFormatada: AgrupamentoExtratoDataFormatada = {
      principal: "",
      complementar: ""
    };

    if (dataAgrupador.toDateString() === hoje.toDateString()) {
      dataFormatada.principal = "HOJE";
      dataFormatada.complementar = `${dataAgrupador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataAgrupador.getDay()]}`;
    } else if (ontem.toDateString() === dataAgrupador.toDateString()) {
      dataFormatada.principal = "ONTEM";
      dataFormatada.complementar = `${dataAgrupador.toLocaleDateString()}, ${this.DIAS_SEMANA[dataAgrupador.getDay()]}`;
    } else {
      dataFormatada.principal = dataAgrupador.toLocaleDateString();
      dataFormatada.complementar = this.DIAS_SEMANA[dataAgrupador.getDay()];
    }
    agrupamento.dataFormatada = dataFormatada;
    return agrupamento;
  }
}
