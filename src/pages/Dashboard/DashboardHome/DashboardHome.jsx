import React from 'react';
import useRole from '../../../hooks/useRole';
import AdminDashboardHome from './adminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';
import Loading from '../../../components/Loading';

const DashboardHome = () => {

  const {role,roleLoading} = useRole();
    if(roleLoading){
        return <Loading/>
    }
    if(role=== 'admin' ){
        return <AdminDashboardHome/>
    }
    else if(role=== 'rider'){
        return <RiderDashboardHome/>
    }
    else{
        return <UserDashboardHome/>
    }
};

export default DashboardHome;