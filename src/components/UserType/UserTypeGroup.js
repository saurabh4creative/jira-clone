import UserType from './UserType';

const UserTypeGroup = ({data}) => {
    return (
        data.map((item) => {
             return <UserType key={item} data={item} />
        })
    )
}

export default UserTypeGroup