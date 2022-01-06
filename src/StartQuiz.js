import React, {useState,useEffect} from 'react'
import Quiz from './Quiz'
import Final from './Final'
import questions from './Questions.json'

function StartQuiz() {
    const [startClicked,setStart] =useState(false) 
    const [submitClicked,setSubmit] =useState(false)
    const [res,setRes] =useState(0)
    function functionToEvaluate(res,submitClick){
        console.log(`${res} and the status is ${submitClick}`)
       setSubmit(submitClick)
       setRes(res)
    }
    useEffect(() => {})
    return (
        <div class="main">
            {   !startClicked ?
                <div class="start"><button onClick = {() => setStart(true)}>Start Quiz</button></div> :
                submitClicked ? <Final res = {res} questions ={questions}></Final> : <Quiz resultFromChild = {functionToEvaluate}></Quiz>
            }
        </div>
    )
}

export default StartQuiz
