import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'

import '../styles/Palette.css'


function Palette({ palette }) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')

    const colorBoxes = palette.colors[level].map(color => {
        return <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${palette.id}/${color.id}`}
            showingFullPalette
        />
    })

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    const changeFormat = val => {
        setFormat(val)
    }
    return (
        <div className="Palette">
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                showingAllColors
            />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            <footer className="Palette-footer">
                {palette.paletteName}
                <span className="emoji">{palette.emoji}</span>
            </footer>
        </div>
    )
}

export default Palette
