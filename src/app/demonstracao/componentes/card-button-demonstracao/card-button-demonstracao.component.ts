import { Component, ViewChild } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { ToastrService } from "ngx-toastr";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { ComponentesInterface } from "../componentes-interface";
import { cardButtonApiProps } from "./card-button-api-props";
import { CardButtonCodeExamples } from "./card-button-code-examples";

@Component({
  templateUrl: "./card-button-demonstracao.component.html",
  host: { "(window:scroll)": "onScroll($event)" }
})
export class CardButtonDemonstracaoComponent extends ComponentesInterface {

  constructor(
    public toastr: ToastrService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer
  ) {
    super(toastr);
  }

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelCardButton";

  navItems: CodeFixedNavItem[] = [
    { id: "painelCardButton", name: "Layout" },
    { id: "painelCardButtonCheckbox", name: "Checkbox" },
    { id: "painelCardButtonRadio", name: "Radio" },
    { id: "painelCardButtonColor", name: "Cores" }
  ];

  formFone = this.fb.group({
    tipoFone: [null]
  });

  user;
  email;

  propsApi = cardButtonApiProps;

  examples = CardButtonCodeExamples;

}
