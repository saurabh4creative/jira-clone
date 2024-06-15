import { Drawer } from "antd";
import { useParams } from "react-router-dom";
import AddTaskForm from "@components/Task/AddTaskForm/AddTaskForm";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "@services/api/requests/taskApi";
import useNotification from "@hooks/useNotification";

const AddIssue = ({ isOpen, onClose }) => {
     const { workspaceID, projectID } = useParams();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     const queryClient = useQueryClient();

     const submitForm = async (values) => {
          return await createTask(values);
     };
     
     const mutation = useMutation({
          mutationFn: submitForm,
          onError: (error) => {
               showErrorMessage(error.message);
          },
          onSuccess: (data) => {
               if (data.status === true) {
                    onClose();
                    queryClient.refetchQueries({ queryKey: ["projectInfo", workspaceID, projectID], exact: true }); 
                    showSuccessMessage(data.message);
               } else {
                    showErrorMessage(data.message);
               }
          },
     }); 
     
     const onFinish = (values) => mutation.mutate(values);

     return (
          <Drawer title="Go Back" onClose={onClose} open={isOpen} style={{ background: "#f4f2ee" }} destroyOnClose> 
                <AddTaskForm loading={mutation.isPending} onClose={onClose} workspaceID={workspaceID} projectID={projectID} onFinish={onFinish}/>
          </Drawer>
     );
};

export default AddIssue;