import { Component, OnInit, ViewChild } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { StepperItem } from "src/app/guia-caixa/components/stepper/stepper-component/stepper-item";
import { BootstrapTheme } from "src/app/guia-caixa/constants/constants";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { DocApiProperties } from "src/app/shared/components/documentacao-api-table/documentacao-api-table.component";
import { ComponentesInterface } from "../componentes-interface";
import { stepperApiProps } from "./stepper-api-props";
import { StepperCodeExamples } from "./stepper-code-examples";

@Component({
  templateUrl: "./stepper-demonstracao.component.html",
  host: { "(window:scroll)": "onScroll($event)" }
})
export class StepperDemonstracaoComponent extends ComponentesInterface implements OnInit {

  constructor(public toastr: ToastrService) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelStepperPadrao";

  navItems: CodeFixedNavItem[] = [
    { id: "painelStepperPadrao", name: "Navegação livre" },
    { id: "painelStepperGuiado", name: "Navegação guiada" },
    { id: "painelStepperInterno", name: "Conteúdo Interno" }
  ];

  examples = StepperCodeExamples;

  propsApi: DocApiProperties[] = stepperApiProps;

  showTabsStepperPadrao = false;

  passos: StepperItem[] = [
    { title: "Primeiro passo" },
    { title: "Segundo passo" },
    { title: "Terceiro passo" },
    { title: "Quarto passo" },
    { title: "Quinto passo" }
  ];
  passoAtual = 0;
  steps: StepperItem[] = [
    { title: "Um primeiro passo" },
    { title: "Um segundo passo" },
    { title: "Um terceiro passo" },
    { title: "Um quarto passo" },
    { title: "Fim" }
  ];

  stepperFreeOrientation = 0;
  stepperGuidedOrientation = 0;
  hideStepsOnCompleted = true;
  completedMessage = null;
  completedIcon = null;
  freeNavigation = true;
  showCompletedMessage = true;

  ngOnInit(): void { }

  changeStepperFreeOrientation(value: number) {
    this.stepperFreeOrientation = value;
  }

  changeStepperGuidedOrientation(value: number) {
    this.stepperGuidedOrientation = value;
  }

  changeHideSteps(value: boolean) {
    this.hideStepsOnCompleted = value;
  }

  addStep(nome: string) {
    const newIndex = this.steps.length + 1;
    const newStep: StepperItem = { title: "" };
    newStep.title = nome ? nome : `Passo ${newIndex}`;
    this.steps.push(newStep);
    this.steps = [].concat(this.steps);
  }

  removeStep() {
    this.steps.pop();
    this.steps = [].concat(this.steps);
  }

  mudarPasso(passo: number) {
    this.passoAtual = passo;
  }



}
