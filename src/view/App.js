import React from 'react';
import PrivateRoute from "./PrivateRoute";
import Todos from "./pages/Todos";
import SignIn from "./pages/SignIn";
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';
import ArtistPage from './pages/Artist';

function App() {
  return (
    <>
        <Header />

    <div style={{
      textAlign: "center",
      marginTop: "68px"
    }}>
      <Switch>
     
          <PrivateRoute path="/todos">
            <Todos />
          </PrivateRoute>
          <Route path="/sign-in">
            <SignIn />
          </Route>

          <Route path="/artist">
            <ArtistPage />
          </Route>
      </Switch>
    </div>
    </>
  );
}
export default App;