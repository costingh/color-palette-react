import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import PaletteFormNav from './PaletteFormNav';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { ChromePicker } from 'react-color'
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import DraggableColorList from './DraggableColorList'
import {arrayMove} from 'react-sortable-hoc';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import LayersClearIcon from '@material-ui/icons/LayersClear';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const drawerWidth = 400;

const lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#f9f3f3',
        },
        secondary: {
            main: '#dddddd',
        },
        primaryButton: {
            main: '#7b2e6a'
        },
        icons: {
            main: '#111'
        },
        hover: {
            main: '#ccc'
        },
        text: {
            main: '#444'
        }
    }
  });
  
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#222',
        },
        secondary: {
            main: '#333',
        },
        primaryButton: {
            main: '#211994'
        },
        icons: {
            main: '#111'
        },
        hover: {
            main: '#444'
        },
        text: {
            main: 'rgb(150, 150, 150)'
        }
    }
  });
  

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
        backgroundColor: props => props.palette.primary.main
    },
    drawerPaper: {
        width: drawerWidth,    
        backgroundColor: props => props.palette.primary.main,
    },
    drawerHeader: {
        backgroundColor: props => props.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(2, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        padding: 0,
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
    header: {
        color: props => props.palette.text.main,
        textAlign: 'center',
        fontSize: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.7px',
        fontWeight: '800',
        marginTop: '40px',
        marginBottom: '30px'
    },
    buttonsContainer: {
        width: '70%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',
        marginBottom: '50px'
    },
    button: {
        width: '85px',
        height: '85px',
        margin: '0px 15px',
        padding: '20px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: props => props.palette.secondary.main,
        color: props => props.palette.text.main,
        transition: 'all 0.4s ease-in-out',
        cursor: 'pointer',
        appearance: 'none',
        fontSize: '11px',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        fontWeight: '500',
        border: 'none',
        outline: 'none',
        animation: 'none',
        '&:hover': {
            background: props => props.palette.hover.main,
        }
    },
    icons: {
        color: props => props.palette.text.main,
        marginBottom: '10px'
    },
    addButton: {
        backgroundColor: props => props.palette.secondary.main,
        width: '70%',
        padding: '15px 25px',
        marginTop: '40px',
        borderRadius: '30px',
        color: props => props.palette.text.main,
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '&:hover': {
            background: props => props.palette.hover.main,
        }
    },
    btnCenter: {
        color: props => props.palette.text.main,
        fontSize: '12px',
        textTransform: 'uppercase',
        letterSpacing: '0.6px',
        fontWeight: '500',
        display: 'flex',
        alignItems: 'center'
    },
    buttonCenterIcon: {
        marginLeft: '15px',
        color: props => props.palette.text.main
    },
    colorPicker: {
        margin: '20px auto',
        width: '330px !important',
        borderRadius: '15px !important',
        background: props => props.palette.primary.main + ' !important',
        '& input': {
            background: props => props.palette.secondary.main + ' !important',
            height: '30px !important',
            borderRadius: '8px !important',
            border: 'none !important',
            outline: 'none !important',
            boxShadow: 'none !important',
            color: props => props.palette.icons.main + ' !important',
        }
    },
    colorValidator: {
        width: '70%',
        display: 'block',
        margin: '0 auto !important',
        background: props => props.palette.secondary.main,
        borderRadius: '5px',
        color: props => props.palette.text.main,
        '& .MuiInputBase-root': {
            width: '100% !important'
        }
    },
    toggleDrawer: {
        padding: theme,
        color: props => props.palette.text.main
    },
    buttonPrimary: {
        background: props => props.palette.primary.main
    },
    buttonSecondary: {
        background:props => props.palette.secondary.main
    }
}));


