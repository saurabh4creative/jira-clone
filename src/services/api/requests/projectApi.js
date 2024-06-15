import { apiPaths } from "@config/apiPaths";
import { getData, postData, updateData } from "../apiClient";

export const createProject = (payload) => {
     return postData(apiPaths.CREATE_PROJECT, payload);
};

export const getProjectList = (id) => {
     return getData(`${apiPaths.GET_PROJECTS}?workspaceID=${id}`);
};

export const getProjectDetail = (workspaceID, projectID) => {
     return getData(`${apiPaths.GET_PROJECT_DETAIL}?workspaceID=${workspaceID}&projectID=${projectID}`);
};

export const getProjectIssueList = (projectID, key) => {
     return getData(`${apiPaths.GET_PROJECT_DETAIL}/${projectID}/${key}`);
}

export const updateProjectUserList = (projectID, key, payload) => {
     return updateData(`${apiPaths.GET_PROJECT_DETAIL}/${projectID}/${key}`, payload);
}