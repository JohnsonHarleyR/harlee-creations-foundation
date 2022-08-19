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

    '--secondary-100': '#FFFDFA',
    '--secondary-200': '#FFE6B3',
    '--secondary-300': '#FFCF70',
    '--secondary-400': '#FFBC37',
    '--secondary-500': '#E29700',

    '--font-color-1': '#FFF',
    '--font-color-2': '#000',
    '--font-color-3': '--primary-400',

    '--font-family-1': 'Impact',
    '--font-family-2': 'Courier New',
    '--font-family-3': 'comic sans',


    '--header-height': '10vh',
    '--footer-height': '8vh',

    '--header-logo-shrink': '2vh',
    '--header-x-margin': '1ch',

    '--nav-item-font': '--font-family-2',
    '--nav-item-font-size': '3ch',
    '--nav-item-color': '--font-color-1',
    '--nav-item-padding-left': '2ch',

    '--bg-header-color': '--primary-400',
    '--bg-primary-color': '--secondary-300',
    '--bg-secondary-color': '--secondary-300',
  },
  
};

//#endregion

export default DefaultTheme;