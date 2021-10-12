import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Optional, Self, EventEmitter, Output } from "@angular/core";
import { ControlValueAccessor, NgControl } from "@angular/forms";
import { ButtonControlCheckedEvent } from "./button-control-checked-event";

@Component({
  selector: "cx-button-control",
  templateUrl: "./button-control.component.html",
  styleUrls: ["./button-control.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonControlComponent implements OnInit, ControlValueAccessor {

  /**
   * @param styles O valor que este checkbox/radio representa quando está marcado
   * @type any
  */
  @Input()
  value: any;

  /**
   * @param styles Objeto de estilo a ser passado para o button-control-wrapper. Ex: [styles]="{ height: '300px'; }"
   * @type object
  */
  @Input()
  styles: { [klass: string]: any; } | string;

  /**
  * @param type Define o visual do container. Pode ser 'checkbox' ou 'radio'
  * Padrão: 'checkbox'
  * @type string
  */
  @Input()
  type = "checkbox";

  /**
   * @param checked Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
   * na propriedade (target).
   * @type ButtonControlCheckedEvent
  */
  @Output()
  checked: EventEmitter<ButtonControlCheckedEvent> = new EventEmitter();

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
   * Emite o evento (ButtonControlCheckedEvent).
  */
  private emitChecked() {
    const checkEvent: any = {
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
