import { Component, OnInit, ChangeDetectionStrategy, Input } from "@angular/core";

export interface CodeFixedNavItem {
  id: string;
  name: string;
}

@Component({
  selector: "app-code-fixed-nav",
  templateUrl: "./code-fixed-nav.component.html",
  styleUrls: ["./code-fixed-nav.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeFixedNavComponent implements OnInit {

  constructor() { }

  @Input()
  currentSection = "";

  @Input()
  items: CodeFixedNavItem[] = [];

  toolbarHeight = 64;

  ngOnInit(): void {
  }

  scrollTo(section) {
    window.scrollBy({ top: - this.toolbarHeight });
 		document.querySelector("#" + section)
      .scrollIntoView({ behavior: "smooth" });
	}

}
