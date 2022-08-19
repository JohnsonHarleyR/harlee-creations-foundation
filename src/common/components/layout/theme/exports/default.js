import { ThemeName } from "../../../../constants/theme";

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

    '--bg-header-color': '--primary-400',
    '--bg-primary-color': '--secondary-300',
    '--bg-secondary-color': '--secondary-300',
  },
  
};

export default DefaultTheme;