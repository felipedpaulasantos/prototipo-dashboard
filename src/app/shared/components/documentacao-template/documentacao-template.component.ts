import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

@Component({
  selector: "app-documentacao-template",
  templateUrl: "./documentacao-template.component.html",
  styleUrls: ["./documentacao-template.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentacaoTemplateComponent implements OnInit {

  constructor() { }

  @Input() showCodeButton = true;
  @Input() painelId: string;
  @Input() cardTitle: string;
  @Input() codeViewId: string;
  @Input() htmlTabId: string;
  @Input() htmlCode: string;
  @Input() tsTabId?: string;
  @Input() tsCode?: string;
  @Input() cssTabId?: string;
  @Input() cssCode?: string;
  @Input() cardId?: string;

  ngOnInit(): void {
  }

}
