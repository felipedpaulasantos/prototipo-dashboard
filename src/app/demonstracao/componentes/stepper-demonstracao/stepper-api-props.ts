import { DocApiProperties } from "src/app/shared/components/documentacao-api-table/documentacao-api-table.component";

const stylesExample = "styles='{ height: '300px'; }'";

export const stepperApiProps: DocApiProperties[] = [
   {
      nome: `readonly MINIMUM_STEPS`,
      descricao: `Quantidade mínima de passos.<br>
      Valor: 2`
   }, {
      nome: `readonly MAXIMUM_STEPS`,
      descricao: `Quantidade máxima de passos.<br>
      Valor: 7`
   }, {
      nome: `@Input( )<br>steps: string[ ]`,
      descricao: `Atributo obrigatório com a lista de 'descrições' dos passos,
      que serão exibidos ao lado dos ícones.<br>
      Padrão: [ ]`
   }, {
      nome: `@Input( )<br>currentStep: string | number`,
      descricao: `Índice do passo atual.<br>
      Padrão: 0`
   }, {
      nome: `@Input( )<br>orientation: enum StepperOrientation | string | number`,
      descricao: `Orientação do componente, que pode ser horizontal (StepperOrientation.horizontal | "0")
      ou vertical (StepperOrientation.vertical | "1").<br>
      Padrão: StepperOrientation.horizontal | "0"`
   }, {
      nome: `@Input( )<br>freeNavigation: boolean`,
      descricao: `Define a variante do stepper. Com o atributo habilitado, o usuário poderá
      retornar para qualquer passo anterior.<br>
      Do contrário, apenas será possível retornar ao passo imediatamente anterior.<br>
      Padrão: true`
   }, {
      nome: `@Input( )<br>styles: [class: string]: any | string`,
      descricao: `Objeto de estilo a ser passado para o stepper-wrapper`,
      codeExample: stylesExample,
      codeLang: "css"
   }, {
      nome: `@Output( )<br>changeStep: EventEmitter&#60;number>`,
      descricao: `Evento disparado sempre que um ícone válido é clicado, transmitindo o índice deste ícone. `
   }, {
      nome: `next( ): void`,
      descricao: `Avança para o próximo passo.`
   }, {
      nome: `previous( ): void`,
      descricao: `Retorna para o passo anterior.`
   }, {
      nome: `first( ): void`,
      descricao: `Retorna para o primeiro passo. Apenas na navegação livre.`
   }, {
      nome: `update( ): void`,
      descricao: `Atualiza manualmente o template do componente cx-stepper.`
   }
];
