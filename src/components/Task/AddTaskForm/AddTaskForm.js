import ProjectListDropdown from "@components/ProjectListDropdown/ProjectListDropdown";
import UserListDropDown from "@components/UserListDropDown/UserListDropDown";
import { getProjectIssueList } from "@services/api/requests/projectApi";
import { getWorkspaceDetailTab } from "@services/api/requests/workspaceApi";
import { useQuery } from "@tanstack/react-query";
import { issue_priority, issue_status, issue_types } from "@utils/issueData";
import { Button, Typography, Form, Input, Row, Col, Select } from "antd";

const AddTaskForm = ({ onFinish, loading, onClose, workspaceID, projectID }) => {
     const {
          data: projectData,
          isLoading: projectLoading,
          isError: projectIsError,
          error: projectError,
     } = useQuery({
          queryKey: ["projectList", workspaceID, "projects"],
          queryFn: ({ queryKey }) => getWorkspaceDetailTab(queryKey[1], queryKey[2]),
          retry: false,
     });

     const {
          data: userData,
          isLoading: userLoading,
          isError: userIsError,
          error: userError,
     } = useQuery({
          queryKey: ["projectDetail", projectID, "users"],
          queryFn: ({ queryKey }) => getProjectIssueList(queryKey[1], queryKey[2]),
          retry: false,
     });

     return (
          <div>
               <Typography.Title level={4} style={{ margin: 0, marginBottom: 5 }}>
                    Add Task
               </Typography.Title>

               <Typography.Paragraph style={{ fontSize: 12 }}>
                    Explore what's possible when you collaborate with your team. Edit project details anytime in project
                    settings.
               </Typography.Paragraph>

               <Form
                    name="add-task"
                    onFinish={onFinish}
                    layout="vertical"
                    style={{ paddingTop: 5 }} 
               >
                    <Form.Item
                         label="Project"
                         name="project"
                         rules={[
                              {
                                   required: true,
                                   message: "Please select a project!",
                              },
                         ]}
                         initialValue={projectID}
                    >
                         <ProjectListDropdown
                              projects={projectData ? projectData.projects : []}
                              loading={projectLoading}
                              error={projectError}
                              isError={projectIsError}
                              disabled={projectID ? true : false} 
                         />
                    </Form.Item>

                    <Form.Item
                         label="Issue Type"
                         name="type"
                         rules={[
                              {
                                   required: true,
                                   message: "Please select an issue type!",
                              },
                         ]}
                    >
                         <Select options={issue_types} placeholder={"Select Issue Type"} />
                    </Form.Item>

                    <Form.Item
                         label="Status"
                         name="status"
                         rules={[
                              {
                                   required: true,
                                   message: "Please select a status!",
                              },
                         ]}
                    >
                         <Select placeholder="Select a status" options={issue_status} />
                    </Form.Item>

                    <Form.Item
                         label="Summary"
                         name="summary"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input a summary!",
                              },
                         ]}
                    >
                         <Input placeholder="Summary" />
                    </Form.Item>

                    <Form.Item
                         label="Description"
                         name="description"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input a description!",
                              },
                         ]}
                    >
                         <Input.TextArea placeholder="Description" />
                    </Form.Item>

                    <Form.Item
                         label="Assignee"
                         name="assignee"
                         rules={[
                              {
                                   required: true,
                                   message: "Please input an assignee!",
                              },
                         ]}
                    >
                         <UserListDropDown
                              users={userData ? userData.users : []}
                              loading={userLoading}
                              error={userError}
                              isError={userIsError}
                         />
                    </Form.Item>

                    <Form.Item label="Priority" name="priority">
                         <Select placeholder="Select an issue type" options={issue_priority} />
                    </Form.Item>

                    <Form.Item label="Sprint" name="sprint">
                         <Input placeholder="Sprint" />
                    </Form.Item>

                    <Form.Item label="Original Estimate" name="original_estimate">
                         <Input placeholder="Original Estimate" />
                    </Form.Item>

                    <Form.Item>
                         <Row gutter={15}>
                              <Col span={12}>
                                   <Button type="default" block={true} onClick={onClose}>
                                        Cancel
                                   </Button>
                              </Col>
                              <Col span={12}>
                                   <Button block={true} type="primary" htmlType="submit" loading={loading}>
                                        Create
                                   </Button>
                              </Col>
                         </Row>
                    </Form.Item>
               </Form>
          </div>
     );
};

export default AddTaskForm;
