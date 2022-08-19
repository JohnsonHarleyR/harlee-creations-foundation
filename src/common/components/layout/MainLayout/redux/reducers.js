import { ClassForLayoutCondition } from "../../../../constants/main-layout";


const initialState = {
  layoutClass: ClassForLayoutCondition.DEFAULT,

};

const layoutReducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default layoutReducer;