import React from 'react'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'
import PaletteListNavbar from './PaletteListNavbar'
import PaletteListFooter from './PaletteListFooter'

function PaletteList(props) {
    const { palettes, classes, deletePalette } = props

    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`)
    }

    return (
        <div className={classes.root}>
            <PaletteListNavbar/>
            <div className={classes.heroText}>
                <h1>Inspirational Palettes</h1>
                <p>We jave prepared a few palettes for you, to get inspired, but you can create your own using the color picker!</p>
            </div>
            <div className={classes.container}>
                <div className={classes.palettes}>
                    {palettes.map(palette => {
                        return <MiniPalette 
                            {...palette} 
                            handleClick={() => goToPalette(palette.id)} 
                            handleDelete={deletePalette}
                            key={palette.id}
                            id={palette.id}
                        />
                    })}
                </div>
            </div> 
            <PaletteListFooter/>
        </div>
    )
}

export default withStyles(styles)(PaletteList)
