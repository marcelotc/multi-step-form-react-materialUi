import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, TextField, Button } from '@material-ui/core';
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

export default function FormUserDetails({ values, inputsValues, nextStep }) {
    const classes = useStyles();

    const formContinue = e => {
        e.preventDefault();
        nextStep();
    }

    const {setFirstName, setLastName, setEmail} = inputsValues;

    return (
        <>
            <div className={classes.root}>
                <AppBar title="Enter User Details" position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Enter User Details
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.form}>
                <TextField
                    hintText="Enter your first name"
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                    defaultValue={values.firstName}
                ></TextField>

                <TextField
                    hintText="Enter your last name"
                    label="Last Name"
                    onChange={e => setLastName(e.target.value)}
                    defaultValue={values.lastName}
                ></TextField>

                <TextField
                    hintText="Enter your email"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}
                    defaultValue={values.email}
                ></TextField>

                <Button variant="contained" color="primary" onClick={formContinue} style={{ marginTop: 60 }}>
                    Continue
            </Button>
            </div>
        </>
    );
}
