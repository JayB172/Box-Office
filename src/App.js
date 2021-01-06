import React from "react";
import { Switch, Route} from "react-router-dom";
import Navs from "./Components/Navs"
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>
      <Navs />
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
    </Switch>
    </div>
    
  );
}

export default App;
