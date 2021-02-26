import { Route, Switch } from 'react-router-dom'
import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
import { generatePalette } from './helpers/colorHelper'

function App() {
  console.log(generatePalette(seedColors[4]))
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
        render={() => <h1>da</h1>}
      />
    </Switch>

  );
}

export default App;
{/* <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div> */}