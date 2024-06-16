import AddWorkspaceForm from "@components/Workspace/AddWorkspaceForm/AddWorkspaceForm";
import useNotification from "@hooks/useNotification";
import { createWorkspace } from "@services/api/requests/workspaceApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Drawer } from "antd";
import React from "react";

const AddWorkspace = ({ isOpen, onClose }) => {
     const queryClient = useQueryClient();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     const submitForm = async (values) => await createWorkspace(values);

     const mutation = useMutation({
          mutationFn: submitForm,
          onError: (error) => {
               showErrorMessage(error.message);
          },
          onSuccess: (data) => {
               if (data.status === true) {
                    onClose();
                    queryClient.refetchQueries({ queryKey : ['workspaces'], exact: true });
                    showSuccessMessage(data.message);
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate(values);

     return (
          <Drawer title="Go Back" onClose={onClose} open={isOpen} style={{ background: "#f4f2ee" }} destroyOnClose>
               <AddWorkspaceForm onFinish={onFinish} loading={mutation.isPending} onClose={onClose} />
          </Drawer>
     );
};

export default AddWorkspace;