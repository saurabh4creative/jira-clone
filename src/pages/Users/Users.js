import PageContent from '@components/PageContent/PageContent'
import PageHeader from '@components/PageHeader/PageHeader'
import React from 'react'
import UserList from './UserList/UserList'

const Users = () => {
    return (
         <>
               <PageHeader title={'Users List'} /> 
               
               <PageContent>
                    <UserList />
               </PageContent>
         </>
    )
}

export default Users