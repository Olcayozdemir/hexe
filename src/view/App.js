import React from 'react';
import PrivateRoute from "./PrivateRoute";
import Todos from "./pages/Todos";
import SignIn from "./pages/SignIn";
import {Switch, Route} from "react-router-dom";
function App() {
  return (
    <div style = {{
      textAlign: "center"
    }}>
      <h1>Redux Todo App</h1>
      <Switch>
        <PrivateRoute path = "/todos">
          <Todos />
        </PrivateRoute>
        <Route path = "/">
        <SignIn />
        </Route>
      </Switch>

    </div>
  );
}
export default App;