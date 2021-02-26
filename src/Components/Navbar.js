import React, { useState } from 'react'
import Slider from 'rc-slider'
import Select from '@material-ui/core/Select';
import { MenuItem } from '@material-ui/core'
import 'rc-slider/assets/index.css'
import '../styles/Navbar.css'


function Navbar({ level, changeLevel, handleChange }) {
    const [format, setFormat] = useState('hex')

    const handleFormatChange = e => {
        setFormat(e.target.value)
        handleChange(e.target.value)
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
                <div className="select-container">
                    <Select value={format} onChange={handleFormatChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgb(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
            </div>
        </header>
    )
}

export default Navbar
