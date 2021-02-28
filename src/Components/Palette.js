import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'

function Palette({ palette, classes }) {
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
        <div className={classes.Palette}>
            <Navbar
                level={level}
                changeLevel={changeLevel}
                handleChange={changeFormat}
                showingAllColors
            />
            <div className={classes.colors}>
                {colorBoxes}
            </div>
            <PaletteFooter palette={palette} />
        </div>
    )
}

export default withStyles(styles)(Palette)
