import DateValue from "@components/DateValue/DateValue";
import TableHeaderIcon from "@components/TableInfo/TableHeaderIcon/TableHeaderIcon";
import TableView from "@components/TableInfo/TableView/TableView";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { KeyIcon, SummaryIcon, StatusIcon, AssigneeIcon, CalenderIcon, PriorityIcon } from "@icons/task/taskIcons";

const TaskTable = ({ dataSource }) => {
     const columns = [
          {
               title: "Type",
               dataIndex: "type",
               key: "type",
               width: 120,
          },
          {
               title: <TableHeaderIcon title={"Key"} icon={<KeyIcon />} />,
               dataIndex: "project",
               key: "project",
               width: 190,
               render: (obj) => obj.name,
          },
          {
               title: <TableHeaderIcon title={"Key"} icon={<KeyIcon />} />,
               dataIndex: "key",
               key: "key",
               width: 130,
          },
          {
               title: <TableHeaderIcon title={"Summary"} icon={<SummaryIcon />} />,
               dataIndex: "summary",
               key: "summary",
               width: 500,
          },
          {
               title: <TableHeaderIcon title={"Status"} icon={<StatusIcon />} />,
               dataIndex: "status",
               key: "status",
               width: 130,
          },
          {
               title: <TableHeaderIcon title={"Priority"} icon={<PriorityIcon />} />,
               dataIndex: "priority",
               key: "priority",
               width: 130,
          },
          {
               title: <TableHeaderIcon title={"Assignee"} icon={<AssigneeIcon />} />,
               dataIndex: "assignee",
               key: "assignee",
               render: (text) => <UserAvatar info={text} showname={true} />,
               width: 200,
          },
          {
               title: <TableHeaderIcon title={"Reporter"} icon={<AssigneeIcon />} />,
               dataIndex: "reporter",
               key: "reporter",
               render: (text) => <UserAvatar info={text} showname={true} />,
               width: 200,
          },
          {
               title: <TableHeaderIcon title={"Created"} icon={<CalenderIcon />} />,
               dataIndex: "createdAt",
               key: "createdAt",
               render: (text) => <DateValue date={text} />,
               width: 200,
          },
          {
               title: <TableHeaderIcon title={"Updated"} icon={<CalenderIcon />} />,
               dataIndex: "updatedAt",
               key: "updatedAt",
               render: (text) => <DateValue date={text} />,
               width: 200,
          },
     ];

     return (
          <TableView
               dataSource={dataSource}
               columns={columns}
               tableLayout={"fixed"}
               scroll={{
                    x: 1100,
               }}
               rowKey={"_id"}
          />
     );
};

export default TaskTable;
