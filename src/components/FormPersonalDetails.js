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

export default function FormPersonalDetails({ values, inputsValues, nextStep, prevStep }) {
    const classes = useStyles();

    const formContinue = e => {
        e.preventDefault();
        nextStep();
    }

    const formBack = e => {
        e.preventDefault();
        prevStep();
    }

    const {setOccupation, setCity, setBio} = inputsValues;

    return (
        <>
            <div className={classes.root}>
                <AppBar title="Enter User Details" position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Enter Personal Details
          </Typography>
                    </Toolbar>
                </AppBar>
            </div>

            <div className={classes.form}>
                <TextField
                    hintText="Enter your occupation"
                    label="Occupation"
                    onChange={e => setOccupation(e.target.value)}
                    defaultValue={values.occupation}
                ></TextField>

                <TextField
                    hintText="Enter your City"
                    label="City"
                    onChange={e => setCity(e.target.value)}
                    defaultValue={values.city}
                ></TextField>

                <TextField
                    hintText="Enter your Bio"
                    label="Bio"
                    onChange={e => setBio(e.target.value)}
                    defaultValue={values.bio}
                ></TextField>

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
