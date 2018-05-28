import React, {Component} from 'react';
import { Grid, Header, Segment, Form, Icon } from 'semantic-ui-react';

import Professor from './Professor';
import db from '../firebase/db';

class ProfessorManagement extends Component {
  constructor (props) {
    super(props);

    this.state = {
      professors: []
    };

    db.professors().then((snapshot) => {
      this.setState({
        professors: snapshot.val()
      }, () => {
        this.forceUpdate();
      });
    });
  }

  handleNameChange (model, index) {
    var newModel = [...this.state.professors];
    newModel[index] = model;

    this.setState({
      professors: newModel
    }, () => {
      db.setProfessor(index, this.state.professors[index]);
    });
  }

  render () {
    return (
      <div>
        <Header as='h1' textAlign='center'>
          Bienvenido administrador!
        </Header>
        <Grid
           textAlign='center'
           style={{ height: '100%' }}
           verticalAlign='middle'
           >
          <Grid.Column style={{ maxWidth: '500px' }}>


            <Segment>
              <Form.Button
                 attached='top'
                 color='teal'
                 >
                <Icon name='plus'/>
                Añadir docente
              </Form.Button>

              <Header color='teal'>
                Docentes contratados
              </Header>

              {
                this.state.professors.map((prof, index) => {
                  return (
                    <Professor
                       name={ prof.name }
                       assignatures={ prof.assignatures }
                       key={'professor-' + index}
                       id={index}
                       onChange={ (model) => this.handleNameChange(model, index) }
                      />
                  );
                })
              }

            </Segment>

          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default ProfessorManagement;
