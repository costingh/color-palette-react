import React from 'react'
import '../styles/ColorBox.css'

function ColorBox({background, name}) {
    console.log(background)
    return (
        <div style={{background}} className="ColorBox">
            <div className="copy-container">
                <div className="box-content">
                    <span>{name}</span>
                </div>
                <div className="copy-button">Copy</div>
            </div>
            <span className="see-more">More</span>
        </div>
    )
}

export default ColorBox
