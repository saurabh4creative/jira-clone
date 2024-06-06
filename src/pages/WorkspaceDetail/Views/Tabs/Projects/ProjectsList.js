import SpinLoader from "@components/SpinLoader/SpinLoader";
import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { sitePaths } from "@config/sitePathConfig";
import { getWorkspaceDetailTab } from "@services/api/requests/workspaceApi";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Col, Flex, Input, Row } from "antd";
import moment from "moment";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import AddForm from "./AddForm";

const ProjectsList = () => {
     const { workspaceID } = useParams();

     const columns = [
          {
               title: "#",
               width: 100,
               dataIndex: "_id",
               key: "_id",
               // render: (_, __, index) => index + 1,
               fixed: "left",
          },
          {
               title: "Name",
               dataIndex: "name",
               key: "name",
               width: 300,
               render: (text, record) => (
                    <Link
                         className="text-decoration-none text-dark d-flex gap-2 align-items-center"
                         to={`${sitePaths.WORKSPACE_DETAIL}/${workspaceID}${sitePaths.PROJECT_DETAIL}/${record._id}`}
                    >
                         {text}
                    </Link>
               ),
          },
          {
               title: "Status",
               dataIndex: "status",
               key: "status",
               width: 250,
          },
          {
               title: "Category",
               dataIndex: "category",
               key: "category",
               width: 250,
          },
          {
               title: "Users",
               dataIndex: "users",
               key: "users",
               width: 200,
               render: (text) => (
                    <Avatar.Group>
                         {text.map((user, index) => (
                              <UserAvatar key={index} info={user} />
                         ))}
                    </Avatar.Group>
               ),
          },
          {
               title: "Created",
               dataIndex: "createdAt",
               key: "createdAt",
               width: 170,
               render: (text) => (text ? moment.utc(text, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ll") : null),
          },
          {
               title: "Updated",
               dataIndex: "updatedAt",
               key: "updatedAt",
               width: 170,
               render: (text) => (text ? moment.utc(text, "YYYY-MM-DDTHH:mm:ss.SSSZ").format("ll") : null),
          },
          {
               title: "Author",
               dataIndex: "author",
               key: "author",
               width: 200,
               render: (text) => <UserAvatar info={text} showname={true} />,
          },
     ];

     const [isOpen, setIsOpen] = useState(false);

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["workspaceDetail", workspaceID, "projects"],
          queryFn: ({ queryKey }) => getWorkspaceDetailTab(queryKey[1], queryKey[2]),
          retry: false,
     });

     if (isLoading === true) {
          return <SpinLoader />;
     }

     if (isError === true) {
          return error.message;
     }

     if (data !== null) {
          const { projects } = data;

          return (
               <>
                    <Row gutter={[20, 20]}>
                         <Col span={24}>
                              <Flex justify="space-between">
                                   <div>
                                        <Input placeholder="Search Project" style={{ width: 250 }} />
                                   </div>
                                   <div>
                                        <Button onClick={() => setIsOpen(true)} type="primary">
                                             Add Project
                                        </Button>
                                   </div>
                              </Flex>
                         </Col>
                         <Col span={24}>
                              <TableView
                                   dataSource={projects}
                                   columns={columns}
                                   tableLayout={"fixed"}
                                   scroll={{
                                        x: 1300,
                                   }}
                                   rowKey={"_id"}
                                   loading={isRefetching}
                              />
                         </Col>
                    </Row>

                    <AddForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
               </>
          );
     }
};

export default ProjectsList;