import React, {Component} from 'react';

import DaySelector from './DaySelector';

class AssignatureConfiguration extends Component {
  render () {
    return (
      <div>
        <DaySelector selection="2" />
      </div>
    );
  }
}

export default AssignatureConfiguration;
