import Palette from './Components/Palette'
import seedColors from './helpers/seedColors'

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[5]}/>
    </div>
  );
}

export default App;
