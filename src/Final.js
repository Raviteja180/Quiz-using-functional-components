import React from 'react'
import './result.css'

function Final({res,questions}) {
    return (
        <div>
            <h1>Result is ({res}/{questions.length}) </h1>
        </div>
    )
}

export default Final
