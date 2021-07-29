import StartPage from "./components/StartPage";
import DashboardToDo from "./components/DashboardToDo";
import DashboardNotToDo from "./components/DashboardNotToDo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={StartPage}/>
          <Route path="/whiteList" component={DashboardToDo}/>
          <Route path="/blackList" component={DashboardNotToDo}/>
        </Switch>
      </Router>
  );
}

export default App;
