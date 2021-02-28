import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import { MenuItem } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider'

import styles from '../styles/NavbarStyles'
import 'rc-slider/assets/index.css'

function Navbar({ level, changeLevel, handleChange, showingAllColors, classes }) {
    const [format, setFormat] = useState('hex')
    const [open, setOpen] = useState(false)

    const handleFormatChange = e => {
        setFormat(e.target.value)
        setOpen(true)
        handleChange(e.target.value)
    }

    const closeSnackbar = () => {
        setOpen(false)
    }

    return (
        <header className={classes.Navbar}>
            <div className={classes.logo}>
                <Link to='/'>reactcolorpicker</Link>
            </div>
            {showingAllColors && (
                <div>
                    <span>Level: {level}</span>
                    <div className={classes.slider}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={changeLevel}
                        />
                    </div>
                </div>
            )}
            <div className={classes.selectContainer}>
                <Select value={format} onChange={handleFormatChange}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={open}
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