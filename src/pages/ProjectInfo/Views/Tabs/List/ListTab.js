import DateValue from "@components/DateValue/DateValue";
import SpinLoader from "@components/SpinLoader/SpinLoader";
import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { getProjectIssueList } from "@services/api/requests/projectApi";
import { useQuery } from "@tanstack/react-query";
import { Spin } from "antd";
import { useParams } from "react-router-dom";

const ListTab = () => {
     const { projectID } = useParams();

     const { isLoading, error, data, isError, isRefetching } = useQuery({
          queryKey: ["projectDetail", projectID, "lists"],
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
                    title: "ID",
                    dataIndex: "_id",
                    key: "_id",
                    width : 100
               },
               {
                    title: "Type",
                    dataIndex: "type",
                    key: "type",
                    width : 120
               },
               {
                    title: "Summary",
                    dataIndex: "summary",
                    key: "summary",
                    width : 400
               },
               {
                    title: "Status",
                    dataIndex: "status",
                    key: "status",
                    width : 200
               },
               {
                    title: "Priority",
                    dataIndex: "priority",
                    key: "priority",
                    width : 200
               },
               {
                    title: "Assignee",
                    dataIndex: "assignee",
                    key: "assignee",
                    width : 200,
                    render: (info) => <UserAvatar info={info} showname={true} />,
               },
               {
                    title: "Reporter",
                    dataIndex: "reporter",
                    width : 200,
                    render: (info) => <UserAvatar info={info} showname={true} />,
               }, 
               {
                    title: "Created At",
                    dataIndex: "createdAt",
                    key: "createdAt",
                    render: (text) => (text ? <DateValue date={text} /> : null),
                    width : 200
               },
               {
                    title: "Updated At",
                    dataIndex: "updatedAt",
                    key: "updatedAt",
                    render: (text) => (text ? <DateValue date={text} /> : null),
                    width : 200
               },
          ];

          return (
               <Spin spinning={isRefetching}>
                    <TableView
                         dataSource={data.tasks}
                         columns={columns}
                         tableLayout={"fixed"}
                         scroll={{
                              x: 1300,
                         }}
                         rowKey={"_id"}
                         bordered
                    />
               </Spin>
          );
     }
};

export default ListTab;