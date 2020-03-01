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

export default function Confirm({ values, handleChange, nextStep, prevStep }) {
    const classes = useStyles();

    const formContinue = e => {
        e.preventDefault();
        nextStep();
    }

    const formBack = e => {
        e.preventDefault();
        prevStep();
    }

    const { firstName, lastName, email, occupation, bio, city } = values;

    return (
        <>
            <div className={classes.root}>
                <AppBar title="Enter User Details" position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Confirm user Data
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.form}>
                <List>
                <ListItem>
                    <ListItemText primary="First name" secondary={firstName} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Last name" secondary={lastName} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="occupation" secondary={occupation} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="bio" secondary={bio} />
                </ListItem>
                <ListItem>
                    <ListItemText primary="city" secondary={city} />
                </ListItem>
                </List>
                <Button variant="contained" color="primary" onClick={formContinue} style={{ marginTop: 60 }}>
                    Continue
            </Button>
                <Button variant="contained" onClick={formBack} style={{ marginTop: 60 }}>
                    Back
            </Button>
            </div>
        </>
    );
}
