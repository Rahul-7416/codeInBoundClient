import React from 'react'

function InputBoxCircles({ customerSessionObjectId, questionId, number}) {

  const serverUrl = "https://codeinboundassignmentserver.onrender.com";

  const ratingsHandler = async () => {
    const xhr = new XMLHttpRequest;

    xhr.open('POST', `${serverUrl}/api/v1/responses`, true);

    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = async function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
        const response = await JSON.parse(this.response);
        console.log(response);
      }
    }

    const jsonData = JSON.stringify({
      sessionId: customerSessionObjectId,
      questionId: questionId,
      answer: number,
    });

    xhr.send(jsonData);
  }

  return (
    <p onClick={ratingsHandler} className="h-[3rem] w-[3rem] rounded-full bg-red-400 text-center flex justify-center items-center hover:cursor-pointer hover:bg-red-200 active:scale-50 ">{number}</p>
  );
}

export default InputBoxCircles;