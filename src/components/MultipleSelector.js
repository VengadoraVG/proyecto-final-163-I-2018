import React, {Component} from 'react';
import { Button, Segment, Table } from 'semantic-ui-react';

import './compact.css';

class MultipleSelector extends Component {
  constructor (props) {
    var i;
    var initiallySelected = [];

    super(props);

    this.state = {
      selected: [...initiallySelected],
      slices: []
    };

    for (i=0; i<this.props.selection; i++) {
      initiallySelected.push(i);
    }

  }

  getIndex (hop, index) {
    if (this.props.hop) {
      return Math.round(hop * (this.props.hop) + index);
    }
    return index;
  }

  getSlices () {
    var i;
    var last = 0;
    var slices = [];

    if (this.props.hop) {
      for (i=1; i<=(this.props.options.length / this.props.hop); i++) {
        slices.push(this.props.options.slice(last, this.props.hop*i));
        last = this.props.hop * i;
      }
    } else {
      slices.push(this.props.options);
    }

    console.log(slices);
    return slices;
  }

  handleClick (hop, index, event) {
    var found;
    index = this.getIndex(hop, index);
    found = this.state.selected.indexOf(index);
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
    this.getSlices();
    return (
      <div>
        <Segment compact>
          <Table className="compact-table">
            <Table.Body>
              {
                this.getSlices().map((item, index) => {
                  return (
                    <Table.Row key={"slice-" + index}>
                      {
                        ((hop) => {
                          return item.map((item, index) => {
                            return (
                              <Table.Cell
                                 key={"option-" + this.getIndex(hop, index)}>
                                <Button
                                   icon toggle fluid
                                   color={this.getColor(this.getIndex(hop, index))}
                                   onClick={
                                     (e) => this.handleClick(hop, index, e)
                                    }
                                  >
                                  { item }
                                </Button>
                              </Table.Cell>
                            );
                          }, this);
                        })(index)
                      }
                    </Table.Row>
                  );
                }, this)
              }
      </Table.Body>
        </Table>
      </Segment>
      </div>
    );
  }
}

export default MultipleSelector;
