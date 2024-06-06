import { Button, Checkbox, Flex, Form, Input, Space, Typography } from "antd";
import { Link, Navigate } from "react-router-dom";
import useSitePath from "@hooks/useSitePath";
import LogoHeader from "@components/LogoHeader/LogoHeader";
import { userLogin } from "@services/api/requests/authApi";
import useNotification from "@hooks/useNotification";
import { useMutation } from "@tanstack/react-query";
import { login } from "app/reducers/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => { 
     const getConfigValue = useSitePath();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     const dispatch = useDispatch();
     const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

     const submitForm = async (values) => {
          return await userLogin(values);
     };

     const mutation = useMutation({
          mutationFn: submitForm,
          onError : (error) => {
               showErrorMessage(error.message);
          },
          onSuccess : (data) => {
               if( data.status === true ){
                    showSuccessMessage(data.message); 
                    dispatch(login(data));
               }
               else{
                    showErrorMessage(data.message);
               } 
          }
     });

     const onFinish = (values) => mutation.mutate(values); 

     if (isAuthenticated) {
          return <Navigate to={{ pathname: getConfigValue('DASHBOARD') }} />;
     }

     return (
          <Flex align="center" justify="center" vertical style={{ minHeight: "100vh" }}>
               <Flex>
                    <Space direction="vertical" size="middle" style={{ width: 400 }}>
                         <LogoHeader title={'Login to TaskFusion'}/>
                         
                         <div>
                              <Form name="login-form" layout="vertical" onFinish={onFinish}>
                                   <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[
                                             { required: true, message: "Please input your email!" },
                                             { type: "email", message: "Please enter a valid email address!" },
                                        ]}
                                   >
                                        <Input />
                                   </Form.Item>

                                   <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: "Please input your password!" }]}
                                   >
                                        <Input.Password />
                                   </Form.Item>

                                   <Form.Item name="remember" initialValue={false} valuePropName="checked">
                                        <Flex align="center" justify="space-between">
                                             <Checkbox>Remember me</Checkbox>
                                             <Link to={getConfigValue('RESET_PASSWORD')} className="login-form-forgot">
                                                  Forgot Password
                                             </Link>
                                        </Flex>
                                   </Form.Item>

                                   <Form.Item>
                                        <Button type="primary" block={true} htmlType="submit" loading={mutation.isPending}>
                                             Log in
                                        </Button>
                                   </Form.Item>
                              </Form>

                              <Typography.Paragraph className={"text-center"} style={{ margin: 0 }}>
                                   Not a member? <Link to={getConfigValue('REGISTER')}>Sign Up</Link>
                              </Typography.Paragraph>
                         </div>
                    </Space>
               </Flex>
          </Flex>
     );
};

export default Login;
