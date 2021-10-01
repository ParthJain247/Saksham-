import './App.css';
import Homepage from './Components/Homepage';
import NavigationBar from './Components/NavigationBar';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Why_Saksham from './Components/Why_Saksham';
import Health from './Components/Health';

function App() {

    return (
    <div className="App">
        <BrowserRouter>
        <NavigationBar />
          <Switch>
            <Route path="/WhySaksham">
              <div className="content-app">
                <Why_Saksham />
              </div>
            </Route>
            <Route path="/Health">
              <div className="content-app">
                <Health />
              </div>
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
