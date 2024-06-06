import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { getAllUserList } from "@services/api/requests/authApi";
import { useQuery } from "@tanstack/react-query";
import { Button, Col, Flex, Input, Row } from "antd";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaFilter } from "react-icons/fa";
import CustomIcon from "@components/CustomIcon/CustomIcon";

const UserList = () => {
     const columns = [
          {
               title: "#",
               width: 80,
               dataIndex: "_id",
               key: "_id",
               // render: (_, __, index) => index + 1,
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
               title: "Workspace",
               dataIndex: "workspace",
               key: "workspace",
          },
          {
               title: "Task",
               dataIndex: "task",
               key: "task",
          },
          {
               title: "Project",
               dataIndex: "project",
               key: "project",
          },
          {
               title: "Role",
               dataIndex: "role",
               key: "role",
          },
     ];

     const [dataSource, setDataSource] = useState([]);

     const { isLoading, error, data, isError } = useQuery({
          queryKey: ["users"],
          queryFn: getAllUserList,
          retry: false,
     });

     useEffect(() => {
          if (data && data.users) {
               setDataSource(data.users);
          }
     }, [data]);

     const handleSearch = (value) => {
          const filtered = data?.users?.filter(
               (user) =>
                    user.firstName.toLowerCase().includes(value.toLowerCase()) ||
                    user.lastName.toLowerCase().includes(value.toLowerCase()) ||
                    user.email.toLowerCase().includes(value.toLowerCase())
          );
          setDataSource(filtered);
     };

     if (isLoading === false && isError) {
          return error.message;
     }

     return (
          <>
               <Row gutter={[20, 20]}>
                    <Col span={24}>
                         <Row gutter={20}>
                              <Col span={5}>
                                   <Input
                                        placeholder="Search User"
                                        prefix={<IoSearchOutline size={15} color="gray" />}
                                        onChange={(e) => handleSearch(e.target.value)}
                                   />
                              </Col>

                              <Col span={19}>
                                   <Flex justify="flex-end">
                                        <Button type="primary" icon={<CustomIcon icon={FaFilter} />}>
                                             Filter
                                        </Button>
                                   </Flex>
                              </Col>
                         </Row>
                    </Col>

                    <Col span={24}>
                         <TableView
                              dataSource={dataSource}
                              columns={columns}
                              rowKey={"_id"}
                              bordered={true}
                              loading={isLoading}
                         />
                    </Col>
               </Row>
          </>
     );
};

export default UserList;
