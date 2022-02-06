import React from 'react'

function UserAnswer({ answer, question, classname }) {
    return (
        <div className={`user-answer ${classname} `}>
            <h2>{question}</h2>
            <p> {answer}</p>
        </div>
    )
}

export default UserAnswer
