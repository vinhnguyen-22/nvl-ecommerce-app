"user client";
import React from "react";

import UserLayout from "../UserLayout";
import UserWishlist from "./UserWishlist";

const page = () => {
  return (
    <UserLayout>
        <UserWishlist/>
    </UserLayout>
  );
};

export default page;
