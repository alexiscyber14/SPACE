import './App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import MissionsList from './components/Missions';
import Rockets from './components/Rockets';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<MissionsList />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
