import UserListDropDown from "@components/UserListDropDown/UserListDropDown";
import { usersList } from "@services/api/requests/authApi";
import { useQuery } from "@tanstack/react-query";
import { Flex, Button, Typography, Form, Input, Row, Col } from "antd";
import { useState } from "react"; 
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useParams } from "react-router-dom";

const AddProjectForm = ({ onClose, onFinish, loading }) => {
     const [showMore, setShowMore] = useState(false);
     const { workspaceID } = useParams();

     const { isLoading, error, data, isError } = useQuery({
          queryKey: ["users", workspaceID],
          queryFn: ({ queryKey }) => usersList(queryKey[1]),
          retry: false,
     });

     return (
          <>
               <Typography.Title level={4} style={{ margin: 0, marginBottom: 5 }}>
                    Create Project
               </Typography.Title>

               <Typography.Paragraph style={{ fontSize: 12 }}>
                    Explore what's possible when you collaborate with your team. Edit project details anytime in project
                    settings.
               </Typography.Paragraph>

               <Form name="add-project" onFinish={onFinish} layout="vertical" style={{ paddingTop: 5 }}>
                    <Form.Item
                         name="name"
                         label="Name"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input project name!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>
                    <Form.Item
                         name="category"
                         label="Category"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input project category!",
                              },
                         ]}
                    >
                         <Input />
                    </Form.Item>

                    {showMore === true ? (
                         <>
                              <Form.Item name="users" label="Users">
                                   <UserListDropDown
                                        users={data ? data.users : []}
                                        loading={isLoading}
                                        error={error}
                                        isError={isError}
                                        mode="multiple"
                                   />
                              </Form.Item>
                         </>
                    ) : null}

                    <div>
                         <Typography.Paragraph>
                              <Flex
                                   gap={10}
                                   align="center"
                                   onClick={() => setShowMore((prev) => !prev)}
                                   style={{ cursor: "pointer" }}
                              >
                                   {showMore === false ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                   Show More
                              </Flex>
                         </Typography.Paragraph>
                    </div>

                    <Form.Item>
                         <Row gutter={15}>
                              <Col span={12}>
                                   <Button type="default" block={true} onClick={onClose}>
                                        Cancel
                                   </Button>
                              </Col>
                              <Col span={12}>
                                   <Button block={true} type="primary" htmlType="submit" loading={loading}>
                                        Create Project
                                   </Button>
                              </Col>
                         </Row>
                    </Form.Item>
               </Form>
          </>
     );
};

export default AddProjectForm;