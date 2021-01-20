import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="footer">

        <p className="footer__p">
          Este sitio web es de uso exclusivo de los futuros propietarios del
          megaproyecto sotavento arena - vento. la informacion suministrada acá
          ha sido recopilada por los miembros del grupo.
        </p>

        <p
          className="footer__p"
          style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}
        >
          ↳ NO SOMOS ASESORES INMOBILIARIOS NI BANCARIOS.
        </p>

        <ul className="footer__sign">
          <li>
            Hecho con <span style={{color: "red"}}>♥</span> por
            <a href="https://instagram.com/leon_webdev/" target="_blank" rel="noreferrer">
              León
            </a>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer