import React, { useState } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton'

import 'rc-slider/assets/index.css'
import '../styles/Navbar.css'


function Navbar({ level, changeLevel, handleChange }) {
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
        <header className="Navbar">
            <div className="logo">
                <a href="#">reactcolorpicker</a>
            </div>
            <div className="slider-container">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        defaultValue={level}
                        min={100}
                        max={900}
                        step={100}
                        onAfterChange={changeLevel}
                    />
                </div>
            </div>
            <div className="select-container">
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

export default Navbar
