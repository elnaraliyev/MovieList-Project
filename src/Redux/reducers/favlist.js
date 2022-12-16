import { ACTION_TYPES } from "../actionTypes";

const initialState = {
    favlist: [],
    inputName: []
  };
  
  export function favlistsReducer(state = initialState, action) {
    console.log("action.payload", action);
    switch (action.type) {
      case ACTION_TYPES.GET_FAV:
        return { ...state, favlist: [...state.favlist, action.payload], inputName: [...state.inputName, action.payload] };
  
      default:
        return state;
    }
  }