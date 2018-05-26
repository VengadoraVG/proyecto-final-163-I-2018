import React, {Component} from 'react';
import * as Mat from '@material-ui/core/';

class SignUp extends Component {
  render () {
    return (
      <div>
        <Mat.Paper elevation={4}>
          <Mat.Typography variant="headline" component="h1">
            Regístrate
          </Mat.Typography>
        </Mat.Paper>
      </div>
    );
  }
}

export default SignUp;
