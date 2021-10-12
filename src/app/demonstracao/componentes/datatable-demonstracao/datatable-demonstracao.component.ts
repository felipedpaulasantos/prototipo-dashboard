import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef } from "@angular/core";
import { DataTableDirective } from "angular-datatables";
import { Subject } from "rxjs";

import { ComponentesInterface } from "../componentes-interface";
import { ToastrService } from "ngx-toastr";
import { DataTableSettings, DataTableConfig, DatatableDefaultButtonsList, DataTableButtons } from "src/app/guia-caixa/components/datatable/datatable-definitions";
import { FormBuilder } from "@angular/forms";
import { DataTableComponent } from "src/app/guia-caixa/components/datatable/datatable.component";

import { RandomDataFood } from "src/app/shared/model/random-data-food";
import { RandomDataService } from "src/app/demonstracao/componentes/datatable-demonstracao/random-data.service";
import { NgxSpinnerService } from "ngx-spinner";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { datatableApiProps, datatableConfigOptionsProps, datatableConfigProps } from "./datatable-api-props";
import { DataTableCodeExamples } from "./datatable-code-examples";

@Component({
  selector: "app-tabelas",
  templateUrl: "./datatable-demonstracao.component.html",
  styleUrls: ["./datatable-demonstracao.component.scss"],
  host: { "(window:scroll)": "onScroll($event)" }
})
export class DatatableDemonstracaoComponent extends ComponentesInterface implements OnInit, OnDestroy {

  constructor (
    public toastr: ToastrService,
    public fb: FormBuilder,
    public randomDataService: RandomDataService,
    public spinner: NgxSpinnerService,
    private cdr: ChangeDetectorRef
  ) {
    super(toastr);
  }

  examples = DataTableCodeExamples;

  formDTConfig = this.fb.group({
    buttons: true,
    searching: true,
    showFilter: true,
    showLength: true,
    showButtons: true,
    showTable: true,
    showInfo: true,
    showProcessing: true,
    showPagination: true,
    columnFilterType: "",
    columnFilterPosition: ""
  });

  @ViewChild(DataTableDirective)
  datatableElement: DataTableDirective;

  @ViewChild("tabela")
  table: DataTableComponent;

  @ViewChild("tabela2")
  table2: DataTableComponent;

  @ViewChild("tabelaChildRows")
  tableChildRows: DataTableComponent;

  @ViewChild("scrollElement") scrollElement;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  sectionOffset = 0;
  currentSection = "painelTabelaDatatable";

  rows = [];
  dtCompleteOptions: DataTableSettings = {};
  dtCustomOptions: DataTableSettings = {};
  dtSimpleOptions: DataTableSettings = {};

  settings: DataTableSettings = DataTableConfig.DEFAULT_SETTINGS;
  settingsPadrao = DataTableConfig.DEFAULT_SETTINGS;
  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;
  settingsCompletaSemBotoes = DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
  settingsInfo = DataTableConfig.PAGINATION_INFO_SETTINGS;
  settingsSimples = DataTableConfig.SIMPLE_SETTINGS;
  settingsCustom = DataTableConfig.getDataTableSettings({
    showInfo: true,
    showPagination: true,
    showLength: true,
    menuLength: [5, 10, 15]
  });
  settingsComTodosBotoes = DataTableConfig.getDataTableSettings({
    buttons: [
      DataTableButtons.EXCEL.button,
      DataTableButtons.PRINT.button,
/*       DataTableButtons.COPY.button,
      DataTableButtons.COLVIS.button */
    ],
    showButtons: true,
    showFilter: true,
    showInfo: true,
    showLength: true,
    showPagination: true,
    showProcessing: true
  });
  dtTrigger: Subject<any> = new Subject();

  navItems: CodeFixedNavItem[] = [
    { id: "painelDatatable", name: "Configuração" },
    { id: "painelDatatableFiltros", name: "Filtros por coluna" },
    { id: "painelDatatableReinicializacao", name: "Reinicialização" }
  ];

  propsApi = datatableApiProps;
  propsConfig = datatableConfigProps;
  propsConfigOptions = datatableConfigOptionsProps;

  filterPosition = "";

  cols = 0;

  trigger = new Subject();

  showTable = true;

  codeDataFilterInput = `<th data-filter="input">Título</th>`;
  codeDataFilterSelect = `<th data-filter="select">Título</th>`;
  codeDataFilterAllColumns = `<cx-datatable columnFilterPosition="bottom" columnFilterType="select">...</cx-datatable>`;
  codeHtmlTemplateString = `<cx-datatable #tabelaExemplo>...</cx-datatable>`;

  childRowContent = [];

  ngOnInit() {
    this.dtSimpleOptions = DataTableConfig.SIMPLE_SETTINGS;
    this.dtCompleteOptions = DataTableConfig.COMPLETE_SETTINGS;
    this.dtCustomOptions = DataTableConfig.getDataTableSettings({
      buttons: [DataTableConfig.DEFAULT_BUTTONS.EXCEL],
      showInfo: true,
      showFilter: true,
      showPagination: true,
      menuLength: [5, 10, 50]
    });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  updateSettings(newConfig: DataTableConfig) {
    this.settings = JSON.parse(JSON.stringify(newConfig));
    this.cdr.detectChanges();
    this.table.updateSettings(this.settings);
/*     this.formDTConfig.get("columnFilterType").setValue(this.settings.columnFilterType);
    this.formDTConfig.get("columnFilterPosition").setValue(this.settings.columnFilterPosition); */
  }

  updateConfigOption(option: string, value: any) {
    switch (option) {
      case "buttons":
        this.settings["buttons"] = value ? DatatableDefaultButtonsList : [];
        break;
      case "filter":
        this.settings.searching = value;
        break;
      case "pagination":
        this.settings.paging = value;
        break;
      case "length":
        this.settings.lengthChange = value;
        break;
      case "columnFilterType":
        this.settings.columnFilterType = value;
        break;
    }
    this.table.updateSettings(this.settings);
    this.tableChildRows.updateSettings(this.settings);
  }

  getTableConfig() {
    if (this.formDTConfig.get("showButtons").value) {
      this.formDTConfig.get("buttons").setValue(DatatableDefaultButtonsList);
    } else {
      this.formDTConfig.get("buttons").setValue([]);
    }
    const newConfig = DataTableConfig.getDataTableSettings(this.formDTConfig.value);
    this.settings = JSON.parse(JSON.stringify(newConfig));
    this.table.updateSettings(this.settings);
    this.tableChildRows.updateSettings(this.settings);
  }

  hasProperty(prop: string) {
    return this.settings.dom.toLowerCase().includes(prop);
  }

  printConfig(): any {
    const configPrint = JSON.parse(JSON.stringify(this.settings));
    configPrint["language"] = null;
    return configPrint;
  }

  setFilterPosition(position: string) {
    this.table.updateFilterColumnPosition(position);
  }

  consultarDados() {
    if (!this.rows || (this.rows && this.rows.length < 1)) {
      this.fetchData();
    }
  }

  fetchData() {
    this.spinner.show("global");
    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
      this.rows = foodArray;
/*       if (this.table) {
        this.table.reloadTable();
      } */
      this.dtTrigger.next();
      this.spinner.hide("global");
    });
  }

  atualizar() {
    // this.getTableConfig();
    this.settings = DataTableConfig.PAGINATION_INFO_SETTINGS;
    this.table.reloadTable();
  }

}
