import {
  Component, Input, Output, EventEmitter, OnInit, OnChanges,
  ChangeDetectionStrategy, ContentChildren, TemplateRef, SimpleChanges, ChangeDetectorRef, AfterContentInit
} from "@angular/core";
import { StepperDirective } from "../stepper-directive";
import { StepperOrientation } from "../stepper-orientation";
import { StepperItem } from "./stepper-item";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "cx-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperComponent implements OnInit, OnChanges, AfterContentInit {

  /**
   * Quantidade mínima e máxima de passos permitidos
  */
  readonly MINIMUM_STEPS = 2;
  readonly MAXIMUM_STEPS = 7;

  /**
   * Ícones de navegação do Stepper. Apenas na navegação guiada.
  */
  readonly BACK_ICON_X = "fa fa-arrow-left";
  readonly BACK_ICON_Y = "fa fa-arrow-up";

  /**
   * Mapeia as templates dinâmicas com a diretiva *cxStepper;
  */
  @ContentChildren(StepperDirective, { read: TemplateRef })
  templates: TemplateRef<any>[];

  /**
   * Orientação das abas, podendo ser horizontal ou vertical.
   * @param {StepperOrientation} orientation Enum com valores Horizontal (0) e Vertical (1). Padrão = 0.
  */
  @Input()
  orientation = StepperOrientation.Horizontal;

  /**
   * Na variante padrão de navegação livre, é possível retornar
   * para qualquer passo anterior.
   * Na navegação guiada, é possível retornar apenas para o passo
   * imediatamente anterior.
   * @param {boolean} freeNavigation Verdadeiro para navegação livre (padrão),
   * falso para navegação guiada.
  */
  @Input()
  freeNavigation = true;

  /**
   * Lista dos passos.
   * @param {StepperItem[]} steps Array de objetos do tipo StepperItem.
  */
  @Input()
  steps: StepperItem[] = [];

  /**
    * Index do passo atual, que pode ser alterado diretamente, pelos métodos de navegação ou clicando nos passos.
    * @param {string | number} currentStep Index do passo atual. Padrão = 0.
  */
  @Input()
  currentStep = 0;

  /**
   * Define se os ícones dos passos são 'clicáveis'.
   * @param {boolean} clickable True para tornar clicável. Padrão = true.
  */
  @Input()
  clickable = true;

  /**
   * Tema de cor dos ícones
   * @param {string} theme Nome do tema. Padrão = 'primary'.
   * Outras opções: 'secondary', 'info', 'warning', 'danger', 'light', 'dark'.
  */
  @Input()
  // theme = "primary";
  theme = "";

  /**
   * Evento que transmite o index do novo passo atual após ser selecionado.
   * @param {string | number} changeStep Index do novo passo selecionado.
  */
  @Output()
  changeStep: EventEmitter<number> = new EventEmitter();

  /**
   * Injeta o serviço ChangeDetectorRef para sinalizar as mudanças ocorridas
   */
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void { }

  /**
    Adotando a estratégia OnPush para melhor performance,
    valida-se o valor informado para a propriedade steps
    e apenas atualiza a view caso o valor seja válido
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.steps && changes.steps.currentValue && changes.steps.currentValue.length) {
      this.validateStepChanges(changes.steps.currentValue);
    }
  }

  validateStepChanges(newSteps: StepperItem[]): void {
    const isValidLength = this.isValidLength(newSteps);
    const isCurrentIndexValid = this.isCurrentIndexValid(newSteps);
    if (isValidLength && isCurrentIndexValid) {
      this.changeDetector.markForCheck();
    }
  }

  /**
   * Inicializa os templates
  */
  ngAfterContentInit(): void {
    this.changeDetector.detectChanges();
  }

  /**
   * Salta para o passo de index indicado, apenas se for um passo anterior
   * Caso esteja utilizando a navegação guiada, só será aceito o passo imediatamente anterior
   * @param {string | number} index Index da nova aba a ser selecionada.
  */
  toStepByIndex(index: number): void {
    const lastIndex = this.steps.length - 1;
    const isNotLastIndex = !(this.currentStep === lastIndex);
    const isPrevious = index < this.currentStep;
    const isImmediatePrevious = index === this.currentStep - 1;

    if ((this.freeNavigation && isNotLastIndex && isPrevious)
      || (!this.freeNavigation && isNotLastIndex && isImmediatePrevious)
    ) {
      this.currentStep = index;
      this.changeStep.emit(index);
      this.changeDetector.markForCheck();
    }
  }

  /**
   * Salta para o próximo passo
  */
  next(): void {
    if ((this.currentStep + 1) < this.steps.length) {
      this.currentStep += 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }

  /**
   * Salta para o passo anterior
  */
  previous(): void {
    if ((this.currentStep - 1) >= 0) {
      this.currentStep -= 1;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }

  /**
    * Salta para a primeira aba. Apenas na navegação livre.
  */
  first(): void {
    if (this.freeNavigation) {
      this.currentStep = 0;
      this.changeStep.emit(this.currentStep);
      this.changeDetector.markForCheck();
    }
  }

  /**
   * Verifica qual ícone deve ser exibido para cada item
   * @param index Índice do item a ser analisado
  */
  getStepIcon(index: number): string {
    if (this.freeNavigation) { return null; }

    if (!this.freeNavigation) {
      if (index === (this.currentStep - 1) && this.currentStep !== (this.steps.length - 1)) {
        return this.orientation === StepperOrientation.Horizontal
          ? this.BACK_ICON_X
          : this.BACK_ICON_Y;
      } else {
        return null;
      }
    }
  }

  /**
    * Realiza manualmente a atualização do template
  */
  update(): void {
    this.changeDetector.detectChanges();
  }

  /**
    * Aplica o tema definido no ícone ativo
  */
  getActiveTheme(isActive: boolean, isLast: boolean): string {
    return isActive && !isLast ? `bg-${ this.theme }` : "";
  }

  private isValidLength(newSteps: StepperItem[]): boolean {
    if (newSteps && newSteps.length >= this.MINIMUM_STEPS && newSteps.length > this.MAXIMUM_STEPS) {
      this.steps = newSteps.slice(0, this.MAXIMUM_STEPS);
      return true;
    }
  }

  private isCurrentIndexValid(newSteps: StepperItem[]): boolean {
    if (newSteps && this.currentStep >= newSteps.length) {
      this.currentStep = newSteps.length - 1;
      return true;
    }
  }

}
