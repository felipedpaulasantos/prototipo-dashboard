import { Component, OnInit, AfterViewInit, ContentChild, Input, ChangeDetectionStrategy, ElementRef, ViewEncapsulation, OnDestroy } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";
import { DataTableColumnFilterPosition, DataTableColumnFilterType, DataTableConfig, DataTableSettings, dtLanguageDefinitionPt } from "./datatable-definitions";

declare var $: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: "cx-datatable",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./datatable.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class DataTableComponent implements OnInit, AfterViewInit, OnDestroy {

  private readonly TOP_FILTER_CLASS = "d-table-row-group";
  private readonly FILTER_INPUT_CLASS = "form-control";
  private readonly FILTER_SELECT_CLASS = "form-control";

  @ContentChild(DataTableDirective, { read: DataTableDirective, static: true })
  dtElement: DataTableDirective;

  @Input()
  settings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;

  @Input()
  columnFilterType: DataTableColumnFilterType | string = DataTableColumnFilterType.NONE;

  @Input()
  columnFilterPosition: DataTableColumnFilterPosition | string = DataTableColumnFilterPosition.NONE;

  @Input()
  trigger = new Subject<any>();

  private tableElementRef: ElementRef;
  private tableElement: HTMLElement;
  private theadElement: HTMLElement;
  private tfootElement: HTMLElement;
  private tbodyElement: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.setDefaultLanguage();
    this.setDefaultClasses();
    if (!this.dtElement.dtTrigger) { this.dtElement.dtTrigger = new Subject<any>() as any; }
    this.settings.columnFilterType = this.columnFilterType;
    this.settings.columnFilterPosition = this.columnFilterPosition;
    this.dtElement.dtOptions = this.settings;
  }

  ngAfterViewInit(): void {
    this.drawTable(true);
  }

  private drawTable(isInitialDraw = false): void {
    this.dtElement.dtTrigger.next();
    this.tableElementRef = this.dtElement["el"];
    this.tableElement = this.tableElementRef.nativeElement;
    this.theadElement = this.tableElement.querySelector("thead");
    this.tfootElement = this.tableElement.querySelector("tfoot");
    this.tbodyElement = this.tableElement.querySelector("tbody");
    this.bindRowExpandEvent(this.tbodyElement);

    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      this.drawColumnFilters(dtInstance, this.theadElement, this.tfootElement, this.tbodyElement, isInitialDraw);
    });
  }

  public reloadTable(): void {
    this.dtElement.dtOptions = this.settings;
    if (!this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.drawTable();
    });
  }

  public updateSettings(newSettings: DataTableSettings): void {
    this.settings = newSettings;
    this.reloadTable();
  }

  public updateFilterColumnPosition(position: string): void {
    this.columnFilterPosition = position;
    this.reloadTable();
  }

  public updateFilterColumnType(type: string): void {
    this.columnFilterType = type;
    this.reloadTable();
  }

  private setDefaultLanguage(): void {
    $.extend($.fn.dataTable.defaults, {
      language: dtLanguageDefinitionPt
    });
  }

  private setDefaultClasses(): void {
    $.fn.dataTable.ext.classes.sPageButton = "btn btn-sm ml-1 shadow-none";
    $.fn.dataTable.ext.classes.sPageButtonActive = "btn-accent";

    $.fn.dataTable.ext.classes.sLengthSelect = "form-control";
    $.fn.dataTable.ext.classes.sFilterInput = "form-control";
  }

  private drawColumnFilters(dtInstance: DataTables.Api, thead, tfoot, tbody, isInitialDraw): void {
    const columnFilterType = this.settings.columnFilterType;

    if (!columnFilterType) {
      dtInstance.columns().every(function () {
        $(this.footer()).remove();
      });
    } else if (!tfoot) {
      tfoot = this.drawFooter(dtInstance, thead);
    }

    this.setFooterClass(tfoot);
    this.drawInputColumnFilter(dtInstance, columnFilterType);
    this.drawSelectColumnFilter(dtInstance, columnFilterType);

    if (isInitialDraw) {
      this.reloadTable();
      this.trigger.subscribe(() => {
        this.reloadTable();
      });
    }
  }

  private drawFooter(dtInstance: DataTables.Api, thead: any): any {
    let tfootHtml = "";
    for (let index = 0; index < dtInstance.columns()[0].length; index++) {
      tfootHtml += `<td></td>`;
    }
    tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
    $(tfootHtml).insertAfter(thead);
    this.tfootElement = this.tableElement.querySelector("tfoot");
    return this.tfootElement;
  }

  private setFooterClass(tfoot: any): void {
    if (tfoot && (this.columnFilterPosition === DataTableColumnFilterPosition.TOP || !this.columnFilterPosition)) {
      $(tfoot).addClass(this.TOP_FILTER_CLASS);
    } else if (tfoot && this.columnFilterPosition === DataTableColumnFilterPosition.BOTTOM) {
      $(tfoot).removeClass(this.TOP_FILTER_CLASS);
    }
  }

  private drawInputColumnFilter(dtInstance: DataTables.Api, columnFilterType: DataTableColumnFilterType | string): void {
    const filterInputClass = this.FILTER_INPUT_CLASS;

    dtInstance.columns().every(function () {
      const column = this;
      if (columnFilterType === DataTableColumnFilterType.INPUT || column.header().dataset.filter === DataTableColumnFilterType.INPUT) {
        const columnText = column.header().innerText;
        $(`<input class='${filterInputClass}' placeholder='Filtre ${columnText}'>`)
          .appendTo($(column.footer()).empty())
          .on("keyup change", function () {
            if (column.search() !== this["value"]) {
              column
                .search(this["value"])
                .draw();
            }
          });
      }
    });
  }

  private drawSelectColumnFilter(dtInstance: DataTables.Api, columnFilterType: DataTableColumnFilterType | string): void {
    const filterSelectClass = this.FILTER_SELECT_CLASS;

    dtInstance.columns().every(function () {
      const column = this;
      if (columnFilterType === DataTableColumnFilterType.SELECT || column.header().dataset.filter === DataTableColumnFilterType.SELECT) {
        const columnText = column.header().innerText;
        const select = $(`<select class='${filterSelectClass}'><option value=\"\">Filtre ${columnText}</option></select>`)
          .appendTo($(column.footer()).empty())
          .on("change", function () {
            const val = $.fn.dataTable.util.escapeRegex(
              String($(this).val())
            );
            column
              .search(val ? "^" + val + "$" : "", true, false)
              .draw();
          });
        column.data().unique().sort().each(function (d) {
          select.append("<option value=\"" + d + "\">" + d + "</option>");
        });
      }
    });
  }

  private bindRowExpandEvent(tbody: HTMLElement) {
    if (!tbody) { return; }
    const format = function(name, value) {
      return "<div>Id: " + name + "<br />Prato: " + value + "</div>";
    };
    this.dtElement.dtInstance.then((dtInstance) => {
      this.unbindRowExpandEvent(tbody);
      $(tbody).on("click", "td.table-expand-button", function() {
        const tr = $(this).closest("tr");
        const row = dtInstance.row(tr);

        if (row.child.isShown()) {
          row.child.hide();
          tr.removeClass("shown");
          tr.find("i").attr("class", "fa fa-plus");
        } else {
          row.child(format(tr.data("child-name"), tr.data("child-value"))).show();
          tr.addClass("shown");
          tr.find("i").attr("class", "fa fa-minus");
        }
      });
    });
  }

  private unbindRowExpandEvent(tbody: HTMLElement) {
    $(tbody).off("click", "td.table-expand-button");
  }

  ngOnDestroy(): void {
    this.dtElement.dtTrigger.unsubscribe();
    if (!this.dtElement || !this.dtElement.dtInstance) { return; }
    this.dtElement.dtInstance.then(dtInstance => {
      dtInstance.destroy();
    });
  }

}
