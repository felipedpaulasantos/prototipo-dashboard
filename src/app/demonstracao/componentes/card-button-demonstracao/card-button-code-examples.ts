export class CardButtonCodeExamples {

   static codeDescricao = `<cx-card-button leftIcon="fa fa-home" leftTitle="Título do lado esquerdo">
   <h5>Título do lado direito</h5>
   <p>Texto do lado direito</p>
 </cx-card-button>`.trim();
 
 static htmlCodeCardButton = `<cx-card-button leftIcon="fa fa-home">
   <h5>Lorem Ipsum</h5>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint perspiciatis soluta
   saepe est nam, sunt accusantium.
 </cx-card-button>
 `.trim();
 
 static htmlCodeCardCheckbox = `<cx-card-button type="checkbox" [(ngModel)]="user" value="user" leftIcon="fa fa-user">
   <label>Usuário</label>
   <input [disabled]="!user" value="Fulano" class="input-caixa">
 </cx-card-button>
 
 <br>
 
 <cx-card-button type="checkbox" [(ngModel)]="email" value="email" leftIcon="fa fa-at">
   <label>E-mail</label>
   <input [disabled]="!email" value="fulano@email.com" class="input-caixa">
 </cx-card-button>`
 .trim();
 
 static tsCodeCardCheckbox = `import { Component } from "@angular/core";
 
 @Component({
   templateUrl: "./card-button-exemplo.component.html",
   styleUrls: ["./card-button-exemplo.component.scss"]
 })
 export class CardButtonExemplo {
 
   constructor() {}
 
   user;
   email;
 
 }`.trim();
 
 static htmlCodeCardRadio = `<form [formGroup]="formFone">
   <cx-card-button type="radio" formControlName="tipoFone" value="fixo" leftIcon="fa fa-phone-alt">
      <label>Fixo</label>
      <input [disabled]="formFone.get('tipoFone').value !== 'fixo'" class="input-caixa"
         placeholder="(00) 0000-0000">
   </cx-card-button>
 
   <br>
 
   <cx-card-button type="radio" formControlName="tipoFone" value="celular" leftIcon="fa fa-mobile-alt">
      <label>Celular</label>
      <input [disabled]="formFone.get('tipoFone').value !== 'celular'" class="input-caixa"
         placeholder="(00) 00000-0000">
   </cx-card-button>
 </form>`.trim();
 
 static tsCodeCardRadio = `import { Component } from "@angular/core";
import { FormBuilder } from "@angular/forms";
 
 @Component({
   templateUrl: "./card-button-exemplo.component.html",
   styleUrls: ["./card-button-exemplo.component.scss"]
 })
 export class CardButtonExemplo {
 
   constructor(
     private fb: FormBuilder
   ) { }
 
   formFone = this.fb.group({
     tipoFone: [null]
   });
 
 }`.trim();
 
 static cardWidth = `<cx-card-button
   leftTitle="Largura: 100%"
   [styles]="{ width: '100%' }"
 ></cx-card-button>`.trim();
 
 static cardHeight = `<cx-card-button leftIcon="fa fa-user" leftTitle="Altura: auto" leftText="Conteúdo extenso"
 [styles]="{ height: 'auto' }">
     <div class="py-3">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
       doloribus eius deleniti porro, qui tempore totam officiis 
       nemo distinctio dolore perspiciatis ratione
       voluptas non maxime doloremque!
       <br>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, deserunt enim aspernatur suscipit
       doloribus eius deleniti porro, qui tempore totam officiis 
       nemo distinctio dolore perspiciatis ratione
       voluptas non maxime doloremque!
     </div>
 </cx-card-button>`.trim();
 
 static htmlCodeCores = `<cx-card-button color="secondary" leftIcon="fa fa-home fa-lg">
   Principal
 </cx-card-button>

 <br>

 <cx-card-button type="checkbox" color="success" leftIcon="fa fa-check">
   Sucesso
 </cx-card-button>

 <br>

 <cx-card-button color="danger" leftIcon="fa fa-times">
   Perigo
 </cx-card-button>`.trim();

}
