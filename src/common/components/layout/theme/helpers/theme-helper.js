import DefaultTheme from '../exports/default';
import { ThemeInfo, ThemePropName } from '../../../../constants/theme';
import { setCornerLogoColors, setMainLogoColors } from '../../MainLayout/redux/thunks';


//#region Private Methods

const getThemeByName = (themeName) => {
  return ThemeInfo[themeName];
}

const isVariableName = (value) => {
  if (value.length > 2 && value.substring(0, 2) === '--') {
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

export const implementTheme = (themeName, changeProperties) => {
  // TODO: use redux to set logo colors
  let theme = getThemeByName(themeName);
  let themeProps = {};

  let cssProps = theme.cssProps;
  for (const prop in cssProps) {
    // Basically, if a value is null, assume the default value for it
    let value = cssProps[prop] !== null
      ? cssProps[prop]
      : getDefaultValueForProperty(prop);
      
    let isVarName;
    do {
        
        isVarName = isVariableName(value);
        
        // If a value happens to be another CSS root variable name rather than
        // an actual value, that means to set that root value to another value
        // inside the theme. (I.e. the one with the root variable name.)
        value = !isVarName
        ? value
        : cssProps[value];
        
        console.log(`isVarName? `, isVarName);
        
    } while (isVarName);

    

    // set the property - this should change css values in the main layout
    if (value !== undefined) {
      document.documentElement.style.setProperty(prop, value);

      // also set themeProps to change the state for Material UI
      let newPropName = ThemePropName[prop];
      if (newPropName !== undefined) {
        themeProps[newPropName] = value;
      }
    }

  }

  // do logo props too
  
  let logoProps = theme.logoProps;
  for (const prop in logoProps) {
    let value = logoProps[prop] !== null
    ? logoProps[prop]
    : getDefaultValueForProperty(prop, false);

    value = !isVariableName(value)
      ? value
      : cssProps[value];

    // set the property - this should change css values in the main layout
    themeProps[prop] = value;
  }

  // set the properties in the state
  changeProperties(themeProps);
}

//#endregion

