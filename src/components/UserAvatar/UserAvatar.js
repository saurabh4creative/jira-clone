import { Tooltip } from "antd";
import Avvvatars from "avvvatars-react";
import "./UserAvatar.scss"; 

const UserAvatar = ({ info, showname, size, hideTooltip }) => {
     if (info) {
          const { email, firstName, lastName } = info;
          const displayValue = `${firstName.charAt(0)}${lastName.charAt(0)}`;

          return hideTooltip === true ? (
               <span>
                    <div className={showname === true ? "flex-box" : "block-box"}>
                         <span>
                              <Avvvatars
                                   displayValue={displayValue}
                                   value={email}
                                   border={true}
                                   size={size ? size : 32}
                              />
                         </span>
                         {showname === true ? (
                              <span>
                                   {firstName} {lastName}
                              </span>
                         ) : null}
                    </div>
               </span>
          ) : (
               <Tooltip title={`${email}`} arrow={true} destroyTooltipOnHide>
                    <span data-id={info._id}>
                         <div className={showname === true ? "flex-box" : "block-box"}>
                              <span>
                                   <Avvvatars
                                        displayValue={displayValue}
                                        value={email}
                                        border={true}
                                        size={size ? size : 32}
                                   />
                              </span>
                              {showname === true ? (
                                   <span>
                                        {firstName} {lastName}
                                   </span>
                              ) : null}
                         </div>
                    </span>
               </Tooltip>
          );
     }

     return null;
};

export default UserAvatar;
