import React, {Component} from 'react';

import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';

import './centered.css';

class Login extends Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

    this.handleBinding = this.handleBinding.bind(this);
  }

  handleBinding (propName, event) {
    var o = {};
    o[propName] = event.target.value;
    this.setState(o);
  }

  render () {
    return (
      <div className="container">
        <Grid
           textAlign='center'
           style={{ height: '100%' }}
           verticalAlign='middle'
           >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
              Accede
            </Header>
            <Form size='large'>
              <Segment>
                <Form.Input
                   fluid
                   icon='user'
                   iconPosition='left'
                   placeholder='Nombre'
                   value={ this.state.username }
                   onChange={(e) => this.handleBinding('username', e)}
                   />
                <Form.Input
                   fluid
                   icon='lock'
                   iconPosition='left'
                   placeholder='Contraseña'
                   type='password'
                   value={ this.state.password }
                   onChange={(e) => this.handleBinding('password', e)}
                   />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
