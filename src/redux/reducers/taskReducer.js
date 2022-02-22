import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function taskReducer(state = initialState.courses, action) {
  switch (action.type) {
    case types.CREATE_TASK:
      return [...state, { ...action.task }];
    default:
      return state;
  }
}
