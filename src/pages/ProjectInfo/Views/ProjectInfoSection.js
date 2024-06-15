import { Button, Col, Flex, Row, Spin, Typography } from "antd";
import InfoBox from "@components/InfoBox/InfoBox";
import TagInfo from "@components/Project/TagInfo/TagInfo";
import { useParams } from "react-router-dom";
import { getProjectDetail } from "@services/api/requests/projectApi";
import { useQuery } from "@tanstack/react-query";
import SpinLoader from "@components/SpinLoader/SpinLoader";
import moment from "moment";
import { dateFormat } from "@utils/timeDate";
import { useState } from "react";
import AddIssue from "./AddIssue";

const ProjectInfoSection = () => {
     const { workspaceID, projectID } = useParams();
     const [showForm, setShowForm] = useState(false);

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["projectInfo", workspaceID, projectID],
          queryFn: ({ queryKey }) => {
               const [, workspaceId, projectID] = queryKey;
               return getProjectDetail(workspaceId, projectID);
          },
          retry: false,
     });

     if (isLoading === true) {
          return <SpinLoader />;
     }

     if (isError === true) {
          return error.message;
     }

     if (data !== null) {
          const { project } = data;

          const getTaskFilter = (object, key, status) => {
               const result = object.filter((item) => item[key] === status);
               return result.length;
          };

          return (
               <>
                    <Spin spinning={isRefetching}>
                         <Row gutter={20}>
                              <Col span={4}>
                                   <div className="project-avatar"></div>
                              </Col>
                              <Col span={20}>
                                   <Row gutter={[15, 15]}>
                                        <Col span={24}>
                                             <Row gutter={20}>
                                                  <Col span={16}>
                                                       <div className="project-info">
                                                            <Typography.Title level={4} style={{ margin: 0 }}>
                                                                 <Flex align="center" gap={10}>
                                                                      {project.name} <TagInfo text={project.status} />
                                                                 </Flex>
                                                            </Typography.Title>
                                                            <Typography.Paragraph style={{ margin: 0 }}>
                                                                 {project.category}
                                                            </Typography.Paragraph>
                                                       </div>
                                                  </Col>
                                                  <Col span={8}>
                                                       <Flex justify="flex-end" gap={15}>
                                                            <Button type="secondary">Add User</Button>
                                                            <Button onClick={() => setShowForm(true)} type="primary">
                                                                 Add Task
                                                            </Button>
                                                       </Flex>
                                                  </Col>
                                             </Row>
                                        </Col>
                                        <Col span={24}>
                                             <Row gutter={[20, 20]}>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Created At"}
                                                            heading={moment(project.createdAt).format(dateFormat)}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Last Update"}
                                                            heading={moment(project.updatedAt).format(dateFormat)}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Total Task"}
                                                            heading={project.tasks.length}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"User Assigned"}
                                                            heading={project.users.length}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Active Task"}
                                                            heading={getTaskFilter(
                                                                 project.tasks,
                                                                 "status",
                                                                 "In Progress"
                                                            )}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Completed Task"}
                                                            heading={getTaskFilter(project.tasks, "status", "Done")}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Yet to start"}
                                                            heading={getTaskFilter(project.tasks, "status", "To Do")}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"All Issues"}
                                                            heading={getTaskFilter(project.tasks, "type", "Bug")}
                                                       />
                                                  </Col>
                                             </Row>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </Spin>

                    <AddIssue isOpen={showForm} onClose={() => setShowForm(false)} />
               </>
          );
     }
};

export default ProjectInfoSection;