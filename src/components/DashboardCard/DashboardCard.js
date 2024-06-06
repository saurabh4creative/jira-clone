import { Card } from "antd"; 

const DashboardCard = ({ title, children }) => {
     return (
          <Card title={title} bordered={false}>
               {children}
          </Card>
     );
};

export default DashboardCard;