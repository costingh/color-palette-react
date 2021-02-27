import React, { useState } from 'react'
import ColorBox from './ColorBox'

function SingleColorPalette({ palette, colorId }) {
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
        console.log(color)
        return <ColorBox
            key={color.id}
            name={color.name}
            background={color.hex}
            showLink={false}
        />
    })

    return (
        <div className="Palette">
            <h1>More Shades</h1>
            <div className="Palette-colors">{colorBoxes}</div>
        </div>
    )
}

export default SingleColorPalette
