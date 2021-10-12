/**
   * Lista dos itens com os seguintes atributos:
   * - title (string): Título do item
   * - state (TimelineState | string): Estado visual do item, podendo ser 'success', 'info', 'warning', 'warning-stop' ou 'error'
   * - date (Date): Objeto do tipo Date que será formatado no template. Informar este atributo OU [dateString]
   * - dateString (string): Texto representando a data de ocorrência do item. Informar este atributo OU [date]
   * - dateFormat (string): Caso seja informado o atributo [date],
   *    este atributo opcional pode alterar a formatação padrão (dd/MM/yyyy - HH:mm).
   *    Os formatos possíveis são os mesmos do DatePipe: https://angular.io/api/common/DatePipe
   * @type TimelineItem[]
*/
export interface TimelineItem {
   title: string;
   state: string;
   date?: Date;
   dateFormat?: string;
   dateString?: string;
}

/**
   * Enum que representa as duas orientações possíveis para a timeline.
*/
export enum TimelineOrientation {
   HORIZONTAL = 0,
   VERTICAL = 1
}

/**
   * Enum que representa os possíveis estados dos itens da timeline.
*/
export enum TimelineState {
   SUCCESS = "success",
   INFO = "info",
   WARNING = "warning",
   WARNING_STOP = "warning-stop",
   ERROR = "error"
}
