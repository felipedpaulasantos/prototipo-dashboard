import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";
import { RouterModule } from "@angular/router";
import { HighlightModule } from "ngx-highlightjs";
import { ChartsModule } from "ng2-charts";
import { NgxMaskModule } from "ngx-mask";

import { CustomChartComponent } from "./charts/bar-chart/bar-chart.component";
import { TooltipIconComponent } from "./tooltip-icon/tooltip-icon.component";
import { BackButtonComponent } from "./buttons/back-button/back-button.component";
import { AccordionComponent } from "./accordion/accordion.component";
import { CodeViewComponent } from "./code-view/code-view.component";
import { MenuItemComponent } from "./accordion/menu-item/menu-item.component";
import { StepperModule } from "../../guia-caixa/components/stepper/stepper.module";
import { CodeFixedNavComponent } from "./code-fixed-nav/code-fixed-nav.component";
import { DocumentacaoTemplateComponent } from "./documentacao-template/documentacao-template.component";
import { DocumentacaoApiTableComponent } from './documentacao-api-table/documentacao-api-table.component';

@NgModule({
	declarations: [
		CustomChartComponent,
		TooltipIconComponent,
		BackButtonComponent,
		AccordionComponent,
		CodeViewComponent,
		MenuItemComponent,
		CodeFixedNavComponent,
		DocumentacaoTemplateComponent,
		DocumentacaoApiTableComponent
	],
	imports: [
		CommonModule,
		NgxSpinnerModule,
		ChartsModule,
		RouterModule,
		HighlightModule,
		NgxMaskModule.forChild(),
		StepperModule
	],
	exports: [
		CustomChartComponent,
		TooltipIconComponent,
		BackButtonComponent,
		AccordionComponent,
		CodeViewComponent,
		CodeFixedNavComponent,
		DocumentacaoTemplateComponent,
		DocumentacaoApiTableComponent
	]
})
export class SharedComponentsModule { }
