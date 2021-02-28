import React, { useState, useEffect } from 'react'

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color'
import { Button } from '@material-ui/core';
import DraggableColorBox from './DraggableColorBox'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
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
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));

function NewPaletteForm() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [colorValue, setColorValue] = useState('#081212')
    const [hexColorValue, setHexColorValue] = useState('#081212')
    const [colors, setColors] = useState([{color: 'blue', name: 'blue'}])
    const [newName, setNewName] = useState('')
 
    useEffect(() => {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => {
            for(let i=0; i<colors.length; i++) {
                if(value.toLowerCase() === colors[i].name.toLowerCase()) {
                    return false;
                }
            }
            return true;
        });

        ValidatorForm.addValidationRule('isColorUnique', (value) => {
            for(let i=0; i<colors.length; i++) {
                if(hexColorValue === colors[i].color) {
                    return false;
                }
            }
            return true;
        });
    })

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleColorChange = color => {
        setColorValue(color.rgb)
        setHexColorValue(color.hex)
    };

    const addNewColor = () => {
        const newColor = {
            color: hexColorValue,
            name: newName
        }
        setColors([...colors, newColor])
        setNewName('')
    }

    const handleChange = e => {
        setNewName(e.target.value)
    }

    return (
        <div className={classes.root}>
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
                    <Typography variant="h6" noWrap>
                        Persistent drawer
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="h4">Design Your Palette</Typography>
                <Button variant="contained" color='secondary'>Clear Palette</Button>
                <Button variant="contained" color='primary'>Random Color</Button>
                <ChromePicker
                    color={colorValue}
                    disableAlpha={false}
                    onChange={handleColorChange}
                    
                />
                {/* onChangeComplete={() => console.log('mere')} */}
                <ValidatorForm
                    onSubmit={addNewColor}
                >
                    <TextValidator
                        value={newName}
                        onChange={handleChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter a color name', 'Color name must be unique', 'Color already used']}
                    />
                    <Button
                        variant="contained"
                        color='primary'
                        style={{ backgroundColor: hexColorValue }}
                        type='submit'
                    >
                        Add Color
                    </Button>
                </ValidatorForm>
                
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

                {colors.map(color => {
                    return <DraggableColorBox color={color.color} name={color.name}/>
                })}
            </main>
        </div>
    );
}

export default NewPaletteForm

