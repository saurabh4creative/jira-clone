import { Suspense } from "react";
import { ConfigProvider } from "antd";
import { themeConfig } from "@config/themeConfig";
import { Outlet } from "react-router-dom";
import FullPageLoader from "@components/Loader/FullPageLoader";

const NoAuthLayout = () => {
     return (
          <ConfigProvider theme={themeConfig.BLUE}>
               <div className="no-auth-layout">
                    <Suspense fallback={<FullPageLoader />}>
                         <Outlet />
                    </Suspense>
               </div>
          </ConfigProvider>
     );
};

export default NoAuthLayout;