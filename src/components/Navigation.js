import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from "@material-ui/core/Toolbar";

import Menu from "@material-ui/core/Menu";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";

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
        <AppBar>
          <ToolBar>
            <IconButton
               color="inherit" aria-label="Menu"
               aria-owns={anchorEl? 'navigation-menu': null}
               aria-haspopup="true"
               onClick={this.handleClick}
               >
              <MenuIcon/>
            </IconButton>

            <Menu component="nav"
                  id="navigation-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}>
              {
                Object.entries(routes).map((value) => {
                  return (
                    <MenuItem
                       onClick={this.handleClose}
                       href={ value[1].route }
                       component="a"
                       key={ value[0] }>
                      { value[1].label }
                    </MenuItem>
                  );
                })
              }
      </Menu>

        <Typography variant="title" color="inherit" >
        { this.props.title }
      </Typography>

        </ToolBar>
        </AppBar>
        </div>
    );
  };
};

export default Navigation;
