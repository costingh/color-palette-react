import React, {useState} from 'react'
import styles from '../styles/RoundedColorBoxStyles'
import { withStyles } from '@material-ui/styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Popover from '@material-ui/core/Popover';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';
import {TransitionUp, TransitionLeft, TransitionRight, TransitionDown} from '../helpers/snackbarTransitions'

function RoundedColorBox(props) {
    const { background, name, classes, palette, index, layout, format } = props;
    const [copyOpen, setCopyOpen] = useState(false)
    const [transition, setTransition] = useState(undefined);
    const [copiedColor, setCopiedColor] = useState(background)
    console.log(format)
    const closeSnackbar = () => {
        setCopyOpen(false)
    }

    const changeCopyState = (colorCopiedToClipboard) => {
        const snackBarTransitions = [TransitionUp, TransitionLeft, TransitionRight, TransitionDown];
        let randomTransition = snackBarTransitions[Math.floor(Math.random() * snackBarTransitions.length)]
        setTransition(() => randomTransition);
        setCopyOpen(true)
        setCopiedColor(colorCopiedToClipboard)
    }
    
    const handleMouseEnter = (e) => {
        e.target.style.width = '120px'
    }

    const handleMouseLeave = (e) => {
        e.target.style.width = '44.44px'
    }

    const showShades = () => {
        let complexBackground = []
        for(let i=1; i<10; i++) {
           complexBackground.push(
                <CopyToClipboard 
                    text={palette.colors[i*100][index][format]} 
                    onCopy={() => changeCopyState(palette.colors[i*100][index][format])}
                >
                    <div 
                        style={{background: palette.colors[i*100][index].hex, height: '100%', width: '44.44px', }} 
                        className={classes.hoveredColor}
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <div key={palette.colors[i*100][index][format]}>
                            {palette.colors[i*100][index].hex}
                        </div>
                    </div>
                </CopyToClipboard>
            )
        }
        return complexBackground
    }

    const showGradient = () => {
        const lightColor = palette.colors[100][index][format];
        const darkColor = palette.colors[900][index][format];
        return <div style={{backgroundImage: `linear-gradient(to top right, ${lightColor}, ${darkColor})`, height: '100%', width: '100%'}} className={classes.gradientInner}>
                <div>{background}</div>
        </div>
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

    /* Popover for three dots panel */
    const [dotsAnchor, setDotsAnchor] = useState(null);
    const dotsPopover = Boolean(dotsAnchor);
    const dotsId = dotsPopover ? 'simple-popover' : undefined;

    const handlePopoverClick = (event) => {
        setDotsAnchor(event.currentTarget);
    };

    const handlePopoverClickClose = () => {
        setDotsAnchor(null);
    };

    getName()
    return ( 
        <div className={classes.roundedColorBox}>   
            {layout === 'shades' && <div className={classes.inner}>{showShades()}</div>}         
            {layout === 'gradient' && 
                <div className={classes.inner}>
                    <CopyToClipboard text={background} onCopy={() => changeCopyState(background)}>  
                        <div className={classes.gradient}>
                            {showGradient()}
                        </div>
                    </CopyToClipboard>   
                </div>} 
            {layout === 'simple' && 
                <div className={classes.inner}> 
                    <CopyToClipboard text={background} onCopy={() => changeCopyState(background)}>  
                        <div className={classes.solid} style={{background}}> 
                            <div>{background}</div>
                        </div>
                    </CopyToClipboard>   
                </div>}     
            <div className='menuBar'>
                <div>{getName()}</div>
                <MoreHorizIcon onClick={handlePopoverClick}/>
                <Popover
                    id={dotsId}
                    open={dotsPopover}
                    anchorEl={dotsAnchor}
                    className={classes.dropdown}
                    onClose={handlePopoverClickClose}
                    anchorOrigin={{vertical: 'bottom',horizontal: 'center',}}                   
                    transformOrigin={{vertical: 'top',horizontal: 'center',}}        
                >
                    mere
                </Popover>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={copyOpen}
                onClose={closeSnackbar}
                autoHideDuration={3000}
                TransitionComponent={transition}
                key={transition ? transition.name : ''}
                ContentProps={{"aria-describedby": "message-id"}}
                message={<span id="message-id">You have copied {copiedColor} to your clipboard!</span>}
                action={[
                    <IconButton onClick={closeSnackbar} key='close' aria-label='close'>
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </div>
    )
}

export default withStyles(styles)(RoundedColorBox)

