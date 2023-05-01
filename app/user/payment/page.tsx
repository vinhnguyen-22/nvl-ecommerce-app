"user client";
import React from "react";

import UserLayout from "../UserLayout";
import UserPaymentPage from "./UserPayment";

const page = () => {
  return (
    <UserLayout>
      <UserPaymentPage />
    </UserLayout>
  );
};

export default page;
