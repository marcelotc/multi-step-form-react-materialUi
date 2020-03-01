import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    title: {
        flexGrow: 1,
        textAlign: "center"
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 100,
        marginLeft: 500,
        marginRight: 500
    }
}));

export default function Success() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <AppBar title="Enter User Details" position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Success
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.form}>
      
               <h1>Vlw!</h1>
            </div>
        </>
    );
}
