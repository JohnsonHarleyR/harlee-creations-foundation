import actions from "./actions";
import {ThemePropName} from "../../../../constants/theme.js";

export const changeMainTheme = (themeName) => async (
  dispatch,
) => {
  dispatch(actions.changeTheme(themeName));
}

export const setThemeProperties = (properties) => async (
  dispatch,
) => {
  dispatch(actions.changeThemeProperties(properties));
}

export const setCornerLogoColors = (textColor, iconColor) => async (
  dispatch,
) => {
  dispatch(actions.setCornerLogoValues(textColor, iconColor));
}

export const setMainLogoColors = (textColor, iconColor) => async (
  dispatch,
) => {
  dispatch(actions.setMainLogoValues(textColor, iconColor));
}

export const modifyThemeColors = (colorCategory, values) => async (
    dispatch,
    getState
) => {
    let state = getState();
    let newTheme = {};
    for (var prop in state.layout.theme) {
        newTheme[prop] = state.layout.theme[prop];
    }
    
    for (var prop in values) {
        let cssName = `--${colorCategory}-${prop}`;
        document.documentElement.style.setProperty(cssName, values[prop]);
        let statePropName = ThemePropName[cssName];
        newTheme[statePropName] = values[prop];
    }
    
    // test
    document.documentElement.style.setProperty('--bg-primary-color', `var(--primary-pure)`);
    
    dispatch(actions.changeThemeProperties(newTheme));
    
          
}

export default {
  changeMainTheme,
  setThemeProperties,
  setCornerLogoColors,
  setMainLogoColors,
  modifyThemeColors,
};