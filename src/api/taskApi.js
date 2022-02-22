import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/tasks/";

export function getTasks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function saveTask(task) {
  return fetch(baseUrl + (task.id || ""), {
    method: task.id ? "PUT" : "POST", //POST for create, PUT to update when id already exists.
    headers: { "content-type": "application " },
    body: JSON.stringify(task),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteTask(taskId) {
  return fetch(baseUrl + taskId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
