import { sitePathConfig } from "@config/sitePathConfig";
import { Breadcrumb, Flex, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title, action }) => {
     return (
          <Flex justify={"space-between"} align={"center"} style={{ marginBottom: 20 }}>
               <div className="page-header">
                    <Typography.Title level={3} style={{ margin: '0 0 3px', fontSize: 17 }}>
                         {title}
                    </Typography.Title>

                    <Breadcrumb items={[{ title: "Home" }, { title: <Link to={sitePathConfig.DASHBOARD}>Dashboard</Link> }, { title: "An Application" }]} />
               </div>
               <div className="page-action">{action}</div>
          </Flex>
     );
};

export default React.memo(PageHeader);