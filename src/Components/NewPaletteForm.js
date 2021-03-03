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

const drawerWidth = 400;

const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#222',
      },
      secondary: {
        main: '#333',
      },
    },
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

    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        backgroundColor: '#222',
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        backgroundColor: '#222',
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
}));

function NewPaletteForm({savePalette, history, palettes}) {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [colorValue, setColorValue] = useState('#081212')
    const [hexColorValue, setHexColorValue] = useState('#081212')
    const [colors, setColors] = useState(palettes[0].colors)
    const [newColorName, setNewColorName] = useState('')

    const MAX_NO_OF_COLORS = 20;
    const paletteIsFull = colors.length >= MAX_NO_OF_COLORS;

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
         <ThemeProvider theme={darkTheme}>
            <PaletteFormNav 
                classes={classes} 
                open={open} 
                palettes={palettes}
                handleSubmit={handleSubmit}
                setOpen={setOpen}
            />
            <Drawer
                className={classes.drawer}
                color="primary"
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
                <Button 
                    variant="contained" 
                    color='secondary' 
                    onClick={clearColors}
                >
                    Clear Palette
                </Button>
                <Button 
                    variant="contained" 
                    color='primary'
                    onClick={addRandomColor}
                    disabled={paletteIsFull}
                >
                    Random Color
                </Button>
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
                        value={newColorName}
                        name='newColorName'
                        onChange={handleColorNameChange}
                        validators={['required', 'isColorNameUnique', 'isColorUnique']}
                        errorMessages={['Enter a color name', 'Color name must be unique', 'Color already used']}
                    />
                    <Button
                        variant="contained"
                        color='primary'
                        style={{ backgroundColor: paletteIsFull ? "grey" : hexColorValue }}
                        type='submit'
                        disabled={paletteIsFull}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
                
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

