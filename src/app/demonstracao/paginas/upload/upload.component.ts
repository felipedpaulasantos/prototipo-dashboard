import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { DataTableDirective } from "angular-datatables";

import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { Subject } from "rxjs";
import { CardButtonCheckEvent } from "src/app/guia-caixa/components/card-button/card-button-check-event";
import { CardButtonComponent } from "src/app/guia-caixa/components/card-button/card-button.component";
import { StepperItem } from "src/app/guia-caixa/components/stepper/stepper-component/stepper-item";
import { TabberItem } from "src/app/guia-caixa/components/stepper/tabber-component/tabber-item";
import { TimelineItem, TimelineState } from "src/app/guia-caixa/components/timeline/timeline-item";
import { DataTableConfig, DatatableDefaultButtonsList } from "src/app/guia-caixa/components/datatable/datatable-definitions";


@Component({
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit, AfterViewInit {

  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private renderer: Renderer2
  ) { }

  @ViewChild("cardHome")
  cardHome: CardButtonComponent;

  @ViewChild("cardChave")
  cardChave: CardButtonComponent;

  @ViewChild("cardCDC")
  cardCDC: CardButtonComponent;

  @ViewChild("cardVazio")
  cardVazio: CardButtonComponent;

  @ViewChild(DataTableDirective, { static: false })
  datatableElement: DataTableDirective;

  cliente = null;

  previaSrc: string;
  uploadedFile: File = null;

  contratos = [];

  passoAtual = 0;

  passos: StepperItem[] = [
    { title: "Passo 1" },
    { title: "Passo 2" },
    { title: "Passo 3" },
    { title: "Passo 4" },
    { title: "Passo 5" }
  ];

  abas: TabberItem[] = [
    { name: "Passo 1", icon: "fa fa-home" },
    { name: "Passo 2", icon: "fa fa-home" },
    { name: "Passo 3", icon: "fa fa-home" },
    { name: "Passo 4", icon: "fa fa-home" },
    { name: "Passo 5", icon: "fa fa-home" }
  ];

  timelineItems: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date() },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];

  valor = "";

  rotas = [
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
    { url: "tal-rota" },
  ];

  testeEv: CardButtonCheckEvent;

  formCpfNis = this.fb.group({
    tipoId: [null],
    cpf: [null],
    nis: [null]
  });

  code1Html = `<cx-timeline [items]="timelineItems"></cx-timeline>
`;
  code1Ts = `timelineItems: TimelineItem[] = [
  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
  { title: "Item erro", state: "error", dateString: "03/12/2020" },
  { title: "Item info", state: "info", dateString: "06/12/2020" }
];`;



  code2Html = `<cx-timeline [items]="timelineItems" [styles]="{ height: '250px' }"></cx-timeline>
`;



  code3Html = `<cx-timeline [items]="timelineItems" [styles]="{ width: 'auto', height: '350px' }"></cx-timeline>
`;


  code4Html = `<div class="card">
  <div class="card-body">
    <cx-timeline [items]="timelineItems" [styles]="{ height: '350px' }"></cx-timeline>
  </div>
</div>`;



  code6Html = `<cx-timeline [items]="timelineItems" [orientation]="0"></cx-timeline>
`;

  checkHome: any;
  checkConfig: any;

  rows = [];
  config: DataTables.Settings = DataTableConfig.COMPLETE_SETTINGS;
  configCompleta = DataTableConfig.COMPLETE_SETTINGS;
  configCompletaSemBotoes = DataTableConfig.COMPLETE_NO_BUTTON_SETTINGS;
  configInfo = DataTableConfig.PAGINATION_INFO_SETTINGS;
  configSimples = DataTableConfig.SIMPLE_SETTINGS;
  dtTrigger: Subject<any> = new Subject();

  filterPosition = "";

  cols = 0;


  exibirEvento(evento: CardButtonCheckEvent) {
    console.log(evento);
  }

  ngOnInit(): void {
    this.clientePesquisado();
    this.populaContratos();
    this.preventDragDropDefault();
    this.cols = 3;
    for (let index = 0; index < 100; index++) {
      const element = `Linha ${index + 1}`;
      this.rows.push(element);
    }
    this.rows = [].concat(this.rows);

  }

  populaContratos(): void {
    for (let index = 0; index < 10; index++) {
      const contrato = {
        numero: `4200.160.0150${index}-${index}`,
        valor: 50000 + (index * 1000),
        situacao: "Pago"
      };
      this.contratos.push(contrato);
    }
  }

  get isCpfNisInvalid(): boolean {
    return (this.formCpfNis.get("cpf").invalid && this.formCpfNis.get("nis").invalid)
      || (this.formCpfNis.get("cpf").valid && this.formCpfNis.get("nis").valid);
  }

  pesquisarCpf(): void {
    this.spinner.show("global");
    setTimeout(() => {
      this.spinner.hide("global");
      this.toastr.success("Cliente pesquisado com sucesso");
      this.clientePesquisado();
    }, 2000);
  }

  clientePesquisado() {
    this.cliente = {
      nome: "Fulano da Silva",
      cpf: this.formCpfNis.get("cpf").value || this.formCpfNis.get("nis").value || "111.111.111-11",
      nis: this.formCpfNis.get("nis").value || "",
      dataNascimento: "01/01/1920",
      nomeMae: "Ciclana da Silva"
    };
  }

  drop(ev: DragEvent, cardEl: ElementRef) {
    ev.preventDefault();
    if (ev.dataTransfer && ev.dataTransfer.files && ev.dataTransfer.files[0]) {
      const files = ev.dataTransfer.files;
      this.uploadArquivo(files);
    }
    this.dragLeave(null, cardEl);
  }

  dragOver(ev: any, cardEl: ElementRef) {
    this.renderer.addClass(cardEl, "drag-hover");
  }

  dragLeave(ev: any, cardEl: ElementRef) {
    this.renderer.removeClass(cardEl, "drag-hover");
  }

  uploadArquivo(files: FileList) {
    this.previaSrc = null;
    this.uploadedFile = null;
    this.spinner.show("spinnerUpload");

    const file = files[0];
    setTimeout(() => {
      this.fromFileToBase64(file).then(
        (base64) => {
          this.previaSrc = `data:${file.type};base64,${base64}`;
          this.uploadedFile = file;
          this.spinner.hide("spinnerUpload");
        }
      );
    }, 2000);
  }

  addDocumento() {
    this.toastr.success("Documento adicionado com sucesso!", "", { positionClass: "toast-top-right" });
  }

  fromFileToBase64(file: File, comMetadata: boolean = false): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {

        /* Metadata: 'data:{mimetype};base64,' */
        const resultComMetadata = reader.result.toString();
        const resultSemMetadata = resultComMetadata.replace(/^data:(.*,)?/, "");

        let base64 = comMetadata ? resultComMetadata : resultSemMetadata;

        /* Preenche o base64 com '=' caso não seja múltiplo de 4 - correção de padding */
        if ((base64.length % 4) > 0) {
          base64 += "=".repeat(4 - (resultSemMetadata.length % 4));
        }
        resolve(base64);
      };
      reader.onerror = error => reject(error);
    });
  }

  open(src: string) {
    window.open(src);
  }

  preventDragDropDefault() {
    window.addEventListener("dragover", function (e: any) {
      e.preventDefault();
    }, false);
    window.addEventListener("drop", function (e: any) {
      e.preventDefault();
    }, false);
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {

      const table = dtInstance["context"][0]["nTable"];
      const thead = $(table).children("thead")[0];
      const tfoot = $(table).children("tfoot")[0];

      this.drawColumnFilters(dtInstance, table, thead, tfoot);
    });
  }

  updateConfig(newConfig: DataTableConfig) {
    this.config = JSON.parse(JSON.stringify(newConfig));
    this.updateTable();
  }

  updateConfigOption(option: string, value: boolean) {
    switch (option) {
      case "buttons":
        this.config["buttons"] = value ? DatatableDefaultButtonsList : [];
        break;
      case "filter":
        this.config.searching = value;
        break;
      case "pagination":
        this.config.paging = value;
        break;
      case "length":
        this.config.lengthChange = value;
        break;
      case "columnFilter":
        this.config["columnFilter"] = value;
        break;
    }
    this.updateTable();
  }

  updateTable() {
    this.datatableElement.dtOptions = this.config;
    this.datatableElement.dtInstance.then((dtInstance) => {
      dtInstance.destroy();
      this.ngAfterViewInit();
    });
  }

  drawColumnFilters(dtInstance: DataTables.Api, table, thead, tfoot) {

    if (!this.config["columnFilter"]) {
      dtInstance.columns().every(function () {
        $(this.footer()).remove();
      });

    } else if (!tfoot) {
      let tfootHtml = "";
      for (let index = 0; index < dtInstance.columns()[0].length; index++) {
        tfootHtml += `<td></td>`;
      }
      tfootHtml = `<tfoot><tr>${tfootHtml}</tr></tfoot>`;
      $(tfootHtml).insertAfter(thead);
    }

    if (tfoot && this.filterPosition === "top") {
      $(tfoot).addClass("d-table-row-group");
    } else if (tfoot && this.filterPosition === "bottom") {
      $(tfoot).removeClass("d-table-row-group");
    }


    if (this.config["columnFilter"] === "input") {
      dtInstance.columns().every(function () {
        const column = this;
        const input = $(`<input class='form-control' placeholder='Filtro'>`)
          .appendTo($(column.footer()).empty())
          .on("keyup change", function () {
            if (column.search() !== this["value"]) {
              column
                .search(this["value"])
                .draw();
            }
          });
      });
    }

    if (this.config["columnFilter"] === "select") {
      dtInstance.columns().every(function () {
        const column = this;
        const select = $(`<select class='form-control'><option value=\"\">Filtro</option></select>`)
          .appendTo($(column.footer()).empty())
          .on("change", function () {
            const val = $.fn.dataTable.util.escapeRegex(
              String($(this).val())
            );
            column
              .search(val ? "^" + val + "$" : "", true, false)
              .draw();
          });
        column.data().unique().sort().each(function (d, j) {
          select.append("<option value=\"" + d + "\">" + d + "</option>");
        });
      });
    }
  }

}
