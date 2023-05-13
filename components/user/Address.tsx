'use client';

const UserAddress = () => {
const AddressCardStyles = "shadow rounded bg-palette-card px-4 pt-6 pb-8";
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-12 items-start gap-6 pb-16">
      <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        <div className={AddressCardStyles}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white text-lg">
              Personal profile
            </h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-200 font-medium">Name</h4>
            <p className="text-gray-200">numb@gmail.com</p>
            <p className="text-gray-200">113</p>
          </div>
        </div>

        <div className={AddressCardStyles}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white text-lg">
              Shipping Address
            </h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-200 font-medium">Name</h4>
            <p className="text-gray-200">Address</p>
          </div>
        </div>

        <div className={AddressCardStyles}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white text-lg">Billing Address</h3>
            <div className="text-green-600">Edit</div>
          </div>
          <div className="space-y-1">
            <h4 className="text-gray-200 font-medium">Name</h4>
            <p className="text-gray-200">Address</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
