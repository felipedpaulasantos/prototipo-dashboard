import { NgModule } from "@angular/core";
import { SharedComponentsModule } from "./components/shared-components.module";
import { ScrollSpyDirective } from "./directives/scrollspy.directive";
import { ByteSizePipe } from "./pipes/bytesize-pipe";
import { CpfPipe } from "./pipes/cpf-pipe";
import { RippleDirective } from "./directives/ripple.directive";
import { SafePipe } from './pipes/safe.pipe';

@NgModule({
  imports: [SharedComponentsModule],
  declarations: [ScrollSpyDirective, ByteSizePipe, CpfPipe, RippleDirective, SafePipe],
  exports: [SharedComponentsModule, ScrollSpyDirective, ByteSizePipe, CpfPipe, RippleDirective, SafePipe]
})

export class SharedModule {}
