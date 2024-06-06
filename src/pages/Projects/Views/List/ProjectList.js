import { Card, Col, Flex, Row, Space, Typography } from "antd";
import "./ProjectList.scss";
import TagInfo from "@components/Project/TagInfo/TagInfo";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import UserAvatarGroup from "@components/UserAvatar/UserAvatarGroup";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProjectList = ({ dataSource }) => {
     return (
          <Row gutter={[15, 15]} className={"projectList"}>
               {dataSource.map((item) => {
                    return (
                         <Col key={item._id} data-item={item._id} span={6}>
                              <Card title={item.name} extra={<BsThreeDotsVertical />}>
                                   <Space direction="vertical" size={12}>
                                        <TagInfo text={item.status} />

                                        <div>
                                             <Typography.Paragraph
                                                  style={{ fontSize: 12, color: "#333", margin: "0 0 8px" }}
                                             >
                                                  {item.category}
                                             </Typography.Paragraph>

                                             <Typography.Paragraph style={{ fontSize: 12, color: "gray", margin: 0 }}>
                                                  Adipisicing eu magna velit est exercitation et consequat Lorem laboris
                                                  nulla. Laborum exercitation...
                                             </Typography.Paragraph>
                                        </div>
                                   </Space>

                                   <div className="author-info">
                                        <Flex align="center" justify="space-between">
                                             <div>
                                                  <UserAvatar info={item.author} />
                                             </div>
                                             <div>
                                                  <UserAvatarGroup group={item.users} />
                                             </div>
                                        </Flex>
                                   </div>
                              </Card>
                         </Col>
                    );
               })}
          </Row>
     );
};

export default ProjectList;