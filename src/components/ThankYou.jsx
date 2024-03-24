import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600'>
      <h1 className='text-white font-semibold text-xl'>
        Thank you for your time and patience!
      </h1>
    </div>
  );
}

export default ThankYou;