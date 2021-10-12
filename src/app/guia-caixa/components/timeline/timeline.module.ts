import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TimelineComponent } from "./timeline.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";



@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    PerfectScrollbarModule
  ],
  exports: [TimelineComponent]
})
export class TimelineModule { }
