import { Button, Flex, Layout } from "antd";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import useUserInfo from "@hooks/useUserInfo";
import CustomIcon from "@components/CustomIcon/CustomIcon";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { logout } from "app/reducers/user/userSlice";
import { useDispatch } from "react-redux";

const Header = () => {
     const dispatch = useDispatch();
     const { info } = useUserInfo();

     return (
          <Layout.Header style={{ padding: 0, background: "#fff", height: 70, paddingInline: 20 }}>
               <Flex justify="space-between" align="center" style={{ height: "100%" }}>
                    <Flex align="center">&nbsp;</Flex>
                    <Flex align="center" gap={10}>
                         <Button
                              type="text"
                              style={{ background: "#fafafa" }}
                              shape="circle"
                              icon={<CustomIcon icon={IoNotificationsOutline} size={16} />}
                         />
                         <Button
                              style={{ background: "#fafafa" }}
                              type="text"
                              shape="circle"
                              icon={<CustomIcon icon={IoSettingsOutline} size={16} />}
                         />
                         <Button
                              type="text"
                              shape="circle"
                              icon={<CustomIcon icon={MdLogout} />}
                              onClick={() => dispatch(logout())}
                         />
                         <UserAvatar info={info} />
                    </Flex>
               </Flex>
          </Layout.Header>
     );
};

export default Header