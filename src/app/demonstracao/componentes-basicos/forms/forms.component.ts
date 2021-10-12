import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../../componentes/componentes-interface";

@Component({
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class FormsComponent extends ComponentesInterface implements OnInit  {

  constructor(
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelInputs";

  navItems: CodeFixedNavItem[] = [
    { id: "painelInputs", name: "Inputs e Text-area" },
    { id: "painelSelect", name: "Select" },
    { id: "painelCheckbox", name: "Checkbox" },
    { id: "painelRadio", name: "Radio" },
    { id: "painelRange", name: "Range" },
    { id: "painelValidacao", name: "Validação" }
  ];

  formValidation = this.fb.group({
    email: [null, [Validators.email]],
    linkedin: [null],
    perfil: [null, [Validators.required]],
    idade: [50, [Validators.min(18), Validators.max(70)]]
  });

  inputExemplo = `<div class="form-group">
  <label>Nome</label>
  <input class="form-control">
</div>

<label>Idade</label>
<input class="form-control mb-3" type="number">

<label>Observações</label>
<textarea class="form-control"></textarea>`.trim();

  selectExemplo = `<label>Sexo</label>
<ng-select class="mb-3">
  <ng-option>Masculino</ng-option>
  <ng-option>Feminino</ng-option>
</ng-select>

<label>Naturalidade</label>
<select class="form-control mb-3">
  <option>Brasileiro</option>
  <option>Estrangeiro</option>
</select>`.trim();

  checkboxExemplo = `<div class="custom-control custom-checkbox mb-3">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label" for="customCheck1">Marque esse checkbox</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck2" checked>
  <label class="custom-control-label" for="customCheck2">Desmarque esse checkbox</label>
</div>`.trim();

  radioExemplo = `<div class="custom-control custom-radio mb-3">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio1">Ou esse fica marcado</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label" for="customRadio2">Ou esse aqui</label>
</div>`.trim();

  rangeExemplo = `<label for="customRange1">Exemplo</label>
<input type="range" class="custom-range" id="customRange1">`.trim();

  htmlCodeValidacao = `<form [formGroup]="formValidation">
  <div class="form-group">
    <label>E-mail</label>
    <input class="form-control" type="text" formControlName="email">
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('email').invalid">E-mail inválido</span>
    </p>
  </div>

  <div class="form-group">
    <label>LinkedIn</label>
    <input class="form-control" type="text" formControlName="linkedin">
    <p class="feedback-msg">
      <span>Campo opcional</span>
    </p>
  </div>

  <div class="form-group">
    <label>Perfil</label>
    <ng-select formControlName="perfil">
      <ng-option value="">Selecione...</ng-option>
      <ng-option value="Visitante">Visitante</ng-option>
      <ng-option value="Desenvolvedor">Desenvolvedor</ng-option>
      <ng-option value="Gestor">Gestor</ng-option>
    </ng-select>
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('perfil').invalid">Campo obrigatório</span>
    </p>
  </div>

  <div class="form-group">
    <label>Idade</label>
    <input class="custom-range" type="range" formControlName="idade" min="0" max="100">
    <p>{{ formValidation.get('idade').value }}</p>
    <p class="feedback-msg">
      <span *ngIf="formValidation.get('idade').invalid">Idade inválida - deve ser entre 18 e 70</span>
    </p>
  </div>

  <button class="btn btn-cancel" (click)="formValidation.reset()">Resetar</button>
</form>`.trim();

  tsCodeValidacao = `import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss']
})
export class FormsComponent {

  constructor() {}

  formValidation = this.fb.group({
    email: [null, [Validators.email]],
    linkedin: [null],
    perfil: [null, [Validators.required]],
    idade: [50, [Validators.min(18), Validators.max(70)]]
  });

}`.trimRight();

cssCodeValidacao = `.feedback-msg {
  height: 1.5rem;
  color: var(--aux);
  margin-top: 0.5rem;
  font-size: 0.9rem;
}`.trimRight();

buttonControlExample = `<cx-button-control type="checkbox" value="valor_do_checkbox">
  Checkbox
</cx-button-control>

<cx-button-control type="radio" value="valor_do_radio" class="ml-3">
  Radio
</cx-button-control>`;

  ngOnInit(): void {
  }

}
