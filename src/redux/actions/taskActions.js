import * as types from "./actionTypes";
import * as taskApi from "../../api/taskApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function createTask(task) {
  return { type: "CREATE_TASK", task };
}

export function loadTaskSuccess(tasks) {
  return { type: types.LOAD_TASKS_SUCCESS, tasks };
}

export function createTaskSuccess(task) {
  return { type: types.CREATE_TASK_SUCCESS, task };
}

export function updateTaskSuccess(task) {
  return { type: types.UPDATE_TASK_SUCCESS, task };
}

export function deleteTaskOptimistic(task) {
  return { type: types.DELETE_TASK_OPTIMISTIC, task };
}

export function loadTasks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return taskApi
      .getTasks()
      .then((tasks) => {
        dispatch(loadTaskSuccess(tasks));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveTask(task) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return taskApi
      .saveTask(task)
      .then((savedTask) => {
        task.id
          ? dispatch(updateTaskSuccess(savedTask))
          : dispatch(createTaskSuccess(savedTask));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function deleteTask(task) {
  return function (dispatch) {
    //Doing optimistic delete, so not dispatching begin/end api call
    // actions, or apiCallError action since we're not showing the loading status for this
    dispatch(deleteTaskOptimistic(task));
    return taskApi.deleteTask(task.id);
  };
}
