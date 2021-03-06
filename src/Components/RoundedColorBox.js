import React, {useState, useEffect} from 'react'
import styles from '../styles/RoundedColorBoxStyles'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Link } from 'react-router-dom'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function RoundedColorBox(props) {
    const { background, name, moreUrl, showingFullPalette, classes, palette, index, layout } = props;
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
    
    const showShades = () => {
        let complexBackground = []
        for(let i=1; i<10; i++) {
           complexBackground.push(<div style={{background: palette.colors[i*100][index].hex, height: '100%', width: '44.44px'}}></div>)
        }
        return complexBackground
    }

    const showGradient = () => {
        const lightColor = palette.colors[100][index].hex;
        const darkColor = palette.colors[900][index].hex;
        return <div style={{backgroundImage: `linear-gradient(to top right, ${lightColor}, ${darkColor})`, height: '100%', width: '100%'}}></div>
    }

    const getName = () => {
        const spaceIndex = name.indexOf(' ')
        const newName = name.slice(0, spaceIndex-1);
        return newName
    }

    const getTint = () => {
        const spaceIndex = name.indexOf(' ')
        const tint = name.slice(spaceIndex+1, name.length)
        return tint
    }

    getName()
    return (
        <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={classes.roundedColorBox}>
                {layout === 'shades' && <div className={classes.inner}>{showShades()}</div>}         
                {layout === 'gradient' && <div className={classes.inner}>{showGradient()}</div>}                             
                {layout === 'simple' && <div className={classes.inner} style={{background}}></div>}                                                             
                <div className='menuBar'>
                    <div>{getName()}</div>
                    <MoreHorizIcon/>
                </div>
            </div>
        </CopyToClipboard>
    )
}

export default withStyles(styles)(RoundedColorBox)

