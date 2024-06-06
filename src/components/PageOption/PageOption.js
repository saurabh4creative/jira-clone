import { Flex } from "antd";
import "./PageOption.scss";

const PageOption = ({ children }) => {
     return (
          <Flex gap={15} vertical className={"page-option"}>
               <Flex justify={"space-between"} align="center" className="bg-white-option">
                    {children}
               </Flex>
          </Flex>
     );
};

export default PageOption;