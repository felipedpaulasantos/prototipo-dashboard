import { DocApiProperties } from "src/app/shared/components/documentacao-api-table/documentacao-api-table.component";

const stylesExample = "styles='{ height: '300px'; }'";

export const timelineApiProps: DocApiProperties[] = [
   {
      nome: `@Input( )<br>items: TimelineItem[ ]`,
      descricao: `Atributo obrigatório com a lista de items/eventos.<br>
      Padrão: [ ]`
   }, {
      nome: `@Input( )<br>orientation: enum TimelineOrientation | string | number`,
      descricao: `Orientação do componente, que pode ser horizontal (TimelineOrientation.horizontal | "0")
      ou vertical (TimelineOrientation.vertical | "1").<br>
      Padrão: TimelineOrientation.vertical | "1"`
   }, {
      nome: `@Input( )<br>styles: [class: string]: any | string`,
      descricao: `Objeto de estilo a ser passado para o timeline-wrapper.`,
      codeExample: stylesExample,
      codeLang: "css"
   }
];
