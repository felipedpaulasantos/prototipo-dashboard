const stylesExample = "styles='{ height: '300px'; }'";

export const cardButtonApiProps = [
   {
     nome: `@Input( )<br>cardId: string`,
     descricao: `Nome ou identificação opcional para o componente.<br>
     Valor: ""`
   }, {
     nome: `@Input( )<br>data: any`,
     descricao: `Atributo opcional que será emitido internamente no evento CardButtonEventChecked.<br>
     Valor: null`
   }, {
     nome: `@Input( )<br>leftIcon: string`,
     descricao: `Classe do ícone a ser exibido no lado esquerdo, ex: "fa fa-home".<br>
     Padrão: ""`
   }, {
     nome: `@Input( )<br>leftTitle: string | number`,
     descricao: `Título a ser exibido do lado esquerdo, em uma tag 'h5'.<br>
     Padrão: ""`
   }, {
     nome: `@Input( )<br>leftText: string`,
     descricao: `Texto a ser exibido do lado esquerdo, em uma tag 'span'.<br>
     Padrão: ""`
   }, {
     nome: `@Input( )<br>styles: [class: string]: any | string`,
     descricao: `Objeto de estilo a ser passado para o card-button-wrapper`,
     codeExample: stylesExample,
     codeLang: "css"
   }, {
     nome: `@Input( )<br>type: string`,
     descricao: `Define o visual do container de checkbox / radio. Pode ser 'checkbox', 'radio',
     ou algum valor falso (null / false / '') para não exibir o container.<br>
     Padrão: ''`
   }, {
     nome: `@Input( )<br>color: CardButtonColor | string`,
     descricao: `Define a cor geral do componente (lado esquerdo e borda) quando estiver selecionado.<br>
     Padrão: 'primary'`
   }, {
     nome: `@Output( )<br>checked: EventEmitter&#60;CardButtonCheckEvent>`,
     descricao: `Evento emitido ao ativar o botão, contendo o próprio componente e seus atributos
     na propriedade (target).`
   }, {
     nome: `isChecked( ): boolean`,
     descricao: `Retorna o estado atual do componente, se está marcado ou não.`
   }, {
     nome: `toggleValue( ): void`,
     descricao: `Troca o estado atual do componente.`
   }
 ];