import React, { useEffect } from "react";
import { useState } from "react";
import { InputBox } from "./index.js";

function SurveyForm() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [questionsArray, setQuestionsArray] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sessionId, setSessionId] = useState("");
    const [customerSessionObjectId, setCustomerSessionObjectId] = useState("");
    const [textMessage, setTextMessage] = useState("");

    const serverUrl = "https://codeinboundassignmentserver.onrender.com";

    useEffect(() => {
        ( async () => {
            const xhr = new XMLHttpRequest;

            xhr.open('GET', `${serverUrl}/api/v1/questions/get-all-questions`, true);
    
            xhr.onload = async function() {
                if (xhr.status === 200) {
                    console.log("success");
                    let response = await JSON.parse(this.response);
                    let questionsArray2;
                    questionsArray2 = await response?.data;
                    setQuestionsArray(questionsArray2);
                    console.log(questionsArray2);
                    setLoading(false);
                }
            }

            xhr.onerror = () => {
                new Error('XMLHttpRequest error occured');
            }
    
            xhr.send();
        }) ();
    } , []);

    useEffect(() => {
        (async () => {
            const xhr = new XMLHttpRequest;

            xhr.open('POST', `${serverUrl}/api/v1/sessions/new`, true);

            // xhr.setRequestHeader('content-Type', 'application')

            xhr.onreadystatechange = async function() {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
                    let response = await JSON.parse(this.response);
                    let sessionId2 = response?.data?.sessionId;
                    setSessionId(sessionId2); 

                    let customerSessionObjectId2 = response?.data?._id;
                    setCustomerSessionObjectId(customerSessionObjectId2);
                }
            }

            xhr.send();
        }) ();
    }, []);

    const prevClickHandler = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            alert("No prev question present");
        }
    }

    const nextClickHandler = () => {
        
        if (currentIndex < questionsArray.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } 
        else if (textMessage === "") {
            alert("No next question present");
        } 
        else if (textMessage !== "") {

            // text answer storing request
            const xhrFeedback = new XMLHttpRequest;

            xhrFeedback.open('POST', `${serverUrl}/api/v1/responses`, true);

            xhrFeedback.setRequestHeader("content-type", "application/json");

            xhrFeedback.onreadystatechange = async function() {
                if (xhrFeedback.readyState === XMLHttpRequest.DONE && xhrFeedback.status === 201) {
                    const response = await JSON.parse(this.response);
                    // console.log(response);
                }
            }

            const jsonData = JSON.stringify({
                sessionId: customerSessionObjectId,
                questionId: question?._id,
                answer: textMessage
            });

            xhrFeedback.send(jsonData);

            // customerSession updation request
            const xhrUpdateSessionId = new XMLHttpRequest;

            xhrUpdateSessionId.open('PUT', `${serverUrl}/api/v1/sessions/${sessionId}`, true);

            // xhrUpdateSessionId.setRequestHeader("content-type", "application/json");

            xhrUpdateSessionId.onreadystatechange = async function() {
                if (xhrUpdateSessionId.readyState === XMLHttpRequest.DONE && xhrUpdateSessionId.status === 201) {
                    const response = await JSON.parse(this.response);
                    console.log(response);
                }
            }

            xhrUpdateSessionId.send();

            // redirect to the ThankYou page
            window.location.href = '/thank-you';
        } 
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    const question = questionsArray[currentIndex];

    return (
        <div className='h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600'>
            <div className="flex flex-col gap-10 min-w-[50%] min-h-[40%] bg-blue-500 p-5 rounded-2xl " >
                <h1 className="text-4xl font-bold self-center">Customer Survey</h1>
                <p className="self-end">{currentIndex+1}/{questionsArray.length}</p>
                <InputBox setTextMessage={setTextMessage} customerSessionObjectId={customerSessionObjectId} questionId={question?._id} question={question?.text} type={question?.type}/>
                <div className="flex justify-between">
                    <button className="bg-yellow-200 py-1 px-4 rounded-md" onClick={prevClickHandler}>Prev</button>
                    <button className="bg-yellow-200 py-1 px-4 rounded-md" onClick={nextClickHandler}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default SurveyForm;