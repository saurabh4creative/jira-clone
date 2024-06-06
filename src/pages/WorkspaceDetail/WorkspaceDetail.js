import PageHeader from "@components/PageHeader/PageHeader";
import { sitePathConfig } from "@config/sitePathConfig";
import { useNavigate } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import WorkspaceInfo from "./Views/WorkspaceInfo";
import WorkspaceTabs from "./Views/WorkspaceTabs";

const WorkspaceDetail = () => {
     const navigate = useNavigate();

     return (
          <>
               <PageHeader
                    title={"Workspace Detail"}
                    action={
                         <Button
                              type={"primary"}
                              onClick={() => navigate(sitePathConfig.WORKSPACE)}
                              icon={<PlusOutlined />}
                         >
                              Add Workspace
                         </Button>
                    }
               />

               <Row gutter={[15, 15]}>
                    <Col span={24}>
                         <WorkspaceInfo />
                    </Col>
                    <Col span={24}>
                         <WorkspaceTabs />
                    </Col>
               </Row>
          </>
     );
};

export default WorkspaceDetail;