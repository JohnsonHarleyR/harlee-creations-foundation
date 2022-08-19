import actions from "./actions";

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
  setCornerLogoColors,
  setMainLogoColors,
};