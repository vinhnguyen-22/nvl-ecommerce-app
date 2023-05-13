'use client';

import CheckoutInput1 from '@/components/checkout/ShippingAddress';
import CheckoutInput2 from '@/components/checkout/BillingAddress';
import CheckoutSummary from '@/components/checkout/CheckoutSummary';

const CheckoutPage = () => {

  return (
    <div
      className="
        container 
        gap-6 
        grid 
        sm:grid-cols-1
        md:grid-cols-1
        lg:grid-cols-12
        2xl:grid-cols-12
        items-start"
    >
      <div className="col-span-8 gap-2 mb-5 sm:m-2 md:m-2 mobile:m-2">
        <CheckoutInput1/>
        <CheckoutInput2/>
      </div>
      <CheckoutSummary />
    </div>
  );
};

export default CheckoutPage;
