import React from 'react';

const CheckoutInput2 = () => {
  const InputTextstyle = 'text-gray-800 mb-2 block';
  const responsivestyle = 'grid grid-cols-1 sm:grid-cols-2 gap-4';
  const InputDivStyle =
    'block w-full border px-4 py-3 text-gray-900 text-xs rounded placeholder-gray-400 focus:border-green-600 focus:ring-0';
  return (
    <div className="mt-3 p-4 rounded bg-palette-card shadow-lg">
      <h3 className="text-gray-800 text-lg font-medium capitalize mb-4 ">Billing Address</h3>
      <div className="flex items-center mb-4 mt-2">
        <input
          type="checkbox"
          className="text-red-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
        />
        <label className="text-gray-800 ml-3 cursor-pointer text-sm">
          Same as shipping address{' '}
        </label>
      </div>
      <div className="space-y-4 ">
        <div className={responsivestyle}>
          <div>
            <label className={InputTextstyle}>First Name</label>
            <input type="text" className={InputDivStyle} />
          </div>
          <div>
            <label className={InputTextstyle}>Last Name</label>
            <input type="text" className={InputDivStyle} />
          </div>
        </div>
        <div className={responsivestyle}>
          <div>
            <label className={InputTextstyle}>Phone number</label>
            <input type="text" className={InputDivStyle} />
          </div>
          <div>
            <label className={InputTextstyle}>Company</label>
            <input type="text" className={InputDivStyle} />
          </div>
        </div>
        <div className={responsivestyle}>
          <div>
            <label className={InputTextstyle}>Zip code</label>
            <input type="text" className={InputDivStyle} />
          </div>
          <div>
            <label className={InputTextstyle}>Country</label>
            <input type="text" className={InputDivStyle} />
          </div>
        </div>
        <div className={responsivestyle}>
          <div>
            <label className={InputTextstyle}>Address 1</label>
            <input type="text" className={InputDivStyle} />
          </div>
          <div>
            <label className={InputTextstyle}>Address 2</label>
            <input type="text" className={InputDivStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInput2;
