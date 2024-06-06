import { Button, Drawer, Form } from "antd";
import UserListDropDown from "@components/UserListDropDown/UserListDropDown";
import useNotification from "@hooks/useNotification";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { usersList } from "@services/api/requests/authApi";
import { updateWorkspaceDetail } from "@services/api/requests/workspaceApi";
import { useParams } from "react-router-dom";

const UserModify = ({ isOpen, onClose, users }) => {
     const { workspaceID } = useParams();
     const [form] = Form.useForm();
     const queryClient = useQueryClient();
     const { showSuccessMessage, showErrorMessage } = useNotification();

     const { isLoading, error, data, isError } = useQuery({
          queryKey: ["users"],
          queryFn: () => usersList(),
          retry: false,
          enabled : isOpen
     });

     const excludeUserList = (object, excludes) => {
          const notID = excludes.map((item) => item._id);
          const list = object.filter((item) => !notID.includes(item._id));
          return list;
     };

     const submitForm = async (id, values) => {
          return await updateWorkspaceDetail(id, values);
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
                    queryClient.refetchQueries({ queryKey: ["workspaceDetail", workspaceID], exact: true });
                    queryClient.refetchQueries({ queryKey: ["workspaceDetail", workspaceID, 'users'], exact: true });
                    showSuccessMessage(data.message);
                    form.resetFields();
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate({ id: workspaceID, payload: values });

     return (
          <Drawer title="Add User" onClose={onClose} open={isOpen}>
               <Form layout="vertical" form={form} name="add-workspace-user" onFinish={onFinish}>
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
                         />
                    </Form.Item>
                    <Button htmlType="submit" type="primary" block loading={mutation.isPending}>
                         Submit
                    </Button>
               </Form>
          </Drawer>
     );
};

export default UserModify;
