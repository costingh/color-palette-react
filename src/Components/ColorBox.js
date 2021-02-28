import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import styles from '../styles/ColorBoxStyles'
import { withStyles } from '@material-ui/styles'

function ColorBox({ background, name, moreUrl, showingFullPalette, classes }) {

    const [copied, setCopied] = useState(false);

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
            <div style={{ background }} className={classes.ColorBox}>
                <div
                    style={{ background }}
                    className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
                >
                </div>
                <div className={!copied ? classes.copyMessage : `${classes.copyMessage} ${classes.showMessage}`}>
                    <h1>copied!</h1>
                    <p className={classes.copyText}>{background}</p>
                </div>
                <div>
                    <div className={classes.boxContent}>
                        <span className={classes.colorName}>{name}</span>
                    </div>
                    <button className={classes.copyButton}>Copy</button>
                </div>
                {showingFullPalette && (
                    <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                        <span className={classes.seeMore}>MORE</span>
                    </Link>
                )}
            </div>
        </CopyToClipboard>
    )
}

export default withStyles(styles)(ColorBox)
