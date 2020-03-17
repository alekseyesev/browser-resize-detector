import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ResizeModule } from "./resize/resize.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { TestComponent } from "./test.component";

import { ResizeConfig, RESIZE_BREAKPOINTS  } from "./resize/resize.config";

@NgModule({
  imports: [BrowserModule, FormsModule, ResizeModule],
  declarations: [AppComponent, HelloComponent, TestComponent],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: RESIZE_BREAKPOINTS,
      useValue: new ResizeConfig(768, 992).getBreakpoints()
    }
  ]
})
export class AppModule {}
