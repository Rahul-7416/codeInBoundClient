import React, { useEffect } from 'react';

function ThankYou() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = '/';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600'>
        <h1 className='text-white font-semibold text-xl'>Thank you for your time and patience!</h1>
    </div>
  );
}

export default ThankYou;
