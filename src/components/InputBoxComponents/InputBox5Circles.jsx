import React from 'react'
import { InputBoxCircles } from '../index.js';

function InputBox5Circles( { customerSessionObjectId, questionId } ) {
  return (
    <div className='flex justify-evenly'>
        <InputBoxCircles  customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={1}/>
        <InputBoxCircles  customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={2}/>
        <InputBoxCircles  customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={3}/>
        <InputBoxCircles  customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={4}/>
        <InputBoxCircles  customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={5}/>
    </div>
  )
}

export default InputBox5Circles