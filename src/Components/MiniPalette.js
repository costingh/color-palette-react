import React from 'react'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/MiniPaletteStyles'
import DeleteIcon from '@material-ui/icons/Delete'

const MiniPalette = (props) => {
    const { classes, paletteName, emoji, colors, handleClick, handleDelete, id } = props

    const miniColorBoxes = colors.map(color => {
        return <div
            className={classes.miniColor}
            style={{ backgroundColor: color.color }}
            key={color.name}
        />
    })

    const deletePalette = (e) => {
        e.stopPropagation()
        handleDelete(id)
    }

    return (
        <div className={classes.root} onClick={handleClick}>
            <DeleteIcon 
                className={classes.deleteIcon} 
                style={{transition: 'all .4s ease-in-out'}}
                onClick={deletePalette}
            />
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <div className={classes.paletteDetails}>
                <p className={classes.title} style={{color: '#646369'}}>
                    {paletteName}
                </p>
                <span
                    className={classes.emoji}>
                    {emoji}
                </span>
            </div>
        </div>
    )
}

export default withStyles(styles)(MiniPalette)