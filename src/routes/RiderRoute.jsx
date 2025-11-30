import React from "react";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";
import useRole from "../hooks/useRole";
import Forbidden from "../components/Forbidden/Forbidden";

const RiderRoute = ({ children }) => {
  const {user,loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || !user ||roleLoading) {
    return <Loading></Loading>;
  }
  if (role !== "rider") {
    return <Forbidden></Forbidden>;
  }

  return children;
};

export default RiderRoute;
