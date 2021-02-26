import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'
import { generatePalette } from './helpers/colorHelper'

function App() {
  console.log(generatePalette(seedColors[4]))
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])} />
    </div>
  );
}

export default App;
