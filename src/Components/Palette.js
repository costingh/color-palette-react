import React from 'react'
import ColorBox from './ColorBox'
import '../styles/Palette.css'

function Palette({palette}) {
    const colorBoxes = palette.colors.map(color => {
        return <ColorBox background={color.color} name={color.name}/>
    })
    return (
        <div className="Palette">
        {/* navbar */}
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* footer */}
        </div>
    )
}

export default Palette
