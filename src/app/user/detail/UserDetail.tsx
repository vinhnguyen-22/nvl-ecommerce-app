"use client";

const UserDetailPage = () => {
  const InputDivStyle =
    "block w-full border px-4 py-3 text-gray-600 text-sm rounded placeholder-gray-400 focus:border-green-600 focus:ring-0";
  return (
    <div>
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        <div className="col-span-12 shadow-lg rounded px-6 pt-5 pb-7 bg-white ">
          <h4 className="text-lg font-bold capitalize mb-4">
            Profile Information
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 mb-2 block">First name</label>
              <input
                type="text"
                className={InputDivStyle}
                placeholder="First name"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Last name</label>
              <input
                type="text"
                className={InputDivStyle}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 mb-2 block">First name</label>
              <input
                type="text"
                className={InputDivStyle}
                placeholder="First name"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Last name</label>
              <input
                type="text"
                className={InputDivStyle}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 mb-2 block">Birthday</label>
              <input
                type="date"
                className={InputDivStyle}
                placeholder="Birthday"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Last name</label>
              <select className={InputDivStyle}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600 mb-2 block">Email</label>
              <input
                type="email"
                className={InputDivStyle}
                placeholder="Example@nvl.com"
              />
            </div>
            <div>
              <label className="text-gray-600 mb-2 block">Phone number</label>
              <input
                type="text"
                className={InputDivStyle}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              className="
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-lg
            hover:opacity-80
            transition
            px-4
            py-3
            w-full
            bg-gradient-to-r from-lime-300 to-green-500 
            font-bold
            text-white
        ">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
