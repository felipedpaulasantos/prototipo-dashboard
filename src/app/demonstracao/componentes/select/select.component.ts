import { Component, OnInit, ViewChild, ContentChild } from "@angular/core";
import { ComponentesInterface } from "../componentes-interface";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, Validators } from "@angular/forms";
import { SelectCaixaComponent } from "src/app/guia-caixa/components/select-caixa/select-caixa.component";


@Component({
  templateUrl: "./select.component.html",
  host: { "(window:scroll)": "onScroll($event)" }
})
export class SelectComponent extends ComponentesInterface implements OnInit {

  constructor(
    public toastr: ToastrService,
    private fb: FormBuilder
  ) {
    super(toastr);
  }

  @ViewChild("selectTeste") selectCaixa: SelectCaixaComponent;
  @ViewChild("scrollElement") scrollElement;
  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelSelect";

  formulario = this.fb.group({
    comida: [null, [Validators.required]],
    filme: [null, [Validators.required, Validators.minLength(11)]]
  });

  opcoesAsync = [];

  htmlCodeSelectBasico = `						<form>
  <cx-select>
    <label>Número favorito</label>
    <select selectCaixa>
      <option value="0"></option>
      <option value="1"></option>
      <option value="2"></option>
      <option value="3"></option>
    </select>
  </cx-select>
</form>`.trim();

  htmlCodeSelectValidacao = `						<form [formGroup]="formulario">
  <cx-select>
    <label>Comida favorita</label>
    <select selectCaixa formControlName="comida">
      <option value="" selected>Selecione uma opção</option>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select>
    <label>Filme favorito</label>
    <select selectCaixa formControlName="filme">
      <option value="" selected>Selecione uma opção</option>
      <option value="Senhor dos Anéis">Senhor dos Anéis</option>
      <option value="O Poderoso Chefão">O Poderoso Chefão</option>
      <option value="Vingadores">Vingadores</option>
    </select>
  </cx-select>
</form>`.trim();
  tsCodeSelectValidacao = `  import { Component } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';

  @Component({
      selector: 'app-select',
      templateUrl: './select.component.html',
      styleUrls: ['./select.component.scss']
  })
  export class SelectComponent {

    constructor(
      private fb: FormBuilder
    ) {}

    formulario = this.fb.group({
      comida: [null, [Validators.required]],
      filme: [null, [Validators.required, Validators.minLength(11)]]
    });
  }
  `.trimRight();

  htmlCodeVariantes = `						<form>
  <cx-select>
    <label>Seleção múltipla</label>
    <select selectCaixa multiple>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select [options]="{ liveSearch: true }">
    <label>Filtro de opções</label>
    <select selectCaixa>
      <option value="Lasanha">Lasanha</option>
      <option value="Feijoada">Feijoada</option>
      <option value="Churrasco">Churrasco</option>
    </select>
  </cx-select>

  <cx-select [options]="{ actionsBox: true }">
    <label>Botões e subtítulos</label>
    <select selectCaixa multiple>
      <optgroup label="Massas">
        <option>Pizza</option>
        <option>Lasanha</option>
        <option>Macarrão</option>
      </optgroup>
      <optgroup label="Carne">
        <option>Picanha</option>
        <option>Alcatra</option>
        <option>Torresmo</option>
      </optgroup>
    </select>
  </cx-select>
</form>`.trim();

  htmlCodeSelectAsync = `						<form>
  <cx-select [initTrigger]="opcoesAsync">
    <label>Número favorito</label>
    <select selectCaixa>
      <option *ngFor="let opcao of opcoesAsync">{{ opcao }}</option>
    </select>
  </cx-select>

  <button (click)="atualizaOpcoes()" class="btn btn-primario">
    <i class="fa fa-sync mr-2"></i>
    Atualizar opções
  </button>
</form>`.trim();
  tsCodeSelectAsync = `  import { Component } from '@angular/core';

  @Component({
      selector: 'app-select',
      templateUrl: './select.component.html',
      styleUrls: ['./select.component.scss']
  })
  export class SelectComponent {

    constructor() {}

    opcoesAsync = [];

    atualizaOpcoes() {
      this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
    }

    // Retorna um número inteiro aleatório entre 1 e 100
    getRandomInt() {
      return Math.floor(Math.random() * (101 - 1)) + 1;
    }
  }`.trimRight();

  ngOnInit(): void {

  }

  atualizaOpcoes() {
    this.opcoesAsync = [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()];
  }

  getRandomInt() {
    return Math.floor(Math.random() * (101 - 1)) + 1;
  }

}
