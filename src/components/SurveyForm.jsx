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
        return (
            <div className="h-lvh w-lvw flex justify-center items-center p-5 bg-slate-600">
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        );
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