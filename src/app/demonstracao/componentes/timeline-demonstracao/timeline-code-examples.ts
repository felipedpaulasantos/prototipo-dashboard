export class TimelineCodeExamples {

static codeDescricao = `<cx-timeline [items]="timelineItems"></cx-timeline>`.trim();
static codeTsDescricao = `timelineItems: TimelineItem[] = [
  { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
  { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
  { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
  { title: "Item erro", state: "error", dateString: "03/12/2020" },
  { title: "Item info", state: "info", dateString: "06/12/2020" }
];`.trim();

static htmlCodeTimelinePadrao = `<cx-timeline [items]="timelineItems"></cx-timeline>`.trim();
static tsCodeTimelinePadrao = `import { Component } from '@angular/core';
import { TimelineItem, TimelineState } from "./timeline/timeline-item";

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})
export class TimelineDemonstracaoComponent {

  constructor() {}

  timelineItems: TimelineItem[] = [
    { title: "Item sucesso", state: TimelineState.SUCCESS, date: new Date()  },
    { title: "Item warning", state: "warning", date: new Date(), dateFormat: "full" },
    { title: "Item warning-stop", state: "warning-stop", dateString: "05/12/2020" },
    { title: "Item erro", state: "error", dateString: "03/12/2020" },
    { title: "Item info", state: "info", dateString: "06/12/2020" }
  ];
}
`.trimRight();

// tslint:disable-next-line:max-line-length
static htmlCodeTimelineExtenso = `<cx-timeline [styles]="{ height: '350px', width: 'auto' }" [items]="timelineItemsExtenso"></cx-timeline>`.trim();
static tsCodeTimelineExtenso = `import { Component } from '@angular/core';
import { TimelineItem, TimelineState } from "./timeline/timeline-item";

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineDemonstracaoComponent {

  constructor() {}

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
}
`.trimRight();

}
