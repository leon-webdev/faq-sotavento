import React from 'react'
import Imagen from './Imagen'

const Hero = () => {

      return (
        <>
          <div className="wrapper__img">
            <figure>
              <div
                style={{position: "relative", overflow: "hidden"}}
              >
                <div style={{width: "100%"}}></div>
                
                 <Imagen alt="Logo de sotavento arena" imgsrc="Sotavento.png" clase=""/>

              </div>
            </figure>
          </div>

          <h1>Preguntas Más Frecuentes</h1>

          <p className="p__principal">
            Todo lo que debes saber sobre el proyecto Sotavento Arena - Vento de
            la constructora bolivar. Información que es suministrada por los
            futuros residentes del proyecto ;-)
          </p>

          <div className="arrow__down">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              size="24"
              className="css-1ehaigh"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
              ></path>
            </svg>
          </div>  
          <svg height="40" width="40" className="ellipse">
                <ellipse cx="10" cy="10" rx="10" ry="10" fill="#FFE4A1"></ellipse>
          </svg>
        </>
    )
}

export default Hero
