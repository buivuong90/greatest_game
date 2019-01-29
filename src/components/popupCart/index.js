import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InputIcon from '@material-ui/icons/Input';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
});

class PopupCart extends React.Component{
    constructor(props){
        super(props);
        this.navigateLink = this.navigateLink.bind(this);
    }
    navigateLink(link){
        this.props.onClosePopupCart();
        this.props.history.push('/'+link);
    }
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button
                        onClick={() => this.navigateLink('login')}>
                        <ListItemIcon>
                            <InputIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Login" />
                    </ListItem>
                    <ListItem button
                        onClick={() => this.navigateLink('my-account')}>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                        </ListItemIcon>
                        <ListItemText primary="My Account" />
                    </ListItem>
                </List>
                <Divider/>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(PopupCart));