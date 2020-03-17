import { NgModule } from "@angular/core";
import { ResizeDetectorService } from "./resize-detector.service";
import { ViewportSizeDirective } from "./viewport-size.directive";

@NgModule({
  declarations: [ViewportSizeDirective],
  exports: [ViewportSizeDirective],
  providers: [ResizeDetectorService]
})
export class ResizeModule {}
