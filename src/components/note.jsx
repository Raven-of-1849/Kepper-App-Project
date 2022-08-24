import React from 'react';


function noteDiv(props) {
  console.log(props)
   return (
        <div className="note">
              <h1>{props.noteTitle}</h1>
              <p>{props.noteContent}</p>
        </div>
)}
export default noteDiv;
