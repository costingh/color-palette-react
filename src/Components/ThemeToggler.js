import React, {useContext} from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {ThemeContext} from '../Context/ThemeContext'

import IOSSwitch from '../styles/ThemeTogglerStyles'



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
            label="&#127767;"
            />
            
          </FormGroup>
      </ThemeContext.Provider>
    )
}

export default ThemeToggler


