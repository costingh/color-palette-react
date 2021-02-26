import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
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
        render={() => <h1>PALETTE LIST GOES HERE</h1>}
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
{/* <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div> */}