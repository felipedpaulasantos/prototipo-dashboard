import { Component, OnInit, ChangeDetectionStrategy, Input, ViewChild, AfterViewInit, SimpleChanges, OnChanges } from "@angular/core";
import { PerfectScrollbarComponent } from "ngx-perfect-scrollbar";
import { TimelineItem, TimelineOrientation } from "./timeline-item";

interface StateIcon {
  state: string;
  icon: string;
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "cx-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelineComponent implements OnInit, OnChanges, AfterViewInit {

  @ViewChild("perfectScroll", { static: false })
  perfectScroll: PerfectScrollbarComponent;

  readonly SUCCESS_STATE: StateIcon = { state: "success", icon: "fa fa-check" };
  readonly INFO_STATE: StateIcon = { state: "info", icon: "fa fa-info" };
  readonly WARNING_STATE: StateIcon = { state: "warning", icon: "fa fa-exclamation" };
  readonly WARNING_STOP_STATE: StateIcon = { state: "warning-stop", icon: "fa fa-ban fa-lg" };
  readonly ERROR_STATE: StateIcon = { state: "error", icon: "fa fa-ban fa-lg" };

  readonly DATEPIPE_DEFAULT_FORMAT = "dd/MM/yyyy - HH:mm";

  readonly timelineOrientation = TimelineOrientation;

  constructor() { }

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
  @Input()
  items: TimelineItem[] = [];

  /**
   * Orientação da timeline, podendo ser horizontal (0) ou vertical (1).
   * - Padrão: Vertical / 1
   * - Tipo: (TimelineOrientation | number)
   * @type TimelineOrientation | number
  */
  @Input()
  orientation: TimelineOrientation = TimelineOrientation.VERTICAL;

  /**
   * Objeto de estilo a ser passado para o timeline-wrapper.
   * - Ex: [styles]="{ height: '300px'; font-color: 'blue' }"
   * @type object | string
  */
  @Input()
  styles: { [klass: string]: any; } | string;

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.perfectScroll) {
      this.perfectScroll.directiveRef.update();
    }
  }

  ngAfterViewInit() {
    if (this.perfectScroll) {
      this.perfectScroll.directiveRef.update();
      this.perfectScroll.directiveRef.scrollToBottom();
    }
  }

  /**
   * Formata o texto a ser exibido no atributo [title] do timeline-item
  */
  getFormattedText(item: TimelineItem): string {
    const itemDate = item.dateString || item.date;
    if (!item || !item.title || !itemDate ) { return ""; }

    return `${item.title} - ${itemDate}`;
  }

}
