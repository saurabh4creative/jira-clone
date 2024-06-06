import { Col, Flex, Input, Row, Spin } from "antd";
import TableView from "@components/TableInfo/TableView/TableView";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { sitePaths } from "@config/sitePathConfig";
import UserAvatarGroup from "@components/UserAvatar/UserAvatarGroup";
import DateFormat from "@components/DateFormat/DateFormat";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { getWorkspaceList } from "@services/api/requests/workspaceApi";
import { useQuery } from "@tanstack/react-query";
import { IoSearchOutline } from "react-icons/io5";

const WorkspaceList = () => {
     const columns = [
          {
               title: "#",
               width: 100,
               key: "_id",
               dataIndex: "_id",
               // render: (_, __, index) => index + 1,
          },
          {
               title: "Name",
               dataIndex: "name",
               key: "name",
               width: 300,
               render: (text, record) => <Link to={`${sitePaths.WORKSPACE_DETAIL}/${record._id}`}>{text}</Link>,
          },
          {
               title: "Users",
               dataIndex: "users",
               key: "users",
               width: 200,
               render: (text) => <UserAvatarGroup group={text} />,
          },
          {
               title: "Created",
               dataIndex: "createdAt",
               key: "createdAt",
               width: 170,
               render: (text) => (text ? <DateFormat text={text} /> : null),
          },
          {
               title: "Updated",
               dataIndex: "updatedAt",
               key: "updatedAt",
               width: 170,
               render: (text) => (text ? <DateFormat text={text} /> : null),
          },
          {
               title: "Author",
               dataIndex: "author",
               key: "author",
               width: 200,
               render: (text) => <UserAvatar info={text} showname={true} />,
          },
          {
               title: "Action",
               dataIndex: "action",
               key: "action",
               width: 180,
          },
     ];

     const [dataSource, setDataSource] = useState([]);

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["workspaces"],
          queryFn: getWorkspaceList,
          retry: false,
     });

     const handleSearch = (value) => {};

     useEffect(() => {
          if (data && data.workspaces) {
               setDataSource(data.workspaces);
          }
     }, [data]);

     if (isLoading === false && isError) {
          return error.message;
     }

     return (
          <Spin spinning={isRefetching}>
               <Row gutter={[20, 20]}>
                    <Col span={24}>
                         <Row gutter={20}>
                              <Col span={5}>
                                   <Input
                                        placeholder="Search Workspace"
                                        prefix={<IoSearchOutline size={15} color="gray" />}
                                        onChange={(e) => handleSearch(e.target.value)}
                                   />
                              </Col>

                              <Col span={19}>
                                   <Flex justify="flex-end"></Flex>
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
          </Spin>
     );
};

export default WorkspaceList;