import React from 'react'

function Hero() {
    return (
        <>
          <div className="wrapper__img">
            <figure>
              <div
                style={{position: "relative", overflow: "hidden"}}
              >
                <div style={{width: "100%", paddingBottom: "50%"}}></div>

                <img
                  sizes="(max-width: 540px) 100vw, 540px"
                  alt="Logo de sotavento arena"
                  src="/assets/Sotavento.png"
                  className="hero__img"
                />
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
        </>
    )
}

export default Hero
