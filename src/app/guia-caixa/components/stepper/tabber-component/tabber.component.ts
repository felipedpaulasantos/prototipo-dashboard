import {
  Component, OnInit, EventEmitter, Input, Output, ContentChildren,
  TemplateRef, SimpleChanges, OnChanges, ChangeDetectionStrategy,
  ChangeDetectorRef, AfterContentInit
} from "@angular/core";
import { StepperDirective } from "../stepper-directive";
import { StepperOrientation } from "../stepper-orientation";
import { TabberItem, TabberItemState } from "./tabber-item";

/** @class Componente Tabber para organizar conteúdo dinâmico ou estático em abas */
@Component({
  selector: "cx-tabber",
  templateUrl: "./tabber.component.html",
  styleUrls: ["./tabber.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabberComponent implements OnInit, OnChanges, AfterContentInit {

  /**
   * Quantidade mínima e máxima de abas permitidas
  */
  readonly MINIMUM_TABS = 2;
  readonly MAXIMUM_TABS = 7;

  readonly tabberState = TabberItemState;

  /**
   * Mapeia as templates dinâmicas com a diretiva *tabber, caso seja inserido conteúdo dentro do componente;
   */
  @ContentChildren(StepperDirective, { read: TemplateRef })
  templates: TemplateRef<any>[];

  /**
   * Orientação das abas, podendo ser horizontal ou vertical.
   * @param {TabberOrientation} orientation Enum com valores Horizontal (0) e Vertical (1).
  */
  @Input()
  orientation = StepperOrientation.Horizontal;

  /**
   * Lista das abas, com sua descrição e ícone.
   * @param {TabberItem[]} tabs Array de objetos TabberItem representando as abas.
  */
  @Input()
  tabs: TabberItem[] = [];

  /**
   * Index da aba atual que pode ser alterado diretamente, pelos métodos de navegação ou clicando nas abas.
   * @param {string | number} currentTab Index da aba atual.
  */
  @Input()
  currentTab = 0;

  /**
   * Tema de cor dos ícones
   * @param {string} theme Nome do tema. Padrão = 'primary'.
   * Outras opções: 'secondary', 'info', 'warning', 'danger', 'light', 'dark'.
  */
  @Input()
  theme = "secundario";

  /**
   * Evento que transmite o index da nova aba atual após ser selecionada.
   * @param {string | number} changeTab Index da nova aba selecionada.
  */
  @Output()
  changeTab: EventEmitter<number> = new EventEmitter();

  /**
   * Injeta o serviço ChangeDetectorRef para sinalizar as mudanças ocorridas
   */
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade tabs
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes["tabs"]) {
      const newTabs: any[] = changes["tabs"].currentValue;

      /* Verifica se a nova lista possui comprimento válido */
      if (newTabs.length >= this.MINIMUM_TABS && newTabs.length > this.MAXIMUM_TABS) {
        this.tabs = newTabs.slice(0, this.MAXIMUM_TABS);
        this.changeDetector.detectChanges();
      }

      /* Verifica se a aba atual está em uma posição válida */
      if (this.currentTab >= newTabs.length) {
        this.currentTab = newTabs.length - 1;
      }
    }
  }

  /**
   * Inicializa os templates
  */
  ngAfterContentInit(): void {
    this.changeDetector.detectChanges();
  }

  /**
   * Salta para a aba de index indicado
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toTabByIndex(index: number): void {
    if (index != null && index != undefined && index < this.tabs.length) {
      this.currentTab = index;
      this.changeTab.emit(index);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a próxima aba
  */
  next(): void {
    if ((this.currentTab + 1) < this.tabs.length) {
      this.currentTab += 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a aba anterior
  */
  previous(): void {
    if ((this.currentTab - 1) >= 0) {
      this.currentTab -= 1;
      this.changeTab.emit(this.currentTab);
      this.changeDetector.detectChanges();
    }
  }

  /**
   * Salta para a primeira aba
  */
  first(): void {
    this.currentTab = 0;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }

  /**
   * Salta para a última aba
  */
  last(): void {
    this.currentTab = this.tabs.length - 1;
    this.changeTab.emit(this.currentTab);
    this.changeDetector.detectChanges();
  }

  /**
    * Retorna o tema definido para o ícone ativo
  */
  getActiveTheme(isActive: boolean): string {
    return isActive ? `bg-${this.theme}` : "";
  }

  /**
    * Realiza manualmente a atualização do template
  */
  update(): void {
    this.changeDetector.detectChanges();
  }

}
