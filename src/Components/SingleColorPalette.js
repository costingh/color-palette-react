import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
function SingleColorPalette({ palette, colorId }) {
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
            showLink={false}
        />
    })

    const changeFormat = val => {
        setFormat(val)
    }

    return (
        <div className="SingleColorPalette Palette">
            <Navbar handleChange={changeFormat} showingAllColors={false} />
            <div className="Palette-colors">
                {colorBoxes}
                <div className="go-back ColorBox">
                    <Link to={`/palette/${palette.id}`} className="back-button" >Go Back</Link>
                </div>
            </div>
        </div>
    )
}

export default SingleColorPalette
