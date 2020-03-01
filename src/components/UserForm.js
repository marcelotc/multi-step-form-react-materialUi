import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';

const UserForm = () => {
    const [step, setStep] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [occupation, setOccupation] = useState('');
    const [city, setCity] = useState('');
    const [bio, setBio] = useState('');

    const values = { firstName, lastName, email, occupation, city, bio };
    const inputsValues = { setFirstName, setLastName, setEmail, setOccupation, setCity, setBio };

    const nextStep = () => {
        setStep(step + 1);
    }

    const prevStep = () => {
        setStep(step - 1);
    }

    switch (step) {
        case 1:
            return (
                <FormUserDetails
                    nextStep={nextStep}
                    inputsValues={inputsValues}
                    values={values}
                ></FormUserDetails>
            );
        case 2:
            return (
                <FormPersonalDetails
                    nextStep={nextStep}
                    prevStep={prevStep}
                    inputsValues={inputsValues}
                    values={values}
                ></FormPersonalDetails>
            );
        case 3:
            return (
                <Confirm
                    values={values}
                    nextStep={nextStep}
                    prevStep={prevStep}
                ></Confirm>
            );
        case 4:
            return (<Success></Success>)
    }
}

export default UserForm;