import React from 'react';

import * as Icons from "@material-ui/icons/";
import * as Mat from "@material-ui/core/";
import * as routes from '../constants/routes.js';

class Navigation extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render () {
    const { anchorEl } = this.state;

    return (
      <div>
        <Mat.AppBar position="static" color="default">
          <Mat.Toolbar>
            <Mat.IconButton
               color="inherit" aria-label="Menu"
               aria-owns={anchorEl? 'navigation-menu': null}
               aria-haspopup="true"
               onClick={this.handleClick}
               >
              <Icons.Menu/>
            </Mat.IconButton>
            <Mat.Typography variant="title" color="inherit">
              Sistema de Seguimiento Académico
            </Mat.Typography>
          </Mat.Toolbar>
        </Mat.AppBar>

        <Mat.Menu component="nav"
                  id="navigation-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}>
          {
            Object.entries(routes).map((value) => {
              return (
                <Mat.MenuItem
                   onClick={this.handleClose}
                   href={ value[1].route }
                   component="a"
                   key={ value[0] }>
                  { value[1].label }
                </Mat.MenuItem>
              );
            })
          }
      </Mat.Menu>
        </div>
    );
  };
};

export default Navigation;
