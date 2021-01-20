import React from 'react'

const Adornos = () => {
    return (
        <>
            <img
                alt="Orange and purple patterned design"
                src="./assets/adorno2.png"
                className="adorno__2"
            />
            
            <img
                alt="Teal and purple patterned design"
                src="../assets/adorno1.png"
                className="adorno__1"
            />

            <img
                alt="Magenta and blue patterned design"
                src="./assets/adorno3.png"
                className="adorno__3"
            />
            
            <svg height="40" width="40" className="ellipse">
                <ellipse cx="10" cy="10" rx="10" ry="10" fill="#FFE4A1"></ellipse>
            </svg>
        </>
    )
}

export default Adornos