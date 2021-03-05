import React from 'react'
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
import { makeStyles } from '@material-ui/core/styles';
import {lightTheme, darkTheme} from '../helpers/Themes'
import PaletteMetaForm from './PaletteMetaForm'

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: props => props.palette.primary.main,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    buttonPrimary: {
        background: props => props.palette.primary.main,
        color: props => props.palette.text.main
    },
    buttonSecondary: {
        background:props => props.palette.secondary.main,
        color: props => props.palette.text.main
    }, 
    'text': {
        color: props => props.palette.text.main
    }
}));

function PaletteFormNav(props) {
    const {open, palettes, setOpen, handleSubmit} = props;
    const [themeContext, setThemeContext] = React.useContext(ThemeContext);
    const classes = useStyles(themeContext === 'light' ? {...lightTheme} : {...darkTheme});

    const handleDrawerOpen = () => {
        setOpen(true);
    };   
  
    return (
        <div>
            <CssBaseline />
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
                    <Typography variant="h6" noWrap className={classes.text}>
                        Persistent drawer
                    </Typography>
                    <Link to='/'>
                            <Button
                                variant='contained'
                                className={classes.buttonSecondary}
                            >
                                Go Back
                            </Button>
                        </Link>
                    <PaletteMetaForm
                        palettes={palettes}
                        handleSubmit={handleSubmit}
                        classes={classes}
                    />
                </Toolbar>
                <ThemeToggler/>
            </AppBar>
        </div>
    )
}

export default PaletteFormNav
