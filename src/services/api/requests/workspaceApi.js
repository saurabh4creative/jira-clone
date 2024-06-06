import { apiPaths } from "@config/apiPaths";
import { getData, postData, updateData } from "../apiClient";

export const createWorkspace = (payload) => {
     return postData(apiPaths.CREATE_WORKSPACE, payload);
};

export const getWorkspaceList = () => {
    return getData(apiPaths.GET_WORKSPACE);
};

export const getWorkspaceDetail = (workspaceID) => { 
    return getData(`${apiPaths.GET_WORKSPACE_DETAIL}/${workspaceID}`);
}

export const getWorkspaceDetailTab = (workspaceID, tabKey) => { 
    return getData(`${apiPaths.GET_WORKSPACE_DETAIL}/${workspaceID}/${tabKey}`);
}

export const updateWorkspaceDetail = (workspaceID, payload) => {
    return updateData(`${apiPaths.UPDATE_WORKSPACE}/${workspaceID}`, payload)
}