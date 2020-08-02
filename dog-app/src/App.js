import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
// import -something-, { -something- } from './-something-';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>
      </nav>
      
      <h1>Testing App Component...</h1>
      <h1>Bootstrap Test...</h1>
      <h1 className="display-1">Here is the test text...</h1>
      {/* <-something- /> */}

      {/* <NavLink exact activeClassName="active-link" to="/-something-">-some-text-here-</NavLink> */}

      {/* <Switch> */}
        {/* use path="/" to assign a default page... */}
        {/* <Route exact path="/-something-" component={-something-} /> */}
        {/* <Route exact path="/-something-" component={() => <-something- name='Muffins"> } /> */}
        {/* <Route exact path="/-something-" render={() => <-something- name='Biscuit"> } /> */}
      {/* </Switch> */}
    </div>
  );
}

export default App;
