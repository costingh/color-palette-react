import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteStyles'
import PaletteListFooter from './PaletteListFooter'
import RoundedColorBox from './RoundedColorBox'

function Palette({ palette, classes }) {
    const [level, setLevel] = useState(500)
    const [format, setFormat] = useState('hex')
    const [layout, setLayout] = useState('shades')
   /*  const colorBoxes = palette.colors[level].map(color => {
        return <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
            moreUrl={`/palette/${palette.id}/${color.id}`}
            showingFullPalette
        />
    }) */

    const colorBoxesRounded = palette.colors[level].map((color, idx) => {
        return <RoundedColorBox
            key={color.id}
            index={idx}
            background={color[format]}
            name={color.name}
            format={format}
            layout={layout}
            palette={palette}
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
                palette={palette}
                showingAllColors
                setLayout={setLayout}
                format={format}
                setFormat={setFormat}
            />

            {/* Box view */}
            {/* <div className={classes.colors}>
                {colorBoxes}
            </div> */}

            {/* Other view */}
            <div className={classes.secondLayout}>
                {colorBoxesRounded}
            </div>
            
            <PaletteListFooter/>
        </div>
    )
}

export default withStyles(styles)(Palette)
