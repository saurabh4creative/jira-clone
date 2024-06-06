import { useSelector } from "react-redux";

const useUserInfo = () => {
     const user = useSelector((state) => state.user);
     return user;
};

export default useUserInfo;