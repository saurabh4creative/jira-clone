import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { authProtectedRoutes, publicRoutes } from "./routes";
import FullPageLoader from "@components/Loader/FullPageLoader";
import AuthProtected from "./AuthProtected";

const AuthLayout = React.lazy(() => import("@layouts/AuthLayout/AuthLayout"));
const NoAuthLayout = React.lazy(() => import("@layouts/NoAuthLayout/NoAuthLayout"));

const MainRoutes = () => {
     return (
          <Suspense fallback={<FullPageLoader />}>
               <Router>
                    <Routes>
                         {/** All Non Auth Layouts */}
                         <Route element={<NoAuthLayout />}>
                              {publicRoutes.map((route, idx) => (
                                   <Route
                                        path={route.path}
                                        element={route.component}
                                        key={idx}
                                        isAuthProtected={false}
                                   />
                              ))}
                         </Route>

                         {/** All Protected Auth Layouts */}
                         <Route
                              element={
                                   <AuthProtected isAuthProtected={true}>
                                        <AuthLayout />
                                   </AuthProtected>
                              }
                         >
                              {authProtectedRoutes.map((route, idx) => (
                                   <Route
                                        path={route.path}
                                        element={route.component}
                                        key={idx}
                                        isAuthProtected={false}
                                   />
                              ))}
                         </Route>
                    </Routes>
               </Router>
          </Suspense>
     );
};

export default MainRoutes;
