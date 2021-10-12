import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { TimelineItem, TimelineState } from "src/app/guia-caixa/components/timeline/timeline-item";
import { CodeFixedNavItem } from "src/app/shared/components/code-fixed-nav/code-fixed-nav.component";
import { DocApiProperties } from "src/app/shared/components/documentacao-api-table/documentacao-api-table.component";
import { ComponentesInterface } from "../componentes-interface";
import { timelineApiProps } from "./timeline-api-props";
import { TimelineCodeExamples } from "./timeline-code-examples";

@Component({
  templateUrl: "./timeline-demonstracao.component.html",
  host: { "(window:scroll)": "onScroll($event)" }
})
export class TimelineDemonstracaoComponent extends ComponentesInterface implements OnInit {

  constructor(public toastr: ToastrService, private fb: FormBuilder) {
    super(toastr);
  }

  sandboxForm = this.fb.group({
    title: [null, Validators.required],
    date: [null],
    dateString: [null],
    formato: [null],
    state: [null, Validators.required]
  });

  @ViewChild("scrollElement") scrollElement;

  sectionOffset = 0;
  spiedTags = ["APP-DOCUMENTACAO-TEMPLATE"];
  currentSection = "painelTimeline";

  navItems: CodeFixedNavItem[] = [
    { id: "painelTimeline", name: "Padrão" },
    { id: "painelTimelineExtenso", name: "Extenso" }
  ];

  propsApi: DocApiProperties[] = timelineApiProps;

  timelineItems: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];

  timelineItemsExtenso: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" },
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];

  sandboxTimelineItems = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
  ];
  timelineOrientation = 1;

  examples = TimelineCodeExamples;

  ngOnInit(): void { }

  addItem() {
    const newItem: any = {};
    newItem.title = this.sandboxForm.get("title").value;
    newItem.state = this.sandboxForm.get("state").value;

    if (this.sandboxForm.get("dateString").value) {
      newItem.dateString = this.sandboxForm.get("dateString").value;
    } else {
      newItem.date = this.sandboxForm.get("date").value;
      if (this.sandboxForm.get("formato").value) {
        newItem.dateFormat = this.sandboxForm.get("formato").value;
      }
    }

    if (!newItem.dateString && !newItem.date) { return; }

    this.sandboxTimelineItems.push(newItem);
    this.sandboxTimelineItems = [].concat(this.sandboxTimelineItems);
  }

  removeItem() {
    this.sandboxTimelineItems.pop();
    this.sandboxTimelineItems = [].concat(this.sandboxTimelineItems);
  }

}
