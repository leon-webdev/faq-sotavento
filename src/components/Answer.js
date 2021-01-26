import React from "react"
import db from "../database/db"
import { Link } from "gatsby"

const Answer = () => {
  return (
    <>
      {db.map(answers => {
          const {id, question ,answer, clase} = answers

        return (
          <div key={id} id={`pregunta${id}`} className={`answer__${clase}`}>
            <div>
              <h2 className="answer__h2">{question}</h2>
              <p className="answer__p">{answer}</p>
              <Link className="top__arrow" to="#preguntas">
                ▲
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Answer
