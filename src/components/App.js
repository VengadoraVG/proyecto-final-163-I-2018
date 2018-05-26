import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Navigation';
import SignUpPage from './SignUp';
import LoginPage from './Login';
import 'semantic-ui-css/semantic.min.css';

import * as routes from '../constants/routes';

const App = () => (
  <Router>
    <div className="container">
      <Navigation />

      <Route exact path={routes.SIGN_UP.route}
             component={() => <SignUpPage />}
        />

        <Route exact path={routes.LOG_IN.route}
               component={() => <LoginPage />}
          />
    </div>
  </Router>
);

export default App;
