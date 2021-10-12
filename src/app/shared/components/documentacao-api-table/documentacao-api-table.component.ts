import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

export interface DocApiProperties {
  nome: string;
  descricao: string;
  codeExample?: any;
  codeLang?: string;
}

@Component({
  selector: "app-documentacao-api-table",
  template: `
  <h6 class="header-subtitulo-caixa">{{ titulo }}</h6>
  <p *ngIf="descricao">{{ descricao }}</p>
  <div class="table-responsive">
    <table class="table table-bordered table-striped table-caixa">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let prop of props">
          <td [innerHTML]="prop.nome"></td>
          <td>
            <p class="m-0" [innerHTML]="prop.descricao"></p>
            <ng-container *ngIf="prop.codeExample">
                <pre class="mt-2"><code [highlight]="prop.codeExample" [languages]="[prop.codeLang]"></code></pre>
            </ng-container>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentacaoApiTableComponent implements OnInit {

  constructor() {}

  @Input()
  props: DocApiProperties[];

  @Input()
  titulo = "Propriedades";

  @Input()
  descricao: string;

  ngOnInit(): void {}

}
