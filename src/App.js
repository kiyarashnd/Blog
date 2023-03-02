// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Create from './Create';
import Name from './Name';

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar></Navbar>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/create" component={Create} >
              {/* made Create components*/}
              {/* <Create /> */}
            </Route>

            <Route path="/name">
              <Name />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;