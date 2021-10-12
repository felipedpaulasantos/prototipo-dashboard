import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSpinnerModule } from "ngx-spinner";

import { InputCaixaComponent } from "./components/input-caixa/input-caixa.component";
import { InputCaixaDirective } from "./components/input-caixa/input-caixa.directive";
import { SelectCaixaDirective } from "./components/select-caixa/select-caixa.directive";
import { SelectCaixaComponent } from "./components/select-caixa/select-caixa.component";
import { SpinnerCaixaComponent } from "./components/spinner/spinner.component";
import { ModalComponent } from "./components/modal/modal.component";
import { CardCaixaComponent } from "./components/card-caixa/card-caixa.component";
import { StepperModule } from "./components/stepper/stepper.module";
import { CardButtonModule } from "./components/card-button/card-button.module";
import { TimelineModule } from "./components/timeline/timeline.module";
import { CaixaDatatableModule } from "./components/datatable/caixa-datatable.module";
import { ButtonControlModule } from "./components/button-control/button-control.module";
import { ExtratoModule } from './components/extrato/extrato.module';



@NgModule({
  declarations: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
		ModalComponent,
    CardCaixaComponent
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    StepperModule,
    CardButtonModule,
    TimelineModule,
    CaixaDatatableModule,
    ButtonControlModule,
    ExtratoModule
  ],
  exports: [
    InputCaixaComponent,
		InputCaixaDirective,
		SelectCaixaDirective,
    SelectCaixaComponent,
    SpinnerCaixaComponent,
    ModalComponent,
    CardCaixaComponent,
    StepperModule,
    CardButtonModule,
    TimelineModule,
    CaixaDatatableModule,
    ButtonControlModule,
    ExtratoModule
  ]
})
export class GuiaCaixaModule { }
