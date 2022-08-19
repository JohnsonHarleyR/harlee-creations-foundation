import TYPES from './types';
import { ThemeName } from "../../../../constants/theme";
import { ClassForLayoutCondition } from "../../../../constants/main-layout";


const initialState = {
  layoutClass: ClassForLayoutCondition.DEFAULT,
  
  themeName: ThemeName.DEFAULT,
  theme: {},
};

const layoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.CHANGE_THEME:
      return {
        ...state,
        themeName: action.value,
      };
    case TYPES.CHANGE_THEME_PROPERTIES:
      return {
        ...state,
        theme: action.properties,
      };
    case TYPES.SET_CORNER_LOGO_VALUES:
      return {
        ...state,
        cornerLogoTextColor: action.textColor,
        cornerLogoIconColor: action.iconColor,
      }
    case TYPES.SET_MAIN_LOGO_VALUES:
      return {
        ...state,
        mainLogoTextColor: action.textColor,
        mainLogoIconColor: action.iconColor,
      }
    default:
      return state;
  }
}

export default layoutReducer;