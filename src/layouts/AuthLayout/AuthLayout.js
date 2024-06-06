import { Suspense } from "react";
import { ConfigProvider, Layout } from "antd";
import { themeConfig } from "@config/themeConfig";
import { Outlet } from "react-router-dom";
import Header from "@components/Header/Header";
import SpinLoader from "@components/SpinLoader/SpinLoader";

const AuthLayout = () => {
     return (
          <ConfigProvider
               theme={{
                    ...themeConfig.BLUE,
                    // cssVar: true,
                    hashed: false
               }}
          >
               <Layout style={{ minHeight: "100vh" }}>
                    <Layout.Sider width={280} trigger={null} collapsible></Layout.Sider>
                    <Layout>
                         <Header />
                         <Layout.Content style={{ padding: '30px 20px' }}>
                              <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                                   <Suspense fallback={<SpinLoader />}>
                                        <Outlet />
                                   </Suspense>
                              </div>
                         </Layout.Content>
                    </Layout>
               </Layout>
          </ConfigProvider>
     );
};

export default AuthLayout;