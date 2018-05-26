import React, {Component} from 'react';

import MultipleSelector from './MultipleSelector';

class HourSelector extends Component {
  render () {
    return (
      <MultipleSelector options={[8, 9, 10, 11, 12, 14, 15, 16, 17, 18]}
                        selection={1}
                        hop={5} />
    );
  }
}

export default HourSelector;
