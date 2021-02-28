import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'

function SingleColorPalette({ palette, colorId, classes }) {
    const [format, setFormat] = useState('hex')

    const gatherShades = (palette, colorToFilterBy) => {
        let shades = []
        let allColors = palette.colors

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1)
    }

    const [_shades, setShades] = useState(gatherShades(palette, colorId))

    const colorBoxes = _shades.map(color => {
        return <ColorBox
            key={color.name}
            name={color.name}
            background={color[format]}
            showingFullPalette={false}
        />
    })

    const changeFormat = val => {
        setFormat(val)
    }

    return (
        <div className={classes.Palette}>
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className={classes.colors}>
                {colorBoxes}
                <div className={classes.goBack}>
                    <Link to={`/palette/${palette.id}`}>Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default withStyles(styles)(SingleColorPalette)
