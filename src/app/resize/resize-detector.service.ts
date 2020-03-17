import { Injectable } from "@angular/core";
import { Observable, Subscription, fromEvent } from "rxjs";
import { auditTime } from "rxjs/operators";

@Injectable()
export class ResizeDetectorService implements IResizeDetectorService {
  private viewport: number;
  private target: Window;
  private observableEvent: string;
  private observer: Observable<Event>;
  private subscription: Subscription;
  private skipFrameThroughMs: number;
  constructor() {
    this.target = window;
    this.observableEvent = "resize";
    this.skipFrameThroughMs = 100;
    this.observer = fromEvent(this.target, this.observableEvent);
  }

  public onChange(callback: (viewport: number) => void) {
    this.subscription = this.observer
      .pipe(auditTime(this.skipFrameThroughMs))
      .subscribe((e: Event) => {
        this.viewport = (e.target as Window).innerWidth;
        callback(this.viewport);
      });
    this.target.dispatchEvent(new Event(this.observableEvent));
  }

  public removeChangeHandler() {
    this.subscription.unsubscribe();
  }
}
