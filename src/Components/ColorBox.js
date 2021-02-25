import React, {useState, useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

import '../styles/ColorBox.css'

function ColorBox({background, name}) {
    const [copied, setCopied] = useState(false);

    const changeCopyState = () => {
        setCopied(true)
    }

    useEffect(() => {
        if(copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        }
    }, [copied])

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{background}} className="ColorBox">
                <div 
                    style={{background}} 
                    className={copied ? 'copy-overlay show' : 'copy-overlay'}   
                >
                </div>
                <div className={copied ? 'copy-msg show' : 'copy-msg'}>
                    <h1>copied!</h1>
                    <p>{background}</p>
                </div>
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
