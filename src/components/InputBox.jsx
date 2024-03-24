import React from "react";
import { InputBox5Circles, InputBox10Circles, InputBoxTypeText } from './index.js';

function InputBox({ setTextMessage, customerSessionObjectId, questionId, question, type }) {
    return (
        <div className="flex flex-col gap-4">
            <p className="self-center font-semibold text-lg text-stone-300">
                {
                    question
                }
            </p>
            {
                type === "rating5" ? <InputBox5Circles customerSessionObjectId={customerSessionObjectId} questionId={questionId} /> : (type === "rating10") ? <InputBox10Circles customerSessionObjectId={customerSessionObjectId} questionId={questionId} /> : <InputBoxTypeText setTextMessage={setTextMessage} />
            }
        </div>
    );
}

export default InputBox;