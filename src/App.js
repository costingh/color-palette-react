import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
import PaletteList from './Components/PaletteList'
import { generatePalette } from './helpers/colorHelper'

function App() {

  const findPalette = (id) => {
    return seedColors.find((palette) => {
      return palette.id === id
    })
  }

  return (
    <Switch>
      <Route
        exact
        path='/'
        render={(routeProps) => <PaletteList palettes={seedColors} {...routeProps} />}
      />
      <Route
        exact
        path='/palette/:id'
        render={routeProps =>
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />}
      />
      <Route
        exact
        path='/palette/:paletteId/:colorId'
        render={() => <h1>SINGLE COLOR PAGE!</h1>}
      />
    </Switch>
  );
}

export default App;
