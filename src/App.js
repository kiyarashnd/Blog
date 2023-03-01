// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  //dynamic values :
  // const title = 'Wellcome to new blog';
  // const like = 50;
  // const person = { name: 'kiya', age: 23 };//we can't use object and boolean
  // const link = "http://www.google.com";
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Navbar></Navbar>
      <div className="content">
        {/* <h1>{title}</h1>
        <p>Liked {like} times</p>
        <p>person aga :{person.age}</p>
        <p>{10}</p>
        <p>{"hello ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 20}</p>
        <a href={link}>google site</a>
        <p>{link}</p>
        <p>{like}</p> */}
        <Home />
      </div>
    </div>
  );
}

export default App;