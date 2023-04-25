import React from "react";
import UserDetailPage from "./UserDetail";
import UserLayout from "../UserLayout";

const page = () => {
  return (
    <UserLayout>
      <UserDetailPage />
    </UserLayout>
  );
};

export default page;
