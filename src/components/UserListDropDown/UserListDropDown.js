import { Select } from "antd";
import UserAvatar from "@components/UserAvatar/UserAvatar";

const UserListDropDown = ({ users, loading, error, isError, onChange, defaultValue, ...rest }) => {
     const handleChange = (selectedValue) => {
          if (onChange) {
               onChange(selectedValue);
          }
     };

     if( loading ){
          return <Select loading={loading} options={[]} />
     }

     if( isError ){
          return error.message;
     }

     return loading === false && users ? (
          <Select
               options={
                    Array.isArray(users)
                         ? users.map((item) => {
                                return {
                                     value: item._id,
                                     label: <UserAvatar info={item} showname={true} size={25} hideTooltip={true} />,
                                };
                           })
                         : []
               }
               placeholder={"Select User"}
               mode="multiple"
               onChange={handleChange} 
               allowClear
               {...rest}
          />
     ) : null;
};

export default UserListDropDown;