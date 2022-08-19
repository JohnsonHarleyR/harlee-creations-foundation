import actions from "./actions";

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

export default {
  changeMainTheme,
  setThemeProperties,
  setCornerLogoColors,
  setMainLogoColors,
};