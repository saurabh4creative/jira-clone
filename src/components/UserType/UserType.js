import { Tag } from "antd";

const UserType = ({ data }) => {
     const color = {
        "Author" : "purple",
        "User" : "orange"
     }
     return (
          <Tag bordered={false} color={color[data] ? color[data] : ''}>
               {data}
          </Tag>
     );
};

export default UserType;