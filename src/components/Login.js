import React, {Component} from 'react';

import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';

import './centered.css';
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
      <div className="login-form">
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
                   />
                <Form.Input
                   fluid
                   icon='lock'
                   iconPosition='left'
                   placeholder='Contraseña'
                   type='password'
                   />

                <Button color='teal' fluid size='large'>Login</Button>
              </Segment>
            </Form>
            <Message>
              No tienes cuenta? <a href='#'>Regístrate</a>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Login;
