import React, {Component} from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import './global.css';
import Navigation from './Navigation.js';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render () {
    return (
      <div className="container">
        <Navigation title="Login"/>


        <div className="centered">
          <div>
            <form noValidate autoComplete="off">

              <p>asidjfoaisdjfoijasdofijsaoidfj</p>
              <TextField label="nombre de usuario"/>

            </form>
          </div>
        </div>

        <Grid container className="centered">
          <Grid item xs={3} sm={1}/>
          <Grid item xs={3} sm={1}>
            <Paper className="card">asdf</Paper>
          </Grid>
          <Grid item xs={3} sm={1}/>
        </Grid>

      </div>
    );
  }
}

export default Login;
