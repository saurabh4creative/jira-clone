import { useCallback, useState } from "react";
import { Button, Flex, Segmented } from "antd";
import { AppstoreOutlined, BarsOutlined, PlusOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import PageOption from "@components/PageOption/PageOption";
import PageHeader from "@components/PageHeader/PageHeader";
import { createProject, getProjectList } from "@services/api/requests/projectApi";
import SpinLoader from "@components/SpinLoader/SpinLoader";
import ProjectList from "./Views/List/ProjectList";
import ProjectTable from "./Views/Table/ProjectTable";
import AddProjectForm from "@components/Project/AddProjectForm/AddProjectForm";
import useNotification from "@hooks/useNotification";
import { useParams } from "react-router-dom";

const Projects = () => {
     const { workspaceID } = useParams();
     const queryClient = useQueryClient();

     const [typeView, setTypeView] = useState("List");
     const [showModal, setShowModal] = useState(false);
     const { showSuccessMessage, showErrorMessage } = useNotification();

     const { isLoading, error, data, isError } = useQuery({
          queryKey: ["projects", workspaceID],
          queryFn: ({ queryKey }) => {
               const [, workspaceId] = queryKey;
               return getProjectList(workspaceId);
          },
          retry: false,
     });

     const handleTypeViewChange = useCallback((value) => {
          setTypeView(value);
     }, []);

     const submitForm = async (values) => {
          values.workspace = workspaceID;
          return await createProject(values);
     };

     const mutation = useMutation({
          mutationFn: submitForm,
          onError: (error) => {
               showErrorMessage(error.message);
          },
          onSuccess: (data) => {
               if (data.status === true) {
                    setShowModal();
                    showSuccessMessage(data.message);
                    queryClient.resetQueries(["projects"]);
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate(values);

     return (
          <>
               <PageHeader
                    title={"Projects"}
                    action={
                         <Button onClick={() => setShowModal(true)} type={"primary"} icon={<PlusOutlined />}>
                              Add Project
                         </Button>
                    }
               />

               <AddProjectForm
                    open={showModal}
                    close={() => setShowModal(false)}
                    onFinish={onFinish}
                    loading={mutation.isPending}
               />

               <PageOption>
                    <Flex>
                         <Segmented options={["All", "In Progress", "Completed", "To do", "Late"]} />
                    </Flex>
                    <Flex>
                         <Flex gap={10}>
                              <Segmented
                                   options={[
                                        { value: "List", icon: <AppstoreOutlined /> },
                                        { value: "Table", icon: <BarsOutlined /> },
                                   ]}
                                   onChange={handleTypeViewChange}
                              />
                         </Flex>
                    </Flex>
               </PageOption>

               <div>
                    {isLoading === true ? <SpinLoader /> : null}

                    {isLoading === false && isError ? error.message : null}

                    {isLoading === false && data ? (
                         <>
                              {typeView === "Table" ? <ProjectTable dataSource={data.projects} /> : null}
                              {typeView === "List" ? <ProjectList dataSource={data.projects} /> : null}
                         </>
                    ) : null}
               </div>
          </>
     );
};

export default Projects;
