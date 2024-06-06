import { apiPaths } from "@config/apiPaths"; 
import { getData, postData } from "../apiClient";

export const userLogin = (payload) => {
     return postData(apiPaths.LOGIN, payload);
};

export const userRegister = (payload) => {
     return postData(apiPaths.REGISTER, payload);
};

export const usersList = (workspaceID) => {  
     if( workspaceID ){
          return getData(`${apiPaths.GET_USERS}?workspaceID=${workspaceID}`);
     }
     else{
          return getData(`${apiPaths.GET_USERS}`);
     }
}

export const getAllUserList = () => {
     return getData(apiPaths.GET_USERS_LIST); 
}

export const getRandomUser = () => {
     return getData('/random'); 
}