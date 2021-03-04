import Player from './components/Player';
import Hand from './components/Hand'
import './style/App.css';
import Tournament from './components/Tournament';
import IgnitionMapper from './components/mappers/IgnitionMapper';
import MockTournamentComp from './components/MockTournamentComp';
import User from './components/User';
import Welcome from './components/Welcome';
import NewUser from './components/NewUser';

function App() {
  return (
    <div>
      <Welcome/>
      <NewUser/>
    </div>
  );
}

export default App;
