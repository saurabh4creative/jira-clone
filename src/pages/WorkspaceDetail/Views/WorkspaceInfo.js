import InfoBox from "@components/InfoBox/InfoBox";
import PageContent from "@components/PageContent/PageContent";
import SpinLoader from "@components/SpinLoader/SpinLoader";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import UserAvatarGroup from "@components/UserAvatar/UserAvatarGroup";
import { getWorkspaceDetail } from "@services/api/requests/workspaceApi";
import { useQuery } from "@tanstack/react-query";
import { dateFormat } from "@utils/timeDate";
import { Button, Col, Flex, Row, Spin, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useParams } from "react-router-dom";

const WorkspaceInfo = () => {
     const { workspaceID } = useParams();

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["workspaceDetail", workspaceID],
          queryFn: ({ queryKey }) => getWorkspaceDetail(queryKey[1]),
          retry: false,
     });

     if (isLoading === true) {
          return <SpinLoader />;
     }

     if (isError === true) {
          return error.message;
     }

     if (data !== null) {
          const { workspace } = data;

          return (
               <Spin spinning={isRefetching}>
                    <PageContent>
                         <Row gutter={20}>
                              <Col span={4}></Col>
                              <Col span={20}>
                                   <Row gutter={[15, 15]}>
                                        <Col span={24}>
                                             <Row gutter={20}>
                                                  <Col span={16}>
                                                       <div className="workspace-info">
                                                            <Typography.Title level={4} style={{ margin: 0 }}>
                                                                 {workspace.name}
                                                            </Typography.Title>
                                                            <Typography.Paragraph style={{ margin: 0 }}>
                                                                 {workspace.description}
                                                            </Typography.Paragraph>
                                                       </div>
                                                  </Col>
                                                  <Col span={8}>
                                                       <Flex justify="flex-end" gap={15}>
                                                            <Button type="dashed">Edit Workspace</Button>
                                                       </Flex>
                                                  </Col>
                                             </Row>
                                        </Col>
                                        <Col span={24}>
                                             <Row gutter={[15, 15]}>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Created At"}
                                                            heading={moment(workspace.createdAt).format(dateFormat)}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Last Update"}
                                                            heading={moment(workspace.updatedAt).format(dateFormat)}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"Projects Assigned"}
                                                            heading={workspace.projects}
                                                       />
                                                  </Col>
                                                  <Col span={6}>
                                                       <InfoBox
                                                            description={"User Assigned"}
                                                            heading={workspace?.users?.length}
                                                       />
                                                  </Col>
                                             </Row>
                                        </Col>
                                        <Col span={24}>
                                             <Row gutter={20}>
                                                  <Col span={12}>
                                                       <Flex gap={10} align="center">
                                                            <Typography.Text className="fw-600">
                                                                 Created By:
                                                            </Typography.Text>
                                                            <div>
                                                                 <UserAvatar info={workspace.author} showname={true} />
                                                            </div>
                                                       </Flex>
                                                  </Col>
                                                  <Col span={12}>
                                                       <Flex justify="end" gap={10} align="center">
                                                            <Typography.Text className="fw-600">Users:</Typography.Text>
                                                            <div>
                                                                 <UserAvatarGroup group={workspace.users} />
                                                            </div>
                                                       </Flex>
                                                  </Col>
                                             </Row>
                                        </Col>
                                   </Row>
                              </Col>
                         </Row>
                    </PageContent>
               </Spin>
          );
     }
};

export default WorkspaceInfo;