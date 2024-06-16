import { Button, Flex, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import useSitePath from "@hooks/useSitePath";
import LogoHeader from "@components/LogoHeader/LogoHeader";
import { getRandomUser, userRegister } from "@services/api/requests/authApi";
import { useMutation } from "@tanstack/react-query";
import useNotification from "@hooks/useNotification";
import { useEffect, useState } from "react";

const Register = () => {
     const getConfigValue = useSitePath();
     const { showSuccessMessage, showErrorMessage } = useNotification();
     const [form] = Form.useForm();

     const submitForm = async (values) => {
          return await userRegister(values);
     };

     const mutation = useMutation({
          mutationFn: submitForm,
          onError: (error) => {
               showErrorMessage(error.message);
          },
          onSuccess: (data) => {
               console.log(data);
               
               if (data.status === true) {
                    showSuccessMessage(data.message);
                    form.resetFields();
                    intiValues()
               } else {
                    showErrorMessage(data.message);
               }
          },
     });

     const onFinish = (values) => mutation.mutate(values);

     const [initVal, setInitVal] = useState({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
     });

     const intiValues = async () => {
          try {
               const response = await getRandomUser();
                
               if( response.status === true ){
                    const { user } = response;
                    setInitVal({
                         firstName: user.name.first,
                         lastName: user.name.last,
                         email: user.email,
                         password: user.email,
                    });  
               }
          } catch (error) {
               console.log(error);     
          }
     }

     useEffect(() => {
          intiValues()
     }, []);

     useEffect(() => {
          form.resetFields()
          // eslint-disable-next-line 
     }, [initVal]) 

     return (
          <Flex align="center" justify="center" vertical style={{ minHeight: "100vh" }}>
               <Flex>
                    <Space direction="vertical" size="middle" style={{ width: 400 }}>
                         <LogoHeader title={"Register on TaskFusion"} />

                         <div>
                              <Form
                                   initialValues={initVal}
                                   name="register-form"
                                   layout="vertical"
                                   onFinish={onFinish}
                                   form={form}
                              >
                                   <Form.Item
                                        label="First Name"
                                        name="firstName"
                                        rules={[{ required: true, message: "Please input your first name!" }]}
                                   >
                                        <Input />
                                   </Form.Item>

                                   <Form.Item
                                        label="Last Name"
                                        name="lastName"
                                        rules={[{ required: true, message: "Please input your last name!" }]}
                                   >
                                        <Input />
                                   </Form.Item>

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

                                   <Form.Item>
                                        <Button
                                             type="primary"
                                             block={true}
                                             htmlType="submit"
                                             loading={mutation.isPending}
                                        >
                                             Register
                                        </Button>
                                   </Form.Item>
                              </Form>

                              <Typography.Paragraph className={"text-center"} style={{ margin: 0 }}>
                                   Already a member? <Link to={getConfigValue("LOGIN")}>Sign In</Link>
                              </Typography.Paragraph>
                         </div>
                    </Space>
               </Flex>
          </Flex>
     );
};

export default Register;
