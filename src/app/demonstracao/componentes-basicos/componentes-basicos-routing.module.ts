import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BotoesComponent } from "./botoes/botoes.component";
import { CardsComponent } from "./cards/cards.component";

import { ComponentesBasicosComponent } from "./componentes-basicos.component";
import { FormsComponent } from "./forms/forms.component";
import { MensagensComponent } from "./mensagens/mensagens.component";

const routes: Routes = [
  {
    path: "",
    component: ComponentesBasicosComponent,
    // canActivate: [AuthGuard],
    data: {
      title: "Componentes básicos",
      breadcrumb: "Componentes básicos"
    }
  },
  {
    path: "botoes",
    component: BotoesComponent,
    data: {
      title: "Botões",
      breadcrumb: "Botões",
      animation: "Botões"
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
    path: "forms",
    component: FormsComponent,
    data: {
      title: "Forms",
      breadcrumb: "Forms",
      animation: "Forms"
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentesBasicosRoutingModule { }
