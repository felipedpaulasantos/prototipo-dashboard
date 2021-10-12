import { DocApiProperties } from "src/app/shared/components/documentacao-api-table/documentacao-api-table.component";

export const datatableApiProps: DocApiProperties[] = [
   {
      nome: `@Input()<br>settings: DataTableSettings`,
      descricao: `Configurações gerais da tabela.<br>
      Pode ser uma das configurações pré-definidas da classe DataTableConfig, ou uma configuração personalizada obtida através do método DataTableConfig.getDataTableSettings( )<br>
      Padrão: DatatableConfig.DEFAULT_SETTINGS`
   }, {
      nome: `@Input()<br>columnFilterType: DataTableColumnFilterType`,
      descricao: `Tipo de filtro individual por coluna. Pode ser 'input', 'select' ou 'none'.<br>
      Padrão: DataTableColumnFilterType.NONE`
   }, {
      nome: `@Input()<br>columnFilterPosition: DataTableColumnFilterPosition`,
      descricao: `Posição do filtro individual por coluna. Pode ser 'top', 'bottom' ou 'none'.<br>
      Obs.: Ao utilizar filtros definidos especificamente para cada coluna (por meio do th data-filter=""), é necessário definir um valor diferente de 'none' para essa propriedade.<br>
      Padrão: DataTableColumnFilterPosition.NONE`
   }, {
      nome: `@Input()<br>trigger: Subject<any>`,
      descricao: `Subject que dispara a reinicialização da tabela ao ser acionado pelo .next( ).<br>
      Obs.: A DataTable também pode ser recarregada pelo método reloadTable( )`
   }, {
      nome: `reloadTable( ): void`,
      descricao: `Reinicializa a tabela.`
   }, {
      nome: `updateSettings(settings: DataTableSettings): void`,
      descricao: `Atualiza as configurações da tabela.`
   }, {
      nome: `updateFilterColumnPosition(position: string): void`,
      descricao: `Atualiza a posição dos filtros individuais por coluna.`
   }, {
      nome: `updateFilterColumnType(type: string): void`,
      descricao: `Atualiza o tipo dos filtros individuais por coluna.`
   }
];

export const datatableConfigProps: DocApiProperties[] = [
   {
      nome: `static DEFAULT_SETTINGS: DataTableSettings`,
      descricao: `Configuração padrão.`
   }, {
      nome: `static COMPLETE_SETTINGS: DataTableSettings`,
      descricao: `Configuração com todos os recursos.`
   }, {
      nome: `static COMPLETE_NO_BUTTON_SETTINGS: DataTableSettings`,
      descricao: `Configuração completa exceto botões.`
   }, {
      nome: `static PAGINATION_INFO_SETTINGS: DataTableSettings`,
      descricao: `Apenas paginação e informação de registros.`
   }, {
      nome: `getDataTableSettings(options: DataTableConfigOptions): DataTableSettings`,
      descricao: `Método que recebe um objeto options com um ou mais parâmetros e retorna a configuração desejada da DataTable.`
   }
];

export const datatableConfigOptionsProps: DocApiProperties[] = [
   {
      nome: `showFilter: boolean`,
      descricao: `Exibir campo de filtro geral.`
   }, {
      nome: `showLength: boolean`,
      descricao: `Exibir campo select que permite selecionar o número de linhas por página.`
   }, {
      nome: `showButtons: boolean`,
      descricao: `Exibir botões.`
   }, {
      nome: `showInfo: boolean`,
      descricao: `Exibir informações no rodapé da tabela sobre o total de registros.`
   }, {
      nome: `showPagination: boolean`,
      descricao: `Exibir e realizar paginação.`
   }, {
      nome: `menuLength: number[ ]`,
      descricao: `Caso o 'showLength' esteja habilitado, permite informar quais as quantidades de linhas por página o usuário poderá escolher.`
   }
];
