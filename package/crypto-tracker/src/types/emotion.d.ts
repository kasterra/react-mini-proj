import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
  }
}
