import { Tabs } from "antd";
import PageContent from "@components/PageContent/PageContent";
import ProjectsList from "./Tabs/Projects/ProjectsList";
import UserList from "./Tabs/Users/UserList";
import { useNavigate, useParams } from "react-router-dom";
import { sitePaths } from "@config/sitePathConfig";

const WorkspaceTabs = () => {
     const { workspaceID, workspaceTab } = useParams();
     const navigate = useNavigate();

     const items = [
          {
               key: "projects",
               label: "Projects",
               children: <ProjectsList />,
          },
          {
               key: "users",
               label: "Users",
               children: <UserList />,
          },
          {
               key: "overview",
               label: "Overview",
               children: "Content of Tab Pane 3",
          },
     ];

     return (
          <PageContent>
               <Tabs
                    items={items}
                    onChange={(key) => navigate(`${sitePaths.WORKSPACE_DETAIL}/${workspaceID}/${key}`)}
                    activeKey={workspaceTab} 
               />
          </PageContent>
     );
};

export default WorkspaceTabs;
