import React, {Component} from 'react';
import { Button, Segment } from 'semantic-ui-react';

import MultipleSelector from './MultipleSelector';

class DaySelector extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <MultipleSelector options={['L', 'M', 'X', 'J', 'V', 'S']}
                        selection={this.props.selection} />
    );
  }

}

export default DaySelector;
