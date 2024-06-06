import PageHeader from "@components/PageHeader/PageHeader";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import PageContent from "@components/PageContent/PageContent";
import WorkspaceList from "./Views/WorkspaceList";
import AddWorkspace from "./AddWorkspace";
import { useState } from "react";

const Workspace = () => {
     const [showModal, setShowModal] = useState(false);

     return (
          <>
               <PageHeader
                    title={"Workspace"}
                    action={
                         <Button type={"primary"} onClick={() => setShowModal(!showModal)} icon={<PlusOutlined />}>
                              Add Workspace
                         </Button>
                    }
               />

               <AddWorkspace isOpen={showModal} onClose={() => setShowModal(false)} />

               <PageContent>
                    <WorkspaceList />
               </PageContent>
          </>
     );
};

export default Workspace;