function NewPaletteForm({savePalette, history, palettes}) {
    const [open, setOpen] = useState(true);
    const [colorValue, setColorValue] = useState('#48AEFF')
    const [hexColorValue, setHexColorValue] = useState('#48AEFF')
    const [colors, setColors] = useState(palettes[0].colors)
    const [newColorName, setNewColorName] = useState('')

    const MAX_NO_OF_COLORS = 20;
    const paletteIsFull = colors.length >= MAX_NO_OF_COLORS;

    const [theme, setTheme] = useState(darkTheme)
    const classes = useStyles({...theme});

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

    const toggleTheme = () => {
        theme.palette.type === 'dark'? setTheme(lightTheme) : setTheme(darkTheme);
    }

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
            name: newColorName
        }
        setColors([...colors, newColor])
        setNewColorName('')
    }

    const handleColorNameChange = e => {
        setNewColorName(e.target.value)
    }

    const handleSubmit = (newPaletteName) => {
        const newPalette = {
            paletteName: newPaletteName,
            id: newPaletteName.toLowerCase().replace(/ /g, "-"),
            colors
        }
        savePalette(newPalette)
        history.push('/')
    }

    const removeColor = colorName => {
        setColors(colors.filter(color => color.name !== colorName))
    }

    const onSortEnd = ({oldIndex, newIndex}) => {
        setColors(arrayMove(colors, oldIndex, newIndex))
    }

    const clearColors = () => {
        setColors([])
    }

    const addRandomColor = () => {
        const allColors = palettes.map(p => p.colors).flat();
        let rand = Math.floor(Math.random() * allColors.length);
        const randomColor = allColors[rand];
        setColors([...colors, randomColor]);
    }
    
    return (
        <div className={classes.root}>
         <ThemeProvider theme={{...theme}}>
            <PaletteFormNav 
                classes={classes} 
                open={open} 
                palettes={palettes}
                handleSubmit={handleSubmit}
                setOpen={setOpen}
            />
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
                        <ChevronLeftIcon className={classes.toggleDrawer}/>
                    </IconButton>
                </div>
                <Divider />
                <Typography variant="p" className={classes.header}>Design Your Palette</Typography>
                <div className={classes.buttonsContainer}>
                    <Button 
                        variant="contained" 
                        color={classes.buttonSecondary}
                        class={classes.button}
                        onClick={clearColors}
                    >
                        <div className={classes.buttonInner}>
                            <LayersClearIcon className={classes.icons} />
                            <div className={classes.text}>Clear</div>
                        </div>
                    </Button>
                    <Button 
                        variant="contained" 
                        color={classes.buttonPrimary}
                        class={classes.button}
                        onClick={addRandomColor} 
                        disabled={paletteIsFull}
                    >
                        <div className={classes.buttonInner}>
                            <AllInclusiveIcon className={classes.icons} />
                            <div className={classes.text}>Random</div>
                        </div>
                    </Button>
                </div>
                <ChromePicker
                    color={colorValue}
                    disableAlpha={false}
                    onChange={handleColorChange}
                    className={classes.colorPicker}
                />
                <ValidatorForm
                    onSubmit={addNewColor}
                    placeholder="asdads"
                >
                    <TextValidator
                        value={newColorName}
                        className={classes.colorValidator}
                        name='newColorName'
                        onChange={handleColorNameChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter a color name', 'Color name must be unique', 'Color already used']}
                        style={{borderBottom: `2px solid ${hexColorValue}`}}
                    />
                    <Button
                        variant="contained"
                        className={classes.addButton}
                        type='submit'
                        disabled={paletteIsFull}
                    >
                        <FingerprintIcon style={{color: paletteIsFull ? "grey" : hexColorValue}}/>
                        <div className={classes.btnCenter}>
                            {paletteIsFull ? "Palette Full" : "Add Color"}
                            <ChevronRightIcon className={classes.buttonCenterIcon}/>
                        </div>
                        <div></div>
                    </Button>
                </ValidatorForm>
                <button onClick={toggleTheme}>Change theme</button>
            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />
                <DraggableColorList 
                    colors={colors} 
                    removeColor={removeColor}
                    axis='xy'
                    onSortEnd={onSortEnd}
                />
            </main>
            </ThemeProvider>
        </div>
    );
}

export default NewPaletteForm

