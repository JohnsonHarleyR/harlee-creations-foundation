import DefaultTheme from '../exports/default';
import { ThemeName } from '../../../../constants/theme';
import { setCornerLogoColors, setMainLogoColors } from '../../MainLayout/redux/thunks';


//#region Private Methods

const getThemeByName = (themeName) => {
  switch(themeName) {
    default:
    case ThemeName.DEFAULT:
      return DefaultTheme;
  }
}

const isVariableName = (value) => {
  if (value.length > 2 && value.substring(0, 1) === '--') {
    return true;
  }
  return false;
}


const getDefaultValueForProperty = (propertyName, isCss = true) => {
  return isCss
    ? DefaultTheme.cssProps[propertyName]
    : DefaultTheme.logoProps[propertyName];
}

//#endregion

//#region Exports

export const implementTheme = (themeName) => {
  // TODO: use redux to set logo colors
  let theme = getThemeByName(themeName);

  let cssProps = theme.cssProps;
  for (const prop in cssProps) {
    // Basically, if a value is null, assume the default value for it
    let value = cssProps[prop] !== null
      ? cssProps[prop]
      : getDefaultValueForProperty(prop);

    // If a value happens to be another CSS root variable name rather than
    // an actual value, that means to set that root value to another value
    // inside the theme. (I.e. the one with the root variable name.)
    value = !isVariableName(value)
      ? value
      : cssProps[value];

    // set the property - this should change css values in the main layout
    if (value !== undefined) {
      document.documentElement.style.setProperty(prop, value);
    }
  }

  // do logo props too
  
  let logoProps = theme.logoProps;
  let logoObj = {};
  for (const prop in logoProps) {
    let value = logoProps[prop] !== null
    ? logoProps[prop]
    : getDefaultValueForProperty(prop, false);

    value = !isVariableName(value)
      ? value
      : cssProps[value];

    // set the property - this should change css values in the main layout
    logoObj[prop] = value;
  }

  // set those values
  setCornerLogoColors(logoObj.cornerLogoTextColor, logoObj.headLogoIconColor);
  setMainLogoColors(logoObj.bodyLogoTextColor, logoObj.bodyLogoIconColor);
}

//#endregion

