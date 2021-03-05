import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import PaletteFormNav from './PaletteFormNav';
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
import LayersClearIcon from '@material-ui/icons/LayersClear';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import {ThemeContext} from '../Context/ThemeContext'
import {lightTheme, darkTheme} from '../helpers/Themes'
import useStyles from '../styles/NewPaletteFormStyles';

function NewPaletteForm({savePalette, history, palettes}) {
    const [open, setOpen] = useState(true);
    const [colorValue, setColorValue] = useState('#48AEFF')
    const [hexColorValue, setHexColorValue] = useState('#48AEFF')
    const [colors, setColors] = useState(palettes[0].colors)
    const [newColorName, setNewColorName] = useState('')

    const MAX_NO_OF_COLORS = 20;
    const paletteIsFull = colors.length >= MAX_NO_OF_COLORS;


    const [themeContext, setThemeContext] = React.useState('light');

    const classes = useStyles(themeContext === 'light' ? {...lightTheme} : {...darkTheme});

    
    
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

    const handleSubmit = (newPalette) => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
        newPalette.colors = colors
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
        <ThemeContext.Provider value={[themeContext, setThemeContext]}>
            <div className={classes.root}>
                <PaletteFormNav 
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
            </div>
            </ThemeContext.Provider>
    );
}

export default NewPaletteForm

