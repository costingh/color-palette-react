import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
import PaletteList from './Components/PaletteList'
import { generatePalette } from './helpers/colorHelper'
import SingleColorPalette from './Components/SingleColorPalette'
import NewPaletteForm from './Components/NewPaletteForm'

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
        path="/palette/new"
        render={() => <NewPaletteForm />}
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
    </Switch>
  );
}

export default App;
