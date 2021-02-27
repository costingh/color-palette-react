import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import chroma from 'chroma-js'
import '../styles/ColorBox.css'

function ColorBox({ background, name, moreUrl, showLink }) {
    const [copied, setCopied] = useState(false);
    const isDarkColor = chroma(background).luminance() <= 0.08
    const isLightColor = chroma(background).luminance() >= 0.7

    const changeCopyState = () => {
        setCopied(true)
    }

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000);
        }
    }, [copied])

    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div style={{ background }} className="ColorBox">
                <div
                    style={{ background }}
                    className={copied ? 'copy-overlay show' : 'copy-overlay'}
                >
                </div>
                <div className={copied ? 'copy-msg show' : 'copy-msg'}>
                    <h1>copied!</h1>
                    <p className={isLightColor && 'dark-text'}>{background}</p>
                </div>
                <div className="copy-container">
                    <div className="box-content">
                        <span className={isDarkColor && 'light-text'}>{name}</span>
                    </div>
                    <div className={`copy-button ${isLightColor && 'dark-text'}`}>Copy</div>
                </div>
                {showLink && (
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={`see-more ${isLightColor && 'dark-text'}`}>MORE</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    )
}

export default ColorBox
