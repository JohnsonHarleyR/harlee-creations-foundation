import { ThemeName } from "../../../../constants/theme";

//#region Default Theme

const DefaultTheme = {
  logoProps: {
    cornerLogoTextColor: '--accent-tint',
    cornerLogoIconColor: '--primary-pure',
    mainLogoTextColor: '--accent-tint',
    mainLogoIconColor: '--primary-pure',
  },
  cssProps: {
    '--primary-pure': 'hsl(49, 100%, 50%)',
    '--primary-tint': 'hsl(49, 100%, 50%)',
    '--primary-shade': 'hsl(49, 100%, 25%)',
    '--primary-tone': 'hsl(49, 100%, 50%)',
    
    '--secondary-pure': 'hsl(196, 100%, 50%)',
    '--secondary-tint': 'hsl(196, 100%, 75%)',
    '--secondary-shade': 'hsl(196, 100%, 33%)',
    '--secondary-tone': 'hsl(196, 51%, 50%)',
    
    '--accent-pure': 'hsl(202, 0%, 50%)',
    '--accent-tint': 'hsl(202, 0%, 100%)',
    '--accent-shade': 'hsl(202, 0%, 0%)',
    '--accent-tone': 'hsl(202, 32%, 50%)',
      
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

    '--font-color-1': '--accent-tint',
    '--font-color-2': '--accent-tint',
    '--font-color-3': '--secondary-tone',

    '--font-family-1': 'Impact',
    '--font-family-2': 'Courier New',
    '--font-family-3': 'comic sans',


    '--header-height': '10vh',
    '--footer-height': '8vh',

    '--header-logo-shrink': '1.5vh',
    '--header-left-margin': '1ch',
    '--header-right-margin': '1ch',

    '--nav-item-font': '--font-family-2',
    '--nav-item-font-size': '3ch',
    '--nav-item-color': '--font-color-1',
    '--nav-item-padding-left': '2ch',

    '--bg-header-color': '--secondary-tone',
    '--bg-primary-color': '--primary-pure',
    '--bg-secondary-color': '--primary-pure',
  },
  
};

//#endregion

export default DefaultTheme;