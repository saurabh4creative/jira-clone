import { Button, Flex, Form, Input, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import useSitePath from "@hooks/useSitePath";

const ResetPassword = () => {
     
     const getConfigValue = useSitePath();

     const onFinish = (values) => {
          console.log(values)
     }

     return (
          <Flex align="center" justify="center" vertical style={{ minHeight: "100vh" }}>
               <Flex>
                    <Space direction="vertical" size="middle" style={{ width: 400 }}>
                         
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
 

                                   <Form.Item>
                                        <Button type="primary" block={true} htmlType="submit">
                                             Reset Password
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

export default ResetPassword;