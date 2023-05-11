import React from 'react';
// import { useLanguage } from '@/hooks/useLanguage';

const ExpiredNotice = () => {
  // const { t } = useLanguage();
  return (
    <div>
      <p className="text-md text-palette-mute">
        Discount for this Product was Expire.
      </p>
    </div>
  );
};

export default ExpiredNotice;
