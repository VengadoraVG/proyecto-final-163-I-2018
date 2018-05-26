import React, {Component} from 'react';
import { Button, Segment } from 'semantic-ui-react';

import './centered.css';

class DaySelector extends Component {
  constructor (props) {
    super(props);

    this.days = ['L', 'M', 'X', 'J', 'V', 'S'];
    var initiallySelected = [];
    for (var i=0; i<this.props.selection; i++) {
      initiallySelected.push(i);
    }

    this.state = {
      selected: [...initiallySelected]
    };
  }

  handleClick (index, event) {
    var found = this.state.selected.indexOf(index);
    if (found >= 0) {
      this.removeSelection(found);
    } else {
      this.addSelection(index);
    }
  }

  addSelection (index) {
    var arr = [...this.state.selected];

    if (arr.length >= this.props.selection) {
      arr.splice(0,1);
    }

    arr.push(index);
    this.setState({ selected: arr });
  }

  removeSelection (index) {
    var arr = [...this.state.selected];
    arr.splice(index, 1);
    this.setState({ selected: arr });
  }

  getColor (index) {
    if (this.state.selected.indexOf(index) >= 0) {
      return 'green';
    } else {
      return 'red';
    }
  }

  render () {
    return (
      <div>
        <Segment compact>
          {
            this.days.map((item, index) => {
              return (
                <Button
                   icon toggle
                   color={this.getColor(index)}
                   onClick={(e) => this.handleClick(index, e)}
                  key={"day-" + index}>
                  { item }
                </Button>
              );
            })
        }
      </Segment>
      </div>
    );
  }
}

export default DaySelector;
