// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Projects from './Projects';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
function App() {
  return (
    <Router>
      <div className="center">
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
