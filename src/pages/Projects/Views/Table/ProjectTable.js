import moment from "moment";
import TableHeaderIcon from "@components/TableInfo/TableHeaderIcon/TableHeaderIcon";
import UserAvatar from "@components/UserAvatar/UserAvatar";
import { VscListSelection } from "react-icons/vsc";
import { IoArrowForwardCircleOutline } from "react-icons/io5"; 
import { Avatar, Progress } from "antd";
import { Link, useParams } from "react-router-dom";
import TableView from "@components/TableInfo/TableView/TableView";
import { sitePaths } from "@config/sitePathConfig";

const ProjectTable = ({ dataSource }) => {
     const { workspaceID } = useParams();

     const columns = [
          {
               title: '#',
               width: 100,
               render: (_, __, index) => index + 1,
               fixed: "left",
          },
          {
               title: <TableHeaderIcon title={"Name"} icon={<VscListSelection />} />,
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
               title: <TableHeaderIcon title={"Status"} icon={<IoArrowForwardCircleOutline />} />,
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
               title: "Progress",
               dataIndex: "progress",
               key: "progress",
               width: 250,
               render: () => (
                    <div className="w-100">
                         <Progress percent={50} showInfo={false} strokeColor="#42526E" />
                    </div>
               ),
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
          {
               title: "Action",
               dataIndex: "action",
               key: "action",
               width: 180,
          },
     ];

     return (
          <TableView
               dataSource={dataSource}
               columns={columns}
               tableLayout={"fixed"}
               scroll={{
                    x: 1300,
               }}
               rowKey={"_id"}
          />
     );
};

export default ProjectTable;
