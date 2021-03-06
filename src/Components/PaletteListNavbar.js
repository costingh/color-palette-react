import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import { withStyles } from '@material-ui/styles'
import styles from '../styles/PaletteListNavbarStyles'

function PaletteListNavbar({classes}) {
    return (
        <nav className={classes.nav}>
            <img src={logo} className={classes.logo} alt="HEXA"/>
            <Link to='/palette/new' className={classes.link}>Create Palette</Link>
        </nav> 
    )
}

export default withStyles(styles)(PaletteListNavbar)
