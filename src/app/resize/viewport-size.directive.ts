import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  Inject,
  OnDestroy
} from "@angular/core";
import { ResizeConfig, RESIZE_BREAKPOINTS } from "./resize.config";
import { ResizeDetectorService } from "./resize-detector.service";

@Directive({
  selector: "[ifViewportSize]"
})
export class ViewportSizeDirective implements OnDestroy {
  private config: IConfig;
  constructor(
    private resizeDetector: ResizeDetectorService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    @Inject(RESIZE_BREAKPOINTS) config: IConfig
  ) {
    this.config = config;
  }

  @Input() set ifViewportSize(size: ViewportSize) {
    let hasRendered: boolean = false;
    const capitalizedSize = Array.from(size)
      .map((char, i) => (i && char) || char.toUpperCase())
      .join("");
    this.resizeDetector.onChange(currentViewport => {
      if (
        ResizeConfig[`is${capitalizedSize}Viewport`](
          currentViewport,
          this.config
        )
      ) {
        if (!hasRendered) {
          this.viewContainer.createEmbeddedView(this.templateRef);
          hasRendered = true;
        }
      } else {
        this.viewContainer.clear();
        hasRendered = false;
      }
    });
  }

  public ngOnDestroy() {
    this.resizeDetector.removeChangeHandler();
  }
}
