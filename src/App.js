import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Navbaar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/edit/:id" component={Edit} />
      {/* <Route exact path="/view/:id" component={Details} /> */}
    </Switch>
    </div>
  );
}

export default App;
