import React, {Component} from 'react';

import DaySelector from './DaySelector';
import HourSelector from './HourSelector';
import { Header } from 'semantic-ui-react';

import './centered.css';

class AssignatureConfiguration extends Component {
  render () {
    return (
      <div>
        <Header as='h1'>Bienvenido { this.props.name }</Header>
        <DaySelector selection={2} />
        <HourSelector />
      </div>
    );
  }
}

export default AssignatureConfiguration;
