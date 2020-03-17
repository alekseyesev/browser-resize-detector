interface IResizeDetectorService {
  onChange: Function;
  removeChangeHandler: Function;
}

interface IConfig {
  medium: number;
  large: number;
}

type ViewportSize = "small" | keyof IConfig;
