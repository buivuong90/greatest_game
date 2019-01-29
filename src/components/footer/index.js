import React from "react";
import {Grid, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
        backgroundColor: '#151515',
        paddingTop: 15,
        paddingBottom: 20,
        color: '#fff'
    },
    inner: {
        width: '90%'
    },
    text: {
        fontSize: '11px',
        color: '#666',
        marginBottom: 20
    },
    textBtn: {
        padding: 0,
        fontSize: '11px',
        marginBottom: 20,
        color: '#666',
        marginTop: 0,
        minHeight: 'auto'
    },
    title: {
        marginBottom: 15
    },
    divider: {
        marginTop: 20,
        paddingTop: 20,
        borderTop: '1px solid rgba(238, 238, 238, 0.3)',
        color: '#fff',
        fontSize: 12,
        width: '90%'
    },
    link: {
        display: 'block',
        flexGrow: 1
    }
});

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {classes} = this.props;
        return (
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                className={classes.root}>
                <Grid item container
                    direction="row"
                    spacing={32}
                    className={classes.inner}>
                    <Grid item md={3} sm={6}>
                        <Typography color={'inherit'}
                            gutterBottom
                            variant="subtitle1"
                            className={classes.title}>
                            SWAP*EZ
                        </Typography>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            className={classes.text}>
                            Lorem Ipsum is simply dummy text.
                        </Typography>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            className={classes.text}>
                            (098)-686-666888
                        </Typography>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            className={classes.text}>
                            email@swap*ez.com
                        </Typography>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            className={classes.text}>
                            248 Avenue, Quebec, Canada
                        </Typography>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            variant="subtitle1"
                            className={classes.title}>
                            PRODUCTS
                        </Typography>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Smart Phones
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Tablet Devices
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Smart Watches
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Sell Products
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Exchange Products
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            variant="subtitle1"
                            className={classes.title}>
                            MY ACCOUNT
                        </Typography>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Registration Account
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                My Own Cart
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Checkout Cart
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                My Own Account
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                My Own Wishlist
                            </Button>
                        </div>
                    </Grid>
                    <Grid item md={3} sm={6}>
                        <Typography color={'inherit'}
                            gutterBottom
                            noWrap
                            variant="subtitle1"
                            className={classes.title}>
                            ABOUT
                        </Typography>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Job Oppoturnities
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Become Investors
                            </Button>
                        </div>
                        <div>
                            <Button color={'inherit'}
                                className={classes.textBtn}>
                                Contact Swap*Ez
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid className={classes.divider}
                    item container
                    direction="row"
                    spacing={32}>
                    <Typography noWrap gutterBottom className={classes.link} color="inherit">
                        © Swap*EZ 2018. All Rights Reserved.
                    </Typography>
                    <Typography noWrap gutterBottom className={classes.link} color="inherit"
                        style={{textAlign: 'right'}}>
                        Canada
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(Footer);