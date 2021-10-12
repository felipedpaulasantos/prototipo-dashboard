import {
  Component, OnInit, Input, AfterViewInit, ContentChild,
  ViewChild, ElementRef, HostBinding, Renderer2, AfterContentInit, SimpleChanges, OnChanges, AfterContentChecked, HostListener
} from "@angular/core";
import { SelectCaixaDirective } from "./select-caixa.directive";
import { AbstractControl, NgControl, FormControlName } from "@angular/forms";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";

declare let $: any;

enum LiveSearchStyle {
  contains = "contains",
  startsWith = "startsWith"
}

interface BootstrapSelectOptions {
  bootstrapVersion?: string;
  actionsBox?: boolean;
  container?: boolean;
  deselectAllText?: string;
  liveSearch?: boolean;
  liveSearchNormalize?: boolean;
  liveSearchPlaceholder?: string;
  liveSearchStyle?: LiveSearchStyle;
  mobile?: boolean;
  multipleSeparator?: string;
  noneSelectedText?: string;
  noneResultsText?: string;
  selectAllText?: string;
  style?: string;
  tickIcon?: string;
  width?: string | boolean;
}

const defaultOptions: BootstrapSelectOptions = {
  bootstrapVersion: "4",
  actionsBox: false,
  container: false,
  deselectAllText: "Remover seleção",
  liveSearch: false,
  liveSearchNormalize: false,
  liveSearchPlaceholder: null,
  liveSearchStyle: LiveSearchStyle.contains,
  mobile: true,
  multipleSeparator: ", ",
  noneSelectedText: "Nenhuma opção selecionada",
  noneResultsText: "Nenhum resultado encontrado",
  selectAllText: "Selecionar todos",
  style: "",
  tickIcon: "fa fa-check",
  width: false
};

@Component({
  selector: "cx-select",
  templateUrl: "./select-caixa.component.html",
  styleUrls: ["./select-caixa.component.scss"]
})
export class SelectCaixaComponent implements OnInit, OnChanges, AfterViewInit, AfterContentInit, AfterContentChecked {

  Object = Object;

  @Input() options: BootstrapSelectOptions = {};
  @Input() initTrigger = false;
  @Input() showFeedbackIcon = true;
  @Input() showFeedbackMessage = true;
  @Input() showFeedback = true;

  @ContentChild(NgControl, { read: NgControl, static: true })
  ngControlDirective: NgControl;

  @ContentChild(FormControlName, { read: FormControlName, static: true })
  formControlDirective: FormControlName;

  @ContentChild(SelectCaixaDirective, { read: SelectCaixaDirective, static: true })
  selectDirective: SelectCaixaDirective;

  @ViewChild("wrapper", { read: ElementRef, static: true })
  wrapper;

  formInput: AbstractControl;
  isRequired = false;
  private nativeElement: any;

  private dropdownButton: any;
  private dropdownMenu: any;
  private isDropdownObserved = false;
  private changes: MutationObserver;
  private focus = false;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.setBootstrapSelectDefault();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
    this.setFeedback();
  }

  ngAfterViewInit(): void {
    this.initialize();
  }

  ngAfterContentInit(): void {
    this.setNativeElement();
    this.setFormInput();
    this.isRequired = this.isFieldRequired(this.formInput);
  }

  setNativeElement() {
    if (this.selectDirective && this.selectDirective.element) {
      this.nativeElement = this.selectDirective.element;
    }
  }

  setFormInput() {
    if (this.formControlDirective) {
      this.formInput = this.formControlDirective.control;
    } else if (this.ngControlDirective) {
      this.formInput = this.ngControlDirective.control;
    }
  }

  setFeedback() {
    if (!this.showFeedback) {
      this.showFeedbackIcon = this.showFeedbackMessage = false;
    }
  }

  ngAfterContentChecked(): void {
    if (this.nativeElement) {
      this.dropdownButton = this.nativeElement.nextElementSibling;
      this.dropdownMenu = this.dropdownButton ? this.dropdownButton.nextElementSibling : null;
      if (this.dropdownButton && !this.isDropdownObserved) {
        this.changes = new MutationObserver((mutations: MutationRecord[]) => {
          mutations.forEach((mutation: MutationRecord) => {
            if (mutation.target["attributes"]["aria-expanded"].value !== "true" || !this.hasFocus()) {
              this.renderer.removeClass(this.wrapper.nativeElement, "focused");
              this.focus = false;
            } else {
              this.renderer.addClass(this.wrapper.nativeElement, "focused");
              this.focus = true;
            }
          });
        });
        this.changes.observe(this.dropdownButton, {
          attributeFilter: ["aria-expanded"]
        });
        this.isDropdownObserved = true;
      }
    }
  }

  initialize() {
    if (this.nativeElement) {
      $(this.nativeElement).selectpicker(this.options);
      $(this.nativeElement).selectpicker("refresh");
    }
  }

  refresh() {
    // $(this.nativeElement).selectpicker('destroy');
    setTimeout(() => {
      this.ngAfterContentInit();
      this.ngAfterViewInit();
    }, 1);
  }

  private isFieldRequired(abstractControl: AbstractControl): boolean {
    if (abstractControl && abstractControl.validator) {
      const validator = abstractControl.validator({} as AbstractControl);
      if (validator && validator.required) {
        return true;
      }
    }
    if (abstractControl && abstractControl["controls"]) {
      for (const controlName in abstractControl["controls"]) {
        if (abstractControl["controls"][controlName]) {
          if (this.isFieldRequired(abstractControl["controls"][controlName])) {
            return true;
          }
        }
      }
    }
    if (this.nativeElement) {
      return this.nativeElement.required;
    }
    if (this.nativeElement && this.nativeElement.required) {
      return true;
    }
    return false;
  }

  isFieldValid(): boolean {
    if (this.formInput) {
      return this.formInput.valid;
    } else {
      if (this.nativeElement) {
        return this.selectDirective.changed && (this.nativeElement.classList.contains("ng-valid"));
      }
    }
    return false;
  }

  isFieldInvalid(): boolean {
    if (this.formInput) {
      return this.formInput.invalid;
    } else {
      if (this.nativeElement) {
        return this.selectDirective.changed && (this.nativeElement.classList.contains("ng-invalid"));
      }
    }
    return false;
  }

  @HostBinding("class.ng-invalid")
  get invalid() {
    if (this.formInput && !this.formInput.pristine && this.formInput.invalid && this.showFeedback) {
      this.renderer.addClass(this.wrapper.nativeElement, "ng-invalid");
      return "ng-invalid ng-touched";
    }
  }

  @HostBinding("class.ng-valid")
  get valid() {
    if (this.formInput && !this.formInput.pristine && this.formInput.valid && this.showFeedback) {
      this.renderer.addClass(this.wrapper.nativeElement, "ng-valid");
      return "ng-valid ng-touched";
    }
    if (this.hasFocus()) {
      this.renderer.addClass(this.wrapper.nativeElement, "focused");
    } else if (!this.focus) {
      this.renderer.removeClass(this.wrapper.nativeElement, "focused");
    }
  }

  hasFocus(): boolean {
    if (!this.dropdownButton) {
      return false;
    } else {
      return $(this.dropdownButton).is(":focus");
    }
  }

  getFeedbackIcon() {
    return (this.formInput && !this.formInput.pristine)
      || (!this.formInput && this.selectDirective && this.selectDirective.changed
        && (this.isFieldValid() || this.isFieldInvalid()));
  }

  getFeedbackMessage() {
    return !this.formInput
      && this.selectDirective && ((!this.selectDirective.changed && !this.isFieldInvalid())
        || (this.selectDirective.changed && (this.isFieldValid() || !this.isFieldInvalid())))
      || this.formInput && (this.formInput.pristine || this.formInput.valid);
  }

  reset() {
    if (this.formInput) {
      this.formInput.reset();
    } else if (this.selectDirective) {
      this.selectDirective.changed = false;
      this.nativeElement.value = "";
    }
    this.initialize();
  }

  private setBootstrapSelectDefault() {

    const opt: BootstrapSelectOptions = {};

    opt.bootstrapVersion = this.options.bootstrapVersion || defaultOptions.bootstrapVersion;
    opt.actionsBox = this.options.actionsBox || defaultOptions.actionsBox;
    opt.container = this.options.container || defaultOptions.container;
    opt.deselectAllText = this.options.deselectAllText || defaultOptions.deselectAllText;
    opt.liveSearch = this.options.liveSearch || defaultOptions.liveSearch;
    opt.multipleSeparator = this.options.multipleSeparator || defaultOptions.multipleSeparator;
    opt.noneSelectedText = this.options.noneSelectedText || defaultOptions.noneSelectedText;
    opt.noneResultsText = this.options.noneResultsText || defaultOptions.noneResultsText;
    opt.selectAllText = this.options.selectAllText || defaultOptions.selectAllText;
    opt.style = this.options.style || defaultOptions.style;
    opt.width = this.options.width || defaultOptions.width;

    this.options = opt;
  }

}
