import UserListDropDown from "@components/UserListDropDown/UserListDropDown";
import useNotification from "@hooks/useNotification"; 
import { updateProjectUserList } from "@services/api/requests/projectApi";
import { getWorkspaceDetailTab } from "@services/api/requests/workspaceApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Drawer, Form } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

const AddUsers = ({ isOpen, onClose, users }) => {
     const [ form ] = Form.useForm();
     const { projectID, workspaceID } = useParams();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     const queryClient = useQueryClient();

     const excludeUserList = (object, excludes) => {
        const notID = excludes.map((item) => item._id);
        const list = object.filter((item) => !notID.includes(item._id));
        return list;
     };

     const { isLoading, error, data, isError } = useQuery({
          queryKey: ["workspaceDetail", workspaceID, "users"],
          queryFn: ({ queryKey }) => getWorkspaceDetailTab(queryKey[1], queryKey[2]),
          retry: false,
          enabled : isOpen
     });

     const submitForm = async (id, values) => {
          return await updateProjectUserList(id, 'users', values);
     };

     const mutation = useMutation({
          mutationFn: ({ id, payload }) => {
               return submitForm(id, payload);
          },
          onError: (error) => {
               showErrorMessage(error.message);
          },
          onSuccess: (data) => { 
               if (data.status === true) {
                    onClose(); 
                    showSuccessMessage(data.message);
                    queryClient.refetchQueries({ queryKey: ["projectInfo"  , workspaceID, projectID], exact: true });
                    queryClient.refetchQueries({ queryKey: ["projectDetail", projectID, "users"], exact: true });
                    form.resetFields();
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate({ id: projectID, payload: values });
     
     return (
          <Drawer title="Add User" onClose={onClose} open={isOpen}>
               <Form layout="vertical" form={form} name="add-project-user" onFinish={onFinish}>
                    <Form.Item
                         name="users"
                         label="Users"
                         rules={[{ required: true, message: "Please select the users!" }]}
                    >
                         <UserListDropDown
                              users={data ? excludeUserList(data.users, users) : []}
                              loading={isLoading}
                              error={error}
                              isError={isError}
                              mode={"multiple"}
                         />
                    </Form.Item>
                    <Button htmlType="submit" type="primary" block loading={mutation.isPending}>
                         Submit
                    </Button>
               </Form>
          </Drawer>
     );
};

export default AddUsers;