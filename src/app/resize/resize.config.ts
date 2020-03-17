import { InjectionToken } from '@angular/core';

export const RESIZE_BREAKPOINTS = new InjectionToken<IConfig>('config');

export class ResizeConfig {
  constructor(private medium: number = 768, private large: number = 992) {}
  public getBreakpoints(): IConfig {
    const config: IConfig = { medium: this.medium, large: this.large };
    return config;
  }
  public static isSmallViewport(
    viewportWidth: number,
    config: IConfig
  ): boolean {
    return viewportWidth < config.medium;
  }
  public static isMediumViewport(
    viewportWidth: number,
    config: IConfig
  ): boolean {
    return viewportWidth >= config.medium && viewportWidth < config.large;
  }
  public static isLargeViewport(
    viewportWidth: number,
    config: IConfig
  ): boolean {
    return viewportWidth >= config.large;
  }
}
