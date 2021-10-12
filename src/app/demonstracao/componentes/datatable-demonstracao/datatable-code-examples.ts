export class DataTableCodeExamples {
   static codeDescricao = `<cx-datatable>
   <table datatable class="table table-striped table-hover">
     <thead>
       <tr>
         <th>Coluna 1</th>
         <th>Coluna 2</th>
         <th>Coluna 3</th>
       </tr>
     </thead>
     <tbody>
       <tr *ngFor="let linha of linhas">
         <td>{{ linha.dado1 }}</td>
         <td>{{ linha.dado2 }}</td>
         <td>{{ linha.dado3 }}</td>
       </tr>
     </tbody>
   </table>
 </cx-datatable>`;

 static codeTsTemplateString = `import { Component, ViewChild } from '@angular/core';
import { DadosTabelaService } from '~dados-tabela.service.ts';

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  @ViewChild("tabelaExemplo", { static: true })
  datatable: DataTableComponent;

  dadosDaTabela = [];

  constructor(private service: DadosTabelaService) {}

  ngOnInit() {
    this.service.consultarDados().subscribe((response: any[]) => {
      this.dadosDaTabela = response;
      if (this.datatable) {
        this.datatable.reloadTable();
      }
    });
  }

}
`.trim();

static htmlCodeDatatable = `						<cx-datatable [settings]="settingsCompleta" [trigger]="dtTrigger">
  <table datatable class="table table-striped table-hover">
    <thead>
      <tr>
        <th>Prato</th>
        <th>Ingrediente</th>
        <th>Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();

static tsCodeDatatable = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService, RandomDataFood } from "~random-data.service";

@Component({
  selector: 'app-tabelas',
  templateUrl: './tabelas.component.html',
  styleUrls: ['./tabelas.component.scss']
})
export class TabelasComponent {

  /* Exemplo de configuração pré-definida */
  settingsCompleta = DataTableConfig.COMPLETE_SETTINGS;

  /* Exemplo de configuração customizada */
  settingsCustom = DataTableConfig.getDataTableSettings({
    showInfo: true,
    showPagination: true,
    showLength: true,
    menuLength: [5, 10, 15]
  });

  constructor (
    public randomDataService: RandomDataService
  ) {}

  rows = [];
  dtTrigger: Subject<any> = new Subject();

  ngOnInit() {
    this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
      this.rows = foodArray;
      this.dtTrigger.next();
    });
  }

}
`.trimRight();

static htmlCodeDatatableFilter = `						<cx-datatable [settings]="settingsCustom" [trigger]="dtTrigger" columnFilterPosition="top">
  <table datatable class="table table-striped table-hover">
    <thead>
      <tr>
        <th data-filter="input">Prato</th>
        <th>Ingrediente</th>
        <th data-filter="select">Medida</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let row of rows.slice(0, 10)">
        <td>{{ row.dish }}</td>
        <td>{{ row.ingredient }}</td>
        <td>{{ row.measurement }}</td>
      </tr>
    </tbody>
  </table>
</cx-datatable>`.trim();

static tsCodeDatatableFilter = `import { Component } from '@angular/core';
import { DataTableConfig } from "~datatable-definitions";
import { RandomDataService, RandomDataFood } from "~random-data.service";

  @Component({
    selector: 'app-tabelas',
    templateUrl: './tabelas.component.html',
    styleUrls: ['./tabelas.component.scss']
  })
  export class TabelasComponent {

    settingsCustom = DataTableConfig.getDataTableSettings({
      showInfo: true,
      showPagination: true,
      showLength: true,
      menuLength: [5, 10, 15]
    });

    constructor (
      public randomDataService: RandomDataService
    ) {}

    rows = [];
    dtTrigger: Subject<any> = new Subject();

    ngOnInit() {
      this.randomDataService.getFoodData(100).subscribe((foodArray: RandomDataFood[]) => {
        this.rows = foodArray;
        this.dtTrigger.next();
      });
    }

  }
`.trimRight();
}
