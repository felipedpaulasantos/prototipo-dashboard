import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { TabberItem, TabberItemState } from "src/app/guia-caixa/components/stepper/tabber-component/tabber-item";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../componentes-interface";

@Component({
  templateUrl: "./tabber-demonstracao.component.html",
  styleUrls: ["./tabber-demonstracao.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TabberDemonstracaoComponent extends ComponentesInterface {

  constructor(
    public toastr: ToastrService,
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelTabber";

  stylesExample = "styles='{ height: '300px'; }'";

  codeDescricao = `<cx-tabber [tabs]="abas"></cx-tabber>`.trim();

  codeTsDescricao = `abas: TabberItem[] = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Componentes", icon: "fa fa-toolbox" },
  { name: "Tipografia", icon: "fa fa-font" },
  { name: "Cores", icon: "fa fa-palette" },
  { name: "Configurações", icon: "fa fa-wrench" },
  { name: "Páginas", icon: "fa fa-newspaper" }
];`.trim();

  htmlCodeTabber = `<cx-tabber [tabs]="abas" #tabberExemplo>
  <ng-container *ngFor="let aba of abas">
     <div *cxStepper>
        <h2 class="text-center">{{ aba.name }}</h2>
     </div>
  </ng-container>
</cx-tabber>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.first()" class="btn btn-aux mx-2">
  Primeiro
</button>

<button [disabled]="tabberExemplo.currentTab == 0"
(click)="tabberExemplo.previous()" class="btn btn-cancel mx-2">
  Voltar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.next()" class="btn btn-accent mx-2">
  Avançar
</button>

<button [disabled]="tabberExemplo.currentTab == abas.length - 1"
(click)="tabberExemplo.last()" class="btn btn-aux mx-2">
   Último
</button>`.trim();

  tsCodeTabber = `  import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor() {}

  abas: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];
  abaAtual = 0;

}
  `.trimRight();


  htmlCodeTabberState = `<cx-tabber [tabs]="abasComEstado" #tabberExemploState>
  <ng-container *ngFor="let aba of abasComEstado">
    <div *cxStepper class="text-center">
      <h2>{{ aba.name }}</h2>
      <h4 *ngIf="!aba.state">Conteúdo sem validação</h4>
      <h4 *ngIf="aba.state === tabberState.SUCCESS">Conteúdo OK</h4>
      <h4 *ngIf="aba.state === tabberState.WARNING">Conteúdo com erro não impeditivo</h4>
      <h4 *ngIf="aba.state === 'error'">Conteúdo com erro impeditivo</h4>
    </div>
  </ng-container>
</cx-tabber>

<button [disabled]="tabberExemploState.currentTab == 0" (click)="tabberExemploState.first()"
  class="btn btn-aux mt-3 mx-2">
  Primeiro
</button>

<button [disabled]="tabberExemploState.currentTab == 0" (click)="tabberExemploState.previous()"
  class="btn btn-cancel mx-2">
  Voltar
</button>

<button [disabled]="tabberExemploState.currentTab == abas.length - 1" (click)="tabberExemploState.next()"
  class="btn btn-accent mx-2">
  Avançar
</button>

<button [disabled]="tabberExemploState.currentTab == abas.length - 1" (click)="tabberExemploState.last()"
  class="btn btn-aux mx-2">
  Último
</button>`.trim();

  tsCodeTabberState = `import { Component } from '@angular/core';
import { TabberItem, TabberItemState } from "../stepper/tabber-component/tabber-item";

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  constructor() {}

  tabberState = TabberItemState;

  abasComEstado: TabberItem[] = [
    { name: "Home", icon: "fa fa-home", state: "success" },
    { name: "Componentes", icon: "fa fa-toolbox", state: "warning" },
    { name: "Tipografia", icon: "fa fa-font", state: this.tabberState.SUCCESS },
    { name: "Cores", icon: "fa fa-palette", state: "error" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper", state: this.tabberState.ERROR }
  ];
  abaComEstadoAtual = 0;

}
  `.trimRight();

  navItems: CodeFixedNavItem[] = [
    { id: "painelTabber", name: "Visão Geral" },
    { id: "painelTabberState", name: "Estado" }
  ];

  tabberOrientation = 0;

  abas: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];
  abaAtual = 0;

  tabberState = TabberItemState;

  abasComEstado: TabberItem[] = [
    { name: "Home", icon: "fa fa-home", state: "success" },
    { name: "Componentes", icon: "fa fa-toolbox", state: "warning" },
    { name: "Tipografia", icon: "fa fa-font", state: this.tabberState.SUCCESS },
    { name: "Cores", icon: "fa fa-palette", state: "error" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper", state: this.tabberState.ERROR }
  ];
  abaComEstadoAtual = 0;

  currentTab = 0;
  tabs: TabberItem[] = [
    { name: "Home", icon: "fa fa-home" },
    { name: "Componentes", icon: "fa fa-toolbox" },
    { name: "Tipografia", icon: "fa fa-font" },
    { name: "Cores", icon: "fa fa-palette" },
    { name: "Configurações", icon: "fa fa-wrench" },
    { name: "Páginas", icon: "fa fa-newspaper" }
  ];

  changeTabberOrientation(value: number) {
    this.tabberOrientation = value;
  }

  addTab(nome: string) {
    const newIndex = this.tabs.length + 1;
    const newTab: TabberItem = {
      name: nome ? nome : `Aba ${newIndex}`,
      icon: "fa fa-plus"
    };
    this.tabs.push(newTab);
    this.tabs = [].concat(this.tabs);
  }

  mudarTab(tab: number) {
    this.currentTab = tab;
  }

}
