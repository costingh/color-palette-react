import React, { useState } from 'react'
import ColorBox from './ColorBox'
import Slider from 'rc-slider'

import '../styles/Palette.css'
import 'rc-slider/assets/index.css'

function Palette({ palette }) {
    const [level, setLevel] = useState(500)

    const colorBoxes = palette.colors[level].map(color => {
        return <ColorBox background={color.hex} name={color.name} />
    })

    const changeLevel = (newLevel) => {
        setLevel(newLevel)
    }

    return (
        <div className="Palette">
            <Slider
                defaultValue={level}
                min={100}
                max={900}
                step={100}
                onAfterChange={changeLevel}
            />
            <div className="Palette-colors">
                {colorBoxes}
            </div>
            {/* footer */}
        </div>
    )
}

export default Palette
