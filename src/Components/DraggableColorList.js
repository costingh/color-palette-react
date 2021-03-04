import React from 'react'
import {SortableContainer} from 'react-sortable-hoc'
import DraggableColorBox from './DraggableColorBox'

const DraggableColorList = SortableContainer(({colors, removeColor}) => {
    return (
        <div style={{height: '100%', backgroundColor: '#222'}}>
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
