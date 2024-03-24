import React from 'react'

function InputBoxTypeText( { setTextMessage } ) {
  const handleChange = (event) => {
    const message = event.target.value;
    setTextMessage(message);
  }

  return (
    <div>
        <input onChange={handleChange} required type='text' className='rounded-md min-h-24 min-w-full'/>
    </div>
  )
}

export default InputBoxTypeText;