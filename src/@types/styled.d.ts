/* eslint-disable @typescript-eslint/no-empty-interface */
import { defaultTheme } from './../styles/themes/default';
import 'styled-components';

type ThemType = typeof defaultTheme

declare module 'styled-components' {
  export interface defaultTheme extends ThemType {}
}