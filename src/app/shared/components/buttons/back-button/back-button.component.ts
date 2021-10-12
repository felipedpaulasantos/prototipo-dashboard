import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-back-button",
  template: `
    <span role="button" [class]="btnClass" (click)="goBack()"
      ><i [class]="iconClass"></i>{{ text }}</span
    >
  `
})
export class BackButtonComponent implements OnInit {
  constructor() {}

  @Input() btnClass = "btn btn-link text-contrast-light p-0";
  @Input() iconClass = "fas fa-chevron-left mr-2";
  @Input() text = "Voltar";

  ngOnInit() {}

  goBack() {
    history.back();
  }
}
