import React, {Component} from 'react';
import { Header, Grid } from 'semantic-ui-react';

import db from '../firebase/db.js';

import Assignature from './Assignature';

import './centered.css';

class AssignatureConfiguration extends Component {
  constructor (props) {
    super(props);
    this.updateModel();

    this.state = {
      assignatures: [],
      professorID: -1
    };
  }

  updateModel () {
    db.professors().then((snapshot) => {
      var i=0;
      var val = snapshot.val();
      var assignatures = [];

      for (i=0; i<val.length; i++) {
        if (val[i].name === this.props.name) {
          Object.keys(val[i].assignatures).forEach((key) => {
            assignatures.push({
              name: key,
              hour: val[i].assignatures[key].hour,
              day: val[i].assignatures[key].day
            });

            this[key] = React.createRef();
          });
          break;
        }
      }

      this.setState({ assignatures });
      this.setState({ professorID: i });
    });
  }

  handleChange (model, index) {
    console.log('assignature changed!!', model);
    var a = [...this.state.assignatures];
    a[index] = {...model};
    console.log(a);

    this.setState({
      assignatures: a
    });

    var assignature = {...model};
    delete(assignature.name);
    db.setAssignature(this.state.professorID, assignature, model.name);
  }

  componentDidUpdate () {
    var i;
    var assignatures = this.state.assignatures;
    var ref;

    for (i=0; i<assignatures.length; i++) {
      ref = this[assignatures[i].name].current;
      ref.setSchedule(assignatures[i].day, assignatures[i].hour);
    }

  }

  render () {

    return (
      <div>
        <Header as='h1' textAlign='center'>
          Bienvenido {this.props.name}!
        </Header>
        <Grid
           textAlign='center'
           style={{ height: '100%' }}
           verticalAlign='middle'
           >
          <Grid.Column style={{ maxWidth: '80%' }}>
            {
              this.state.assignatures.map((item, index) => {
                return (
                  <div style={{ margin: '1em' }}
                       key={'assignature-' + index}>
                    <Assignature
                       name={item.name}
                       ref={this[item.name]}
                       model={item}
                       onChange={(model)=>this.handleChange(model, index)}
                      />
                  </div>
                );
              })
            }
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default AssignatureConfiguration;
