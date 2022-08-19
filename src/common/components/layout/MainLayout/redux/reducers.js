import TYPES from './types';
import { ClassForLayoutCondition } from "../../../../constants/main-layout";
import { ThemeName } from "../../../../constants/theme";

const initialState = {
  layoutClass: ClassForLayoutCondition.DEFAULT,
  
  themeName: ThemeName.DEFAULT,
  cornerLogoTextColor: '#000000',
  cornerLogoIconColor: '#000000',
  mainLogoTextColor: '#000000',
  mainLogoIconColor: '#000000',
};

const layoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case TYPES.CHANGE_THEME:
      return {
        ...state,
        themeName: action.value,
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