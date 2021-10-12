import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cx-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["spinner.component.css"]
})
export class SpinnerCaixaComponent implements OnInit {

  @Input() fullscreen = false;

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
