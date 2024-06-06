import SpinLoader from "@components/SpinLoader/SpinLoader";
import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { getWorkspaceDetailTab } from "@services/api/requests/workspaceApi";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Flex, Input, Row } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UserModify from "./UserModify";

const UserList = () => {
     const { workspaceID } = useParams();

     const columns = [
          {
               title: "#",
               width: 100,
               dataIndex: "_id",
               key: "_id",
          },
          {
               title: "User",
               dataIndex: "user",
               key: "user",
               render: (_, record) => <UserAvatar info={record} hideTooltip={true} showname={true} />,
          },
          {
               title: "Email",
               dataIndex: "email",
               key: "email",
          },
          {
               title: "Project Assigned",
               dataIndex: "projects",
               key: "projects",
          },
          {
               title: "Project Owners",
               dataIndex: "author",
               key: "author",
          },
          {
               title: "Task",
               dataIndex: "task",
               key: "task",
          },
     ];

     const [isOpen, setIsOpen] = useState(false);

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["workspaceDetail", workspaceID, "users"],
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
          const { users } = data;

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
                                             Add User
                                        </Button>
                                   </div>
                              </Flex>
                         </Col>
                         <Col span={24}>
                              <TableView
                                   dataSource={users}
                                   columns={columns}
                                   rowKey={"_id"}
                                   bordered={true}
                                   loading={isRefetching}
                              />
                         </Col>
                    </Row>

                    <UserModify isOpen={isOpen} onClose={() => setIsOpen(false)} users={users} />
               </>
          );
     }
};

export default UserList;