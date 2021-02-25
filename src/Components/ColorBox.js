import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import '../styles/ColorBox.css'

function ColorBox({background, name}) {
    console.log(background)
    return (
        <CopyToClipboard text={background} >
            <div style={{background}} className="ColorBox">
                <div className="copy-container">
                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <div className="copy-button">Copy</div>
                </div>
                <span className="see-more">More</span>
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox
