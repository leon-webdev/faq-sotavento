import React from 'react'

const Questions = () => {
    return (
        <>
            <ul id="preguntas" className="question__wrapper">
            <li className="question">
              ↳
              <a href="#pregunta1">¿Pregunta 1?</a>
            </li>

            <li className="question">
              ↳
              <a href="#pregunta2">¿Pregunta 2?</a>
            </li>

            <li className="question">
              ↳
              <a href="#pregunta3">¿Pregunta 3?</a>
            </li>
          </ul>

          <div id="pregunta1" className="answer__1">
            <div>
              <h2 className="answer__h2">
                ¿Pregunta 1?
              </h2>

              <p className="answer__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nihil laboriosam, porro facere dolorum non quae aspernatur odio harum qui!</p>

              <a className="top__arrow" href="#preguntas">▲</a>

            </div>
          </div>

          <div id="pregunta2" className="answer__2">
            <div>
              <h2 className="answer__h2">¿Pregunta 2?</h2>
              <p className="answer__p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptate eum voluptas corrupti consequuntur itaque excepturi possimus voluptates mollitia eveniet?
              </p>
              <a className="top__arrow" href="#preguntas">▲</a>
            </div>
          </div>

          <div id="pregunta3" className="answer__3">
            <div>
              <h2 className="answer__h2">¿Pregunta 3?</h2>
              <p className="answer__p">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat aspernatur consequatur expedita nostrum omnis rerum tempora voluptatum odit amet a.
              </p>
              <a className="top__arrow" href="#preguntas">▲</a>
            </div>
          </div>
        </>
    )
}

export default Questions