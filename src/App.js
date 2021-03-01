import React, {useState} from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
import PaletteList from './Components/PaletteList'
import { generatePalette } from './helpers/colorHelper'
import SingleColorPalette from './Components/SingleColorPalette'
import NewPaletteForm from './Components/NewPaletteForm'

function App() {
  const [palettes, setPalettes] = useState(seedColors)

  const findPalette = (id) => {
    return palettes.find((palette) => {
      return palette.id === id
    })
  }
  const savePalette = newPalette => {
    setPalettes([...palettes, newPalette])
  }

  return (
    <Switch>
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => <NewPaletteForm savePalette={savePalette} {...routeProps}/>}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={routeProps => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
      <Route
        exact
        path='/'
        render={(routeProps) => <PaletteList palettes={palettes} {...routeProps} />}
      />
      <Route
        exact
        path='/palette/:id'
        render={routeProps =>
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />}
      />
    </Switch>
  );
}

export default App;
