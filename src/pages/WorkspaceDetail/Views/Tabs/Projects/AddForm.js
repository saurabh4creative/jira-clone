import AddProjectForm from "@components/Project/AddProjectForm/AddProjectForm";
import { createProject } from "@services/api/requests/projectApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Drawer, Flex } from "antd";
import useNotification from "antd/es/notification/useNotification";
import { useParams } from "react-router-dom";

const AddForm = ({ isOpen, onClose }) => {
     const { workspaceID } = useParams();
     const queryClient = useQueryClient();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     
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
                    onClose();
                    queryClient.refetchQueries({ queryKey: ["workspaceDetail", workspaceID], exact: true });
                    queryClient.refetchQueries({ queryKey: ["workspaceDetail", workspaceID, 'projects'], exact: true });
                    queryClient.refetchQueries({ queryKey: ["workspaceDetail", workspaceID, 'users'], exact: true }); 
                    showSuccessMessage(data.message);
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate(values);

     return (
          <Drawer
               title="Go Back"
               onClose={onClose}
               open={isOpen} 
               style={{ background: "#f4f2ee" }}
               destroyOnClose
          >
               <AddProjectForm onFinish={onFinish} loading={mutation.isPending} onClose={onClose} />
          </Drawer>
     );
};

export default AddForm;