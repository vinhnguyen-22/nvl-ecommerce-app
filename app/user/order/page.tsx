"user client";
import React from "react";

import UserLayout from "../UserLayout";
import UserOrderPage from "./UserOrder";

const page = () => {
  return (
    <UserLayout>
      <UserOrderPage />
    </UserLayout>
  );
};

export default page;
