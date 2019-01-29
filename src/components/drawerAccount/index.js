import React from "react";
import {List, ListSubheader, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import DevicesIcon from '@material-ui/icons/Devices';
import StarIcon from '@material-ui/icons/Star';
import DirectionsIcon from '@material-ui/icons/Directions';
import ShopIcon from '@material-ui/icons/Shop';
import AtmIcon from '@material-ui/icons/Atm';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: drawerWidth,
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        
    }
});

class DrawerAccount extends React.Component{
    constructor(props){
        super(props);
        this.navigateLink = this.navigateLink.bind(this);
    }
    navigateLink(link){
        this.props.history.push('/'+link);
    }
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav"
                    className={classes.list}
                    subheader={<ListSubheader component="div">MY ACCOUNT</ListSubheader>}
                >
                    <ListItem button>
                        <ListItemIcon><DevicesIcon/></ListItemIcon>
                        <ListItemText inset primary="My Devices"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><StarIcon/></ListItemIcon>
                        <ListItemText inset primary="My Wishlist"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><DirectionsIcon/></ListItemIcon>
                        <ListItemText inset primary="Received Proposals"/>
                    </ListItem>
                </List>
                <Divider/>
                <List component="nav"
                    className={classes.list}
                >
                    <ListItem button>
                        <ListItemIcon><AtmIcon/></ListItemIcon>
                        <ListItemText inset primary="Transaction Management"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><ShopIcon/></ListItemIcon>
                        <ListItemText inset primary="Order History"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AccountBoxIcon/></ListItemIcon>
                        <ListItemText inset primary="Personnel Information"/>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                        <ListItemText inset primary="Account Information"/>
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(DrawerAccount));