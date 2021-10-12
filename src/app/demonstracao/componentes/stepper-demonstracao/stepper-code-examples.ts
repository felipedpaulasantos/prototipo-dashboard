export class StepperCodeExamples {

   static codeDescricao = `<cx-stepper
   [steps]="passos" 
   [currentStep]="passoAtual"
   (changeStep)="passoAtual = $event">
 </cx-stepper>`.trim();
 
 static codeTsDescricao = `  passos: StepperItem[] = [
   { title: "Primeiro passo" },
   { title: "Segundo passo" },
   { title: "Terceiro passo" },
   { title: "Quarto passo" },
   { title: "Quinto passo" }
 ];
 passoAtual = 0;`.trim();
 
 static htmlCodeStepperPadrao = `<cx-stepper [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>
 
 <div *ngFor="let passo of passos; let i = index">
   <ng-container *ngIf="i == passoAtual">
     <h2 class="text-center">{{ passo }}</h2>
 
     <button [disabled]="passoAtual == 0"
     (click)="passoAtual = passoAtual - 1" class="btn btn-cancel mx-2">
         Voltar
     </button>
 
     <button [disabled]="passoAtual == passos.length - 1"
     (click)="passoAtual = passoAtual + 1" class="btn btn-accent mx-2">
         Avançar
     </button>
   </ng-container>
 </div>`.trim();
 
 static tsCodeStepperPadrao = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
 
   static htmlCodeStepperGuiado = `<cx-stepper [freeNavigation]="false" [steps]="passos" [currentStep]="passoAtual" (changeStep)="passoAtual = $event"></cx-stepper>
 
 <div *ngFor="let passo of passos; let i = index">
   <ng-container *ngIf="i == passoAtual">
     <h2 class="text-center">{{ passo }}</h2>
 
     <button [disabled]="passoAtual == 0"
     (click)="passoAtual = passoAtual - 1" class="btn btn-cancel mx-2">
         Voltar
     </button>
 
     <button [disabled]="passoAtual == passos.length - 1"
     (click)="passoAtual = passoAtual + 1" class="btn btn-accent mx-2">
         Avançar
     </button>
   </ng-container>
 </div>`.trim();
 
 static tsCodeStepperGuiado = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
 
   static htmlCodeStepperTemplate = `<cx-stepper [steps]="passos" #stepperExemplo (changeStep)="passoAtual = $event"></cx-stepper>
 
   <div *ngFor="let passo of passos; let i = index">
      <ng-container *ngIf="i == passoAtual">
         <h2 class="text-center">{{ passo }}</h2>
      </ng-container>
   </div>
 
   <button [disabled]="stepperExemplo.currentStep == 0"
   (click)="stepperExemplo.first()" class="btn btn-aux mx-2">
      Primeiro
   </button>
 
   <button [disabled]="stepperExemplo.currentStep == 0"
   (click)="stepperExemplo.previous()" class="btn btn-cancel mx-2">
      Voltar
   </button>
 
   <button [disabled]="stepperExemplo.currentStep == passos.length - 1"
   (click)="stepperExemplo.next()" class="btn btn-accent mx-2">
      Avançar
   </button>`.trim();
 
   static tsCodeStepperTemplate = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passoAtual = 0;
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
   }
   `.trimRight();
 
   static htmlCodeStepperInterno = `<cx-stepper [steps]="passos" #stepperInterno>
   <div *cxStepper>
      <h2 class="text-center">Primeiro conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Segundo conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Terceiro conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Quarto conteúdo interno</h2>
   </div>
 
   <div *cxStepper>
      <h2 class="text-center">Quinto conteúdo interno</h2>
   </div>
 </cx-stepper>
 
 <button [disabled]="stepperInterno.currentStep == 0"
 (click)="stepperInterno.first()" class="btn btn-aux mx-2">
   Primeiro
 </button>
 
 <button [disabled]="stepperInterno.currentStep == 0"
 (click)="stepperInterno.previous()" class="btn btn-cancel mx-2">
   Voltar
 </button>
 
 <button [disabled]="stepperInterno.currentStep == passos.length - 1"
 (click)="stepperInterno.next()" class="btn btn-accent mx-2">
   Avançar
 </button>`.trim();
 
 static tsCodeStepperInterno = `  import { Component } from '@angular/core';
 
   @Component({
       selector: 'app-stepper',
       templateUrl: './stepper.component.html',
       styleUrls: ['./stepper.component.scss']
   })
   export class StepperComponent {
 
     constructor() {}
 
     passos = [
       'Primeiro passo',
       'Segundo passo',
       'Terceiro passo',
       'Quarto passo',
       'Passo final'
     ];
 
   }
   `.trimRight();

}
