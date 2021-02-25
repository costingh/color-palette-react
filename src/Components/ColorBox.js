import React from 'react'
import '../styles/ColorBox.css'

function ColorBox({background, name}) {
    console.log(background)
    return (
        <div style={{background: background}} className="ColorBox">
        <span>{name}</span>
            <span>MORE</span>
        </div>
    )
}

export default ColorBox
