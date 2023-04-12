// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';
import Footer from './Footer';
import dayBg from './images/day-bg.png';
import nightBg from './images/night-bg.png';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  const hours = new Date().getHours();
  const bg = (6 < hours < 18) ? dayBg : nightBg;
  return (
    <Router>
      <div className="h-screen bg-cover" style={{ backgroundImage:`url(${bg})`}}>
        < Navbar />
        <div className=" font-serif">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/contacts">
              <Contacts/>
            </Route>
            <Route exact path="/projects">
              <Projects/>
            </Route>
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
