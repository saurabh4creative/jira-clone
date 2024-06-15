import { apiPaths } from "@config/apiPaths";
import { getData, postData } from "../apiClient";

export const createTask = (payload) => {
     return postData(apiPaths.CREATE_TASK, payload);
};

export const getTasksList = () => {
     return getData(apiPaths.GET_TASKS);
};

export const getProjectTasks = (projectID) => {
     return getData(`${apiPaths.GET_TASKS}?projectID=${projectID}`);
}