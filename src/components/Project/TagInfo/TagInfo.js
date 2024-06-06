import { Tag } from "antd";

const TagInfo = ({ text }) => {
     const colorInfo = {
          "To Do": "#6554C0",
          "Done": "#36B37E",
          "Backlog": "#FF5630",
          "In Progress": "#FFAB00",
     };

     return (
          <Tag style={{ color: "#fff", background: colorInfo[text] }} bordered={false}>
               {text}
          </Tag>
     );
};

export default TagInfo;