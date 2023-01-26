import React from "react";
import ReactDOM from "react-dom";
// Step 1. Import react-router functions
import { BrowserRouter, Route, } from "react-router-dom";
import { Switch } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

ReactDOM.render(
<App />,
<BrowserRouter>
  <Switch>
    
    
    <Route path="/about">
      <About />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route exact path="/">
      <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  

document.getElementById("root")
);
