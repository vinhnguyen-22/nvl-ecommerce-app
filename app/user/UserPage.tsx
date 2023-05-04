"use client";

const UserPage = () => {
  return (
    <div className="container grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 items-start gap-6 pt-4 pb-16">
      <div className="col-span-12 grid grid-cols-3 gap-4">
        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-lg">
              Personal profile
            </h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Name</h4>
            <p className="text-gray-800">numb@gmail.com</p>
            <p className="text-gray-800">113</p>
          </div>
        </div>

        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-lg">
              Shipping Address
            </h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Name</h4>
            <p className="text-gray-800">Address</p>
          </div>
        </div>

        <div className="shadow rounded bg-white px-4 pt-6 pb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 text-lg">Billing Address</h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-700 font-medium">Name</h4>
            <p className="text-gray-800">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
