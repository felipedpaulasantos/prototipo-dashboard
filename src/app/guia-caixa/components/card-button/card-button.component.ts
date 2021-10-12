import {
  Component, Input, OnInit, ChangeDetectionStrategy,
  Output, EventEmitter, ChangeDetectorRef, Self, Optional
} from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { CardButtonCheckEvent } from "./card-button-check-event";
import { CardButtonColor } from "./card-button-model";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "cx-card-button",
  templateUrl: "./card-button.component.html",
  styleUrls: ["./card-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardButtonComponent implements OnInit, ControlValueAccessor {

  @Input()
  value: any;

  /**
   * @param cardId Nome ou identificação opcional para o componente. Padrão: ""
   * @type string
  */
  @Input()
  cardId = "";

  /**
   * @param data Atributo opcional que será emitido internamente no evento CardButtonEventChecked. Padrão: null
   * @type any
  */
  @Input()
  data: any = null;

  /**
   * @param leftIcon Classe do ícone a ser exibido do lado esquerdo, ex: "fa fa-home". Padrão: ""
   * @type string
  */
  @Input()
  leftIcon = "";

  /**
   * @param leftTitle Título a ser exibido do lado esquerdo, em uma tag <h5>. Padrão: ""
   * @type string
  */
  @Input()
  leftTitle = "";

  /**
   * @param leftText Texto a ser exibido do lado esquerdo, em uma tag <span>. Padrão: ""
   * @type string
  */
  @Input()
  leftText = "";

  /**
   * @param styles Objeto de estilo a ser passado para o card-button-wrapper. Ex: [styles]="{ height: '300px'; color: 'blue' }"
   * @type object
  */
  @Input()
  styles: { [klass: string]: any; } | string;

  /**
   * @param type Define o visual do container de checkbox / radio. Pode ser 'checkbox', 'radio',
   * ou algum valor falso (null / false / '') para não exibir o container. Padrão: ''
   * @type string
  */
  @Input()
  type = "";

  /**
   * @param color Define a cor geral do card (lado esquerdo e borda) quando ele estiver selecionado
   * Deve ser do tipo CardButtonColor, ou o valor da string diretamente (primary, secondary, success, danger, warning, info)
   * @type CardButtonColor | string
  */
  @Input()
  color: CardButtonColor | string = CardButtonColor.Primary;

  /**
   * @param checked Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
   * na propriedade (target).
   * @type CardButtonCheckEvent
  */
  @Output()
  checked: EventEmitter<CardButtonCheckEvent> = new EventEmitter();

  /**
   * Propriedade que armazena o valor do ngControl associado ao componente.
   * @type any
  */
  model: any = undefined;

  constructor(
    private changeDetector: ChangeDetectorRef,
    @Self() @Optional() private ngControl: NgControl
  ) {
    if (ngControl) {
      ngControl.valueAccessor = this;
    }
  }

  ngOnInit(): void {
    if (!this.ngControl) { return; }
    this.ngControl.control.valueChanges.subscribe(value => {
      this.writeValue(value);
    });
  }

  /**
   * @description Retorna o estado atual do componente, se está marcado ou não.
  */
  isChecked(): boolean {
    return this.model === this.value;
  }

  /**
   * Troca o valor atual do componente.
  */
  toggleValue() {
    if (!this.type) { return; }
    if (this.type === "checkbox") {
      this.model = this.isChecked() ? null : this.value;
    }
    if (this.type === "radio") {
      this.model = this.value;
    }
    this.onChange(this.model);
    this.emitChecked();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [cardId].
  */
  setCardId(cardId: string) {
    this.cardId = cardId;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [leftIcon].
  */
  setLeftIcon(icon: string) {
    this.leftIcon = icon;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {string} checked Define novo valor para a propriedade [leftTitle].
  */
  setLeftTitle(title: string) {
    this.leftTitle = title;
    this.changeDetector.detectChanges();
  }

  /**
   * @param {any} checked Define novo valor para a propriedade [data].
  */
  setData(data: any) {
    this.data = data;
    this.changeDetector.detectChanges();
  }

  /**
   * Emite o evento (CardButtonCheckEvent).
  */
  private emitChecked() {
    const checkEvent: CardButtonCheckEvent = {
      target: this,
    };
    this.checked.emit(checkEvent);
  }

  /* Implementação da interface ControlValueAccessor */

  /**
   * Define o comportamento de change do ngControl.
  */
  onChange: any = () => { };
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /**
   * Define o comportamento de touched do ngControl.
  */
  onTouch: any = () => { };
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  /**
   * Define o valor do ngControl.
  */
  writeValue(value: any) {
    this.model = value;
    this.changeDetector.detectChanges();
  }

}
