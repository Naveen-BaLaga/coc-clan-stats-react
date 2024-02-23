import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';
import logoImage from './assets/naveen.jpg'; 

// Import your custom components
import Dashboard from './components/Dashboard';
import Leaderboards from './components/Leaderboards';
import Players from './components/Players';
import ClanWarLeague from './components/ClanWarLeague';
import Wars from './components/Wars';
import Tables from './components/Tables';
import About from './components/About';
import TableData from './components/TableData';

// App component
function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
             <img src={logoImage} alt="Logo" className="logo" /> 
            <div>
          <h1>Clash of Clans Stats Dashboard</h1>
          <p>
            Naveen BaLaga is actively building a Clash of Clans Stats Dashboard that provides game-related insights, resources, statistics, and visualizations in a modern React.js-based web application.
          </p>
          </div>
          </div>
        </header>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/leaderboards">Leaderboards</Link></li>
            <li><Link to="/players">Players</Link></li>
            <li><Link to="/clanwarleague">Clan War League</Link></li>
            <li><Link to="/wars">Wars</Link></li>
            <li><Link to="/tables">Tables</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" render={() => (
              <div>
                <p>Clash of Clans Stats Dashboard Landing Page</p>
                <p>Naveen BaLaga is actively building a Clash of Clans Stats Dashboard that provides game-related insights, resources, statistics, and visualizations in a modern React.js-based web application.</p>
              </div>
            )} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/leaderboards" component={Leaderboards} />
            <Route path="/players" component={Players} />
            <Route path="/clanwarleague" component={ClanWarLeague} />
            <Route path="/wars" component={Wars} />
            <Route path="/tables" component={Tables} />
            <Route path="/tableData/:tableName" component={TableData} />
            <Route path="/about" component={About} />
          </Switch>
        </main>

        <footer>
          <p><strong>Naveen BaLaga</strong></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
