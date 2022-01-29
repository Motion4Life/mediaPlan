/// <reference types="react-scripts" />

import { ThemeProvider } from '@emotion/react';

declare module '@components';
declare module '@assets';
declare module '@constants';
declare module '@theme';
declare module '@interface';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      success: string;
      error: string;
      text: string;
    };

    baseline: {
      b1: number;
      b2: number;
      b3: number;
      b4: number;
      b5: number;
      b6: number;
      b7: number;
      b8: number;
    };

    breakPoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };

    ThemeProvider: ThemeProvider;
  }
}
