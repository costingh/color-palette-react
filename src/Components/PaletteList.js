import React from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListStyles'

function PaletteList(props) {
    const { palettes, classes, deletePalette } = props

    const goToPalette = (id) => {
        props.history.push(`/palette/${id}`)
    }

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React Colors</h1>
                    <Link to='/palette/new'>Create New Palette</Link>
                </nav>
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
        </div>
    )
}

export default withStyles(styles)(PaletteList)
