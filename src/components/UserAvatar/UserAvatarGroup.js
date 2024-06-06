import { Avatar } from "antd"; 
import UserAvatar from "./UserAvatar";

const UserAvatarGroup = ({ group }) => {
     return (
          <Avatar.Group>
               {group.map((user) => (
                    <UserAvatar key={user._id} info={user} />
               ))}
          </Avatar.Group>
     );
};

export default UserAvatarGroup;