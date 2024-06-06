import { Typography, Flex } from "antd";

const LogoHeader = ({ title }) => {
     return (
          <>
               <Flex vertical align="center" gap={10}>
                    <img
                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                         alt="TaskFusion"
                         height={50}
                    />
                    {title ? (
                         <Typography.Title level={4} style={{ margin: 0 }} className={"fw-600"}>
                              {title}
                         </Typography.Title>
                    ) : null}
               </Flex>
          </>
     );
};

export default LogoHeader;