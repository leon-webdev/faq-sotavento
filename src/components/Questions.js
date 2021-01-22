import React from 'react'
import {Link} from 'gatsby'

const Questions = () => {
    return (
        <>
            <ul id="preguntas" className="question__wrapper">
            <li className="question">
              ↳
              <Link to="#pregunta1">¿Pregunta 1?</Link>
            </li>

            <li className="question">
              ↳
              <Link to="#pregunta2">¿Pregunta 2?</Link>
            </li>

            <li className="question">
              ↳
              <Link to="#pregunta3">¿Pregunta 3?</Link>
            </li>
          </ul>

          <div id="pregunta1" className="answer__1">
            <div>
              <h2 className="answer__h2">
                ¿Hay apartamento modelo?
              </h2>

              <p className="answer__p">Hasta la fecha aun no se cuenta con apartamento modelo.</p>
              <Link className="top__arrow" to="#preguntas">▲</Link>
            </div>
          </div>

          <div id="pregunta2" className="answer__2">
            <div>
              <h2 className="answer__h2">¿Pregunta 2?</h2>
              <p className="answer__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate eum voluptas corrupti consequuntur itaque excepturi possimus voluptates mollitia eveniet?
              </p>
              <Link className="top__arrow" to="#preguntas">▲</Link>
            </div>
          </div>

          <div id="pregunta3" className="answer__3">
            <div>
              <h2 className="answer__h2">¿Pregunta 3?</h2>
              <p className="answer__p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur consequatur expedita nostrum omnis rerum tempora voluptatum odit amet a.
              </p>
              <Link className="top__arrow" to="#preguntas">▲</Link>
            </div>
          </div>
        </>
    )
}

export default Questions