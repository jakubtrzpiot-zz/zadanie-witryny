import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import Animation from './pages/animation';
import Anchor from './pages/anchor';
import Home from './pages/home';
import WomensDay from './pages/womensDay';
import Css from './pages/css';

import 'font-awesome/css/font-awesome.min.css';

const routing = (
  <Router>
    <div>
      <div className="nav">
        <Link className="link" to="/">Strona Główna</Link>
        <Link className="link" to="/animacja">Animacja</Link>
        <Link className="link" to="/kotwice">Kotwice</Link>
        <Link className="link" to="/dzien-kobiet">Dzień Kobiet</Link>
        <Link className="link" to="/css">CSS</Link>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/kotwice" component={Anchor} />
      <Route path="/animacja" component={Animation} />
      <Route path="/dzien-kobiet" component={WomensDay} />
      <Route path="/css" component={Css} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
