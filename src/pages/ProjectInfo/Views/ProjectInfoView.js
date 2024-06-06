 import PageContent from "@components/PageContent/PageContent"; 
import { Flex } from "antd";
import ProjectDetailTabs from "./ProjectDetailTabs"; 
import ProjectInfoSection from "./ProjectInfoSection";

const ProjectInfoView = () => {
     return (
          <Flex vertical gap={20}>
               <PageContent> 
                    <ProjectInfoSection />
               </PageContent>
               <PageContent>
                    <ProjectDetailTabs />
               </PageContent>
          </Flex>
     );
};

export default ProjectInfoView;