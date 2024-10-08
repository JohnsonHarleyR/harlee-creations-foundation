import TYPES from './types';

const changeTheme = (themeName) => {
  return {
    type: TYPES.CHANGE_THEME,
    value: themeName,
  };
}

const changeThemeProperties = (properties) => {
  return {
    type: TYPES.CHANGE_THEME_PROPERTIES,
    properties: properties,
  };
}

const setCornerLogoValues = (textColor, iconColor) => {
  return {
    type: TYPES.SET_CORNER_LOGO_VALUES,
    textColor: textColor,
    iconColor: iconColor,
  };
}

const setMainLogoValues = (textColor, iconColor) => {
  return {
    type: TYPES.SET_MAIN_LOGO_VALUES,
    textColor: textColor,
    iconColor: iconColor,
  };
}

export default {
  changeTheme,
  changeThemeProperties,
  setCornerLogoValues,
  setMainLogoValues,
}