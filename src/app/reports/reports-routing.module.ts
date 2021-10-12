import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ReportsApiComponent } from "./reports-api/reports-api.component";
import { ReportsMessagesComponent } from "./reports-messages/reports-messages.component";
import { AuthGuard } from "../authentication/guards/auth-guard";

const routes: Routes = [
  {
    path: "",
    component: ReportsMessagesComponent,
    data: {
      breadcrumb: "Relatórios"
    }
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
