import React, { useState, useEffect } from 'react'
import clsx from 'clsx';
import {Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

function PaletteFormNav(props) {
    const {classes, open, palettes, setOpen, handleSubmit} = props;
    const [newPaletteName, setNewPaletteName] = useState('')

    useEffect(() => {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => {
            for(let i=0; i<palettes.length; i++) {
                if(value.toLowerCase() === palettes[i].paletteName.toLowerCase()) {
                    return false;
                }
            }
            return true;
        });
    })

    const handlePaletteNameChange = e => {
        setNewPaletteName(e.target.value)
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="primary"
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
                    <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
                    <TextValidator
                        value={newPaletteName}
                        name='newPaletteName'
                        onChange={handlePaletteNameChange}
                        label="Palette Name"
                        validators={['required', 'isPaletteNameUnique']}
                        errorMessages={['Enter palette name', 'Palette name already used']}
                    />
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type='submit'
                        >
                            Save Palette
                        </Button>
                        <Link to='/'>
                            <Button
                                variant='contained'
                                color='secondary'
                            >
                                Go Back
                            </Button>
                        </Link>
                    </ValidatorForm>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default PaletteFormNav
