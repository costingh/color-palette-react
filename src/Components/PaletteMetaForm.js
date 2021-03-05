import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function PaletteMetaForm({palettes, classes, handleSubmit, hideForm}) {
    const [stage, setStage] = useState('form');
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
	
	const showEmojiPicker = () => {
		setStage('emoji')
	}

  const savePalette = (emoji) => {
    const newPalette = {
      paletteName: newPaletteName, 
      emoji: emoji.native
    }
    handleSubmit(newPalette)
  }

    return (
        <div>
          <Dialog open={stage==='emoji'}>
		  	        <Picker onSelect={savePalette} onClose={hideForm} title='Pick an emoji for your palette'/>
          </Dialog>
          <Dialog
            open={stage==='form'}
            onClose={hideForm}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Choose a palette name"}</DialogTitle>
            <ValidatorForm onSubmit={showEmojiPicker}>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please enter a name for your new palette. Make sure it's unique!
                </DialogContentText>
                    <TextValidator
                        value={newPaletteName}
                        name='newPaletteName'
                        onChange={handlePaletteNameChange}
                        fullWidth
                        margin='normal'
                        label="Palette Name"
                        validators={['required', 'isPaletteNameUnique']}
                        errorMessages={['Enter palette name', 'Palette name already used']}
                    />
                
            </DialogContent>
            <DialogActions>
              <Button onClick={hideForm} color="primary">
                Disagree
              </Button>
              <Button 
                    variant="contained" 
                    className={classes.buttonPrimary}
                    type='submit'
                >
                    Save Palette
                </Button>
            </DialogActions>
            </ValidatorForm>
          </Dialog>
        </div>
      );
}

export default PaletteMetaForm

