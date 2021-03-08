import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import logo from '../images/logo.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Popover from '@material-ui/core/Popover';
import styles from '../styles/NavbarStyles';

function Navbar(props) {
    const { classes, setLayout, format, setFormat } = props;

    /* Popover for format change (Hex, RGB, RGBA) */
    const [formatOpen, setFormatOpen] = useState(false)
    const [formatAnchor, setformatAnchor] = useState(null);
    const formatPopover = Boolean(formatAnchor);
    const formatId = formatPopover ? 'simple-popover' : undefined;

    const handleFormatValueChange = val => {
        setFormat(val)
        setFormatOpen(true)
        handleFormatChange(val)
        handleFormatChangeClose()
    }

    const closeSnackbar = () => {
        setFormatOpen(false)
    }

    const handleFormatChange = (event) => {
        setformatAnchor(event.currentTarget);
    };

    const handleFormatChangeClose = () => {
        setformatAnchor(null);
    };

    /* Popover for layout change panel */
    const [layoutAnchor, setlayoutAnchor] = useState(null);
    const layoutPopover = Boolean(layoutAnchor);
    const layoutId = layoutPopover ? 'simple-popover' : undefined;

    const handleLayoutChange = (event) => {
        setlayoutAnchor(event.currentTarget);
    };

    const handleLayoutChangeClose = () => {
        setlayoutAnchor(null);
    };

    return (
        <header className={classes.Navbar}>
            <Link to='/' className={classes.logo}>
                <img src={logo} alt="HEXA"/>
            </Link>
            <div className={classes.right}>
                <div className={classes.bottomNav}>
                    <Link to='/palette/new' className={classes.link}>Create</Link>
                    {/* Popover for Format change starts */}
                    <p className={classes.link} onClick={handleFormatChange} >Format<ExpandMoreIcon style={{marginLeft: '6px'}}/></p>
                    <Popover
                        id={formatId}
                        open={formatPopover}
                        className={classes.dropdown}
                        anchorEl={formatAnchor}
                        onClose={handleFormatChangeClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <p onClick={() => handleFormatValueChange('hex')}>
                            HEX (Default)
                            {format === 'hex' && <div className={classes.currentFormat}></div>}
                        </p>
                        <p onClick={() => handleFormatValueChange('rgb')}>
                            RGB 
                            {format === 'rgb' && <div className={classes.currentFormat}></div>}
                        </p>
                        <p onClick={() => handleFormatValueChange('rgba')}>
                            RGBA 
                            {format === 'rgba' && <div className={classes.currentFormat}></div>}
                        </p>
                    </Popover>
                    {/* Popover for Format change ends */}
                    
                    <div className={classes.dividerVert}></div>
                    <Link to='/' className={classes.link}>Eplore</Link>
                </div>
                    
                {/* Popover for Layout change starts */}
                <Link className={classes.btn} onClick={handleLayoutChange}>Change View</Link>
                <Popover
                    id={layoutId}
                    open={layoutPopover}
                    className={classes.dropdown}
                    anchorEl={layoutAnchor}
                    onClose={handleLayoutChangeClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                    }}
                >
                    <div className={classes.text}>Choose how you want the color palettes to be displayed</div>
                    <div className={classes.divider}></div>
                    <div className={classes.layoutOptions}>
                        <div className={classes.view} onClick={() => setLayout('simple')}>
                            <div className={classes.layout} style={{width: '40px'}}>
                                <div className={classes.horizontalDivider}></div>
                            </div>
                            <span>Simple</span>
                        </div>
                        <div className={classes.view} onClick={() => setLayout('gradient')}>
                            <div className={classes.layout} style={{width: '40px'}}>
                                <div className={classes.horizontalDivider}></div>
                                <div className={classes.gradient}></div> 
                            </div>
                            <span>Gradient</span>
                        </div>
                        <div className={classes.view} onClick={() => setLayout('shades')}>
                            <div className={classes.layout} style={{width: '40px'}}>
                                <div className={classes.horizontalDivider}></div>
                                <div className={classes.shades}>
                                    <div className={classes.verticalDivider}></div>
                                    <div className={classes.verticalDivider}></div>
                                    <div className={classes.verticalDivider}></div>
                                    <div className={classes.verticalDivider}></div>
                                </div>
                            </div>
                            <span>Shades</span>
                        </div>
                    </div>
    
                </Popover>
                {/* Popover for Layout change ends */}
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={formatOpen}
                autoHideDuration={3000}
                message={<span id="message-id">Format Changed to {format.toUpperCase()}!</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                onClose={closeSnackbar}
                action={[
                    <IconButton
                        onClick={closeSnackbar}
                        key='close'
                        aria-label='close'
                    >
                        <CloseIcon />
                    </IconButton>
                ]}
            />
        </header>
    )
}

export default withStyles(styles)(Navbar)





            
