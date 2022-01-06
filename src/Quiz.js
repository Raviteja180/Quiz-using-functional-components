import React, { useState, useEffect } from 'react'
import questions from './Questions.json'
import './Styles2.css';
function Quiz(props) {
    const [i, setI] = useState(0)
    const [result, setAnswer] = useState(0)
    const [tempAnswer, setTempAnswer] = useState("")
    function nextQuestion() {

        (tempAnswer === questions[i].answer) ? setAnswer(result + 1) : setAnswer(result)
        setI(i + 1)
    }
    useEffect(() => { })
    return (
        <div class="block-1">
            <div>
                <h3>{i + 1}){questions[i].question}</h3>
            </div>
            
            <div class="block-2">
                <div className ="block-3">
                {
                    questions[i].options.map(option =>

                        
                            <button name={questions[i].question} value={option} onClick={(e) => {
                                setTempAnswer(e.target.value)
                            }}>{option}</button>
                    )
                }
                </div>
            </div>
                {
                    i === questions.length - 1 ?
                        <button
                            onClick={() => {
                                tempAnswer === questions[i].answer ?
                                    props.resultFromChild(result + 1, true) : props.resultFromChild(result, true)
                            }
                            }
                            type="submit"
                        >submit</button> :
                        <button onClick={nextQuestion} type="submit">next</button>
                }
            

        </div>
    )
}

export default Quiz
