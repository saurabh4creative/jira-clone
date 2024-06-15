import PageHeader from "@components/PageHeader/PageHeader";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons"; 
import ProjectInfoView from "./Views/ProjectInfoView";
import { useInsertionEffect, useLayoutEffect } from "react";
import { useEffect } from "react";

const ProjectInfo = () => {
     return (
          <>
               <PageHeader
                    title={"Project Info"}
                    action={
                         <Button type={"primary"} icon={<PlusOutlined />}>
                              Add Project
                         </Button>
                    }
               /> 

               <ProjectInfoView />
          </>
     );
};

export default ProjectInfo;