import { Directive, Input } from "@angular/core";

@Directive({
   selector: "[cxStepper]",
})
export class StepperDirective {

   @Input("cxStepper")
   stepId: any;

   constructor() { }
}
