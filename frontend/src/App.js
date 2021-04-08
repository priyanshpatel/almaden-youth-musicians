// import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Aboutus from './components/pages/Aboutus'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/aboutus" component = {Aboutus} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
