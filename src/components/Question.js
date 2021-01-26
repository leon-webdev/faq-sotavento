import React from "react"
import db from "../database/db"
import { Link } from "gatsby"

const Question = () => {
  return (
    <>
      <ul id="preguntas" className="question__wrapper">
        {db.map(questions => {
          const { id, question } = questions

          return (
            <li key={id} className="question">
              ↳<Link to={`#pregunta${id}`}> {question}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Question
