import React, {useState, useContext} from 'react'
import clsx from 'clsx';
import {Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import ThemeToggler from './ThemeToggler'
import {ThemeContext} from '../Context/ThemeContext'
import {lightTheme, darkTheme} from '../helpers/Themes'
import PaletteMetaForm from './PaletteMetaForm'
import useStyles from '../styles/PaletteFormNavStyles'

function PaletteFormNav(props) {
    const {open, palettes, setOpen, handleSubmit} = props;
    const [formShowing, setFormShowing] = useState(false)
    const [themeContext, setThemeContext] = useContext(ThemeContext);
    const classes = useStyles(themeContext === 'light' ? {...lightTheme} : {...darkTheme});

    const handleDrawerOpen = () => {
        setOpen(true);
    };   

    const showForm = () => {
        setFormShowing(true)
    }
    
    const hideForm = () => {
        setFormShowing(false)
    }

    return (
        <div>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <CssBaseline />
                    <div className={classes.navBtns}>
                        <Link to='/' className={classes.link}><Button variant='contained' className={classes.buttonPrimary}>Back</Button></Link>
                        <Button variant='contained' className={classes.buttonSecondary} onClick={showForm}>Save</Button>
                        {formShowing && <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={hideForm} classes={classes} />}                      
                        <ThemeToggler/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default PaletteFormNav
