import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import * as eventActions from "./store/event";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import EventPage from "./components/EventPage";

function App() {
  const dispatch = useDispatch();
  const[isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    //dispatch(eventActions.getEvents());
  }, [dispatch]);

  return (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          <Route path="/" exact>
            <HomePage isLoaded={isLoaded}/>
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/event/:eventId">
            <EventPage />
          </Route>
        </Switch>
      )}
    </>
    );
}

export default App;
