import React from "react";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Category from "./components/Category";
import Login from "./components/Login";
import Products from "./components/Products";
import Admin from "./components/Admin";
import PrivateRoute from "./components/PrivateRoute";
import { fakeAuth } from "./components/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category" component={Category} />
          <Route path="/products" component={Products} />
          <Route path="/login" component={Login} />
          <PrivateRoute
            authed={fakeAuth.isAuthenticated}
            path="/admin"
            component={Admin}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
