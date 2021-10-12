import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-menu-elementos",
  templateUrl: "./menu-elementos.component.html",
  styleUrls: ["./menu-elementos.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuElementosComponent implements OnInit {

  constructor() { }

  isAberto = false;

  ngOnInit(): void {
  }

}
