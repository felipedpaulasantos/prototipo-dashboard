import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ComponentesCaixaComponent } from "./componentes.component";
import { CardsComponent } from "../componentes-basicos/cards/cards.component";
import { BotoesComponent } from "../componentes-basicos/botoes/botoes.component";
import { MensagensComponent } from "../componentes-basicos/mensagens/mensagens.component";
import { DatatableDemonstracaoComponent } from "./datatable-demonstracao/datatable-demonstracao.component";
import { InputsComponent } from "./inputs/inputs.component";
import { SelectComponent } from "./select/select.component";
import { StepperDemonstracaoComponent } from "./stepper-demonstracao/stepper-demonstracao.component";
import { TabberDemonstracaoComponent } from "./tabber-demonstracao/tabber-demonstracao.component";
import { CardButtonDemonstracaoComponent } from "./card-button-demonstracao/card-button-demonstracao.component";
import { TimelineDemonstracaoComponent } from "./timeline-demonstracao/timeline-demonstracao.component";
import { ButtonControlDemonstracaoComponent } from "./button-control-demonstracao/button-control-demonstracao.component";


const routes: Routes = [
  {
    path: "",
    component: ComponentesCaixaComponent,
    // canActivate: [AuthGuard],
    data: {
      title: "Componentes",
      breadcrumb: "Componentes"
    }
  },
  {
    path: "cards",
    component: CardsComponent,
    data: {
      title: "Cards",
      breadcrumb: "Cards",
      animation: "Cards"
    }
  },
  {
    path: "mensagens",
    component: MensagensComponent,
    data: {
      title: "Mensagens",
      breadcrumb: "Mensagens",
      animation: "Mensagens"
    }
  },
  {
    path: "inputs",
    component: InputsComponent,
    data: {
      title: "Inputs",
      breadcrumb: "Inputs",
      animation: "Inputs"
    }
  },
  {
    path: "select",
    component: SelectComponent,
    data: {
      title: "Select",
      breadcrumb: "Select",
      animation: "Select"
    }
  },
  {
    path: "stepper",
    component: StepperDemonstracaoComponent,
    data: {
      title: "Stepper",
      breadcrumb: "Stepper",
      animation: "Stepper"
    }
  },
  {
    path: "tabber",
    component: TabberDemonstracaoComponent,
    data: {
      title: "Tabber",
      breadcrumb: "Tabber",
      animation: "Tabber"
    }
  },
  {
    path: "card-button",
    component: CardButtonDemonstracaoComponent,
    data: {
      title: "Card-button",
      breadcrumb: "Card-button",
      animation: "Card-button"
    }
  },
  {
    path: "timeline",
    component: TimelineDemonstracaoComponent,
    data: {
      title: "Timeline",
      breadcrumb: "Timeline",
      animation: "Timeline"
    }
  },
  {
    path: "datatable",
    component: DatatableDemonstracaoComponent,
    data: {
      title: "Tabelas",
      breadcrumb: "Tabelas",
      animation: "Tabelas"
    }
  },
  {
    path: "button-control",
    component: ButtonControlDemonstracaoComponent,
    data: {
      title: "Button control",
      breadcrumb: "Button contro",
      animation: "Button contro"
    }
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesRoutingModule {}
