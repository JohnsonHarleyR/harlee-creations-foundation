import { ThemeName } from "../../../../constants/theme";

//#region Default Theme

const DefaultTheme = {
  logoProps: {
    cornerLogoTextColor: '--primary-100',
    cornerLogoIconColor: '--secondary-300',
    mainLogoTextColor: '--secondary-100',
    mainLogoIconColor: '--primary-300',
  },
  cssProps: {
    '--primary-100': '#F4F8F9',
    '--primary-200': '#A9D1E3',
    '--primary-300': '#69ADCB',
    '--primary-400': '#3C95BB',
    '--primary-500': '#0989C0',

    '--secondary-100': '#FCE6B9',
    '--secondary-200': '#FFE6B3',
    '--secondary-300': '#FFCF70',
    '--secondary-400': '#FFBC37',
    '--secondary-500': '#E29700',

    '--tertiary-100': '#FDDCE0',
    '--tertiary-200': '#FA95A1',
    '--tertiary-300': '#F55E70',
    '--tertiary-400': '#E42B41',
    '--tertiary-500': '#AF0519',

    '--font-color-1': '#FFF',
    '--font-color-2': '#000',
    '--font-color-3': '--primary-400',

    '--font-family-1': 'Impact',
    '--font-family-2': 'Courier New',
    '--font-family-3': 'comic sans',


    '--header-height': '10vh',
    '--footer-height': '10vh',

    '--header-logo-shrink': '1.5vh',
    '--header-left-margin': '1ch',
    '--header-right-margin': '1ch',

    '--nav-item-font': '--font-family-2',
    '--nav-item-font-size': '3ch',
    '--nav-item-color': '--font-color-1',
    '--nav-item-padding-left': '2ch',

    // '--bg-header-color': '--primary-400',
    '--bg-header-color': 'black',
    // '--bg-primary-color': '--secondary-300',
    '--bg-primary-color': '#9A9A9A',
    // '--bg-secondary-color': 'none',
    '--bg-secondary-color': '#CBCBCB',
    // '--bg-wrap-color': '--secondary-100',
    '--bg-wrap-color': 'white',

    '--wrap-border-radius': '1.5ch',
    '--wrap-border-color': '--primary-100',

    '--main-area-width': '70vw',
  },
  
};

//#endregion

export default DefaultTheme;