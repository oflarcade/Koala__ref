import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';


import './BasketDrawer.css';

const styles = {
    list: {
      width: 'auto',
    },
    fullList: {
      width: 'auto',
    },
  };

class BasketDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list} style={{flex: 1, width:'100%'}} >
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <Divider />
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
        <div>Item 1</div>
      </div>
    );

 

    return (
      <div>
        <Drawer className='basket-drawer-container' anchor="right" open={this.props.show} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

BasketDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasketDrawer);
