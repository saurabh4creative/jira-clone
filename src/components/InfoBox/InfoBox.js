import { Typography } from "antd";
import "./InfoBox.scss";

const InfoBox = ({ heading, description }) => {
     return (
          <div className="InfoBox">
               <Typography.Title level={4} style={{ margin: 0 }}>
                    {heading}
               </Typography.Title>
               <Typography.Text style={{ color: "#99A1B7" }}>{description}</Typography.Text>
          </div>
     );
};

export default InfoBox;