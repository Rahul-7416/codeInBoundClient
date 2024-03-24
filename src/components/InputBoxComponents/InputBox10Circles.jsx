import React from 'react'
import { InputBoxCircles } from '../index.js';

function InputBox10Circles( { customerSessionObjectId, questionId } ) {
  return (
    <div className='flex justify-evenly'>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={1}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={2}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={3}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={4}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={5}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={6}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={7}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={8}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={9}/>
        <InputBoxCircles customerSessionObjectId={customerSessionObjectId} questionId={questionId} number={10}/>
    </div>
  )
}

export default InputBox10Circles;