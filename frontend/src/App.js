// import './App.css';

import Navbar from "./components/Navbar";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Aboutus from './components/pages/Aboutus'
import ImgGallery from './components/pages/ImgGallery'
import Events from './components/pages/Events';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component = {Home} />
          <Route path="/aboutus" component = {Aboutus} />
          <Route path="/gallery" component = {ImgGallery}/>
          <Route path="/events" component = {Events}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
