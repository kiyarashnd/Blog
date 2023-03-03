// import './App.css';
// import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Create from './Create';
import Name from './Name';
import BlogDetails from './BlogDetails';

function App() {

  return (
    <Router>
      <div className="App">

        {/* <Navbar></Navbar> */}

        <nav className="navbar">
          <h1>The dojo blog</h1>
          <div className="Links">
            <Link to="/">Home</Link>

            <Link to="/create" style={{
              color: 'white',
              backgroundColor: '#f1356d',
              borderRadius: '8px'
            }}>New blog</Link>

            <Link to="/name">Name</Link>
          </div>
        </nav>

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
              {/* <Name /> */}
              <h1>my name is kiya</h1>
            </Route>

            <Route exact path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;