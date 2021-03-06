import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height: 'calc(100% - 64px)'}}>
           {colors.map((color, i) => {
                    return <DraggableColorBox 
                        key={color.name}
                        index={i}
                        color={color.color} 
                        name={color.name}
                        handleClick={() => removeColor(color.name)}
                    />
                })}
        </div>
    )
})

export default DraggableColorList
