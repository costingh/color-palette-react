import React, {useState, useEffect, useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {ThemeContext} from '../Context/ThemeContext'
import { lightTheme } from '../helpers/Themes'

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: 'gray',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#48AEFF',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

function ThemeToggler(props) {
  const [themeContext, setThemeContext] = useContext(ThemeContext);
  const handleChange = () => {
    themeContext === 'light' ? setThemeContext('dark') : setThemeContext('light');
  }

    return (	
      <ThemeContext.Provider value={[themeContext, setThemeContext]}>
        <FormGroup>
            <FormControlLabel
            control={<IOSSwitch value={themeContext}  name="checkedA"  onChange={handleChange} />}
            label="Change theme"
            />
            
          </FormGroup>
      </ThemeContext.Provider>
    )
}

export default ThemeToggler


