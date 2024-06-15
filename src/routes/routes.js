import { lazy } from "react";
import { sitePathConfig } from "@config/sitePathConfig";    

const Login = lazy(() => import("@pages/Login/Login"));
const Register = lazy(() => import("@pages/Register/Register"));
const ResetPassword = lazy(() => import("@pages/ResetPassword/ResetPassword"));
const Workspace = lazy(() => import("@pages/Workspace/Workspace"));
const Dashboard = lazy(() => import("@pages/Dashboard/Dashboard")); 
const ProjectInfo = lazy(() => import("@pages/ProjectInfo/ProjectInfo"));
const Tasks = lazy(() => import("@pages/Tasks/Tasks"));
const TaskDetail = lazy(() => import("@pages/TaskDetail/TaskDetail"));
const WorkspaceDetail = lazy(() => import("@pages/WorkspaceDetail/WorkspaceDetail"));
const Users = lazy(() => import("@pages/Users/Users"));

/**
 * Declare all Auth Routes
 */
const authProtectedRoutes = [
     { path: sitePathConfig.HOME, component: <Dashboard /> },
     { path: sitePathConfig.DASHBOARD, component: <Dashboard /> },
     { path: sitePathConfig.WORKSPACE, component: <Workspace /> },
     { path: sitePathConfig.WORKSPACE_DETAIL2, component: <WorkspaceDetail /> },
     { path: sitePathConfig.WORKSPACE_DETAIL1, component: <WorkspaceDetail /> },
     { path: sitePathConfig.PROJECTS, component: <ProjectInfo /> },
     { path: sitePathConfig.PROJECT_DETAIL, component: <ProjectInfo /> },
     { path: sitePathConfig.PROJECT_DETAIL_TAB, component: <ProjectInfo /> },
     { path: sitePathConfig.TASKS, component: <Tasks /> },
     { path: sitePathConfig.TASK_DETAIL, component: <TaskDetail /> },
     { path: sitePathConfig.USERS, component: <Users /> },
];

/**
 * Declare all Public Routes
 */
const publicRoutes = [
     { path: sitePathConfig.LOGIN, component: <Login /> },
     { path: sitePathConfig.REGISTER, component: <Register /> },
     { path: sitePathConfig.RESET_PASSWORD, component: <ResetPassword /> },
     { path: '/demo', component: 'asd' },
];

/**
 * Export all routes
 */
export { authProtectedRoutes, publicRoutes };