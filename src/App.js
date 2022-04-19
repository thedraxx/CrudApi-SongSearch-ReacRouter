import './App.css';
import CrudApi from './Components/CrudApi'
import {SongSearch} from './Components/SongSearch'
function App() {
  return (
    <div className="App">
        <CrudApi />
        <hr />
        <SongSearch />
    </div>
  );
}

export default App;
