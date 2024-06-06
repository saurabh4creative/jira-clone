import { sitePathConfig } from "@config/sitePathConfig";
import useUserInfo from "@hooks/useUserInfo";
import { Navigate } from "react-router-dom";

const AuthProtected = (props) => {
    /*
     * Navigate is un-auth access protected routes via url
     */

    const user = useUserInfo();
    const isAuthenticated = user.isAuthenticated; 

    if (props.isAuthProtected && !isAuthenticated) {
         return <Navigate to={{ pathname: sitePathConfig.LOGIN, state: { from: props.location } }} />;
    }

    return isAuthenticated === true ? props.children : null;
};

export default AuthProtected