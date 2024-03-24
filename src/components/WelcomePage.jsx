import React from 'react'
import { Link } from "react-router-dom"

function WelcomePage() {
  return (
    <div className='h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600'>
      <div className='bg-blue-400 h-[90%] md:h-[50%] w-[50%] flex flex-col justify-around rounded-xl px-5 py-0'>
        <div className='flex flex-col gap-6'>
            <h1 className='self-center font-bold text-4xl '>Welcome to xyz</h1>
            <p className='self-center '>Help us improve for the better</p>
            <p className='self-center text-center'>Fill the survey form, and share your valuable feedback to us.</p>
        </div>
        <button className='self-center mb-4 bg-green-400 py-1 px-4 rounded-lg'>
          <Link to='/survey-form'>
            Begin
          </Link>
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;