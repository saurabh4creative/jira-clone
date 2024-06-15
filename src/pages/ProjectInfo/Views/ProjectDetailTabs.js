import { RxDashboard } from "react-icons/rx";
import { TbListDetails } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { GoProjectRoadmap, GoProjectSymlink, GoChecklist, Usr } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import { sitePaths } from "@config/sitePathConfig"; 
import { Tabs } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import IssuesTab from "./Tabs/Issues/IssuesTab";
import OverviewTab from "./Tabs/Overview/OverviewTab";
import ListTab from "./Tabs/List/ListTab";
import Board from "./Tabs/Board/Board";
import TimeSheet from "./Tabs/TimeSheet/TimeSheet";
import SettingTab from "./Tabs/Settings/SettingTab";
import Users from "./Tabs/Users/Users";

const ProjectDetailTabs = () => {
     const navigate = useNavigate();
     const { workspaceID, projectID, projectTabKey } = useParams();
     
     const items = [
          {
               key: "overview",
               label: "Overview",
               children: <OverviewTab />,
               icon: <TbListDetails size={17}/>,
          },
          {
               key: "list",
               label: "List",
               children: <ListTab />,
               icon: <GoChecklist size={17} />,
          },
          {
               key: "board",
               label: "Board",
               children: <Board />,
               icon: <GoProjectSymlink size={17} />,
          },
          {
               key: "issues",
               label: "Issues",
               children: <IssuesTab />,
               icon: <GoProjectRoadmap size={17} />,
          },
          {
               key: "timesheet",
               label: "Timesheet",
               children: <TimeSheet />,
               icon: <RxDashboard size={17} />,
          },
          {
               key: "users",
               label: "Users",
               children: <Users />,
               icon: <FiUser size={17} />,
          },
          {
               key: "setting",
               label: "Setting",
               children: <SettingTab />,
               icon: <IoSettingsOutline size={18} />,
          },
     ];

     return (
          <Tabs
               items={items}
               onChange={(key) =>
                    navigate(
                         `${sitePaths.WORKSPACE_DETAIL}/${workspaceID}${sitePaths.PROJECT_DETAIL}/${projectID}/${key}`
                    )
               }
               activeKey={projectTabKey}
               destroyInactiveTabPane
          />
     );
};

export default ProjectDetailTabs;