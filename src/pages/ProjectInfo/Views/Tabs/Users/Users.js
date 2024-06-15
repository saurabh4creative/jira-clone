import SpinLoader from "@components/SpinLoader/SpinLoader";
import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import UserTypeGroup from "@components/UserType/UserTypeGroup";
import { getProjectIssueList } from "@services/api/requests/projectApi";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Flex, Row, Spin, Input } from "antd";  
import { useParams } from "react-router-dom";
import AddUsers from "./AddUsers";
import { useState } from "react";

const Users = () => {
     const { projectID } = useParams();
     const [ isOpen, setIsOpen ] = useState(false);

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["projectDetail", projectID, "users"],
          queryFn: ({ queryKey }) => getProjectIssueList(queryKey[1], queryKey[2]),
          retry: false,
     });

     if (isLoading === true) {
          return <SpinLoader />;
     }

     if (isError === true) {
          return error.message;
     }

     if (data !== null) {
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
                    title: "Type",
                    dataIndex: "type",
                    key: "type",
                    render: (text) => <UserTypeGroup data={text} />,
               },
               {
                    title: "Email",
                    dataIndex: "email",
                    key: "email",
               },
          ];

          const { users } = data;

          return (
               <>
                    <Row gutter={[20, 20]}>
                         <Col span={24}>
                              <Flex justify="space-between">
                                   <div>
                                        <Input placeholder="Search User" style={{ width: 250 }} />
                                   </div>
                                   <div>
                                        <Button type="primary" onClick={() => setIsOpen(true)}>
                                             Add User
                                        </Button>
                                   </div>
                              </Flex>
                         </Col>
                         <Col span={24}>
                              <Spin spinning={isRefetching}>
                                   <TableView
                                        dataSource={users}
                                        columns={columns}
                                        tableLayout={"fixed"}
                                        scroll={{
                                             x: 1300,
                                        }}
                                        rowKey={"_id"}
                                        bordered
                                   />
                              </Spin>
                         </Col>
                    </Row>

                    <AddUsers isOpen={isOpen} onClose={() => setIsOpen(false)} users={users} />
               </>
          );
     }
};

export default Users;