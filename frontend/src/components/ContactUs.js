import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import { Grid, Button } from '@material-ui/core';
import { Container, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import './ContactUs.css';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { Alert, AlertTitle } from '@material-ui/lab';
import axios from 'axios';
import {api_url} from '../config';
// import { Button } from './Button';


class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            instrument: '',
            momsNameTelEmail: '',
            schoolGrade: '',
            teachersNameEmail: '',
            msg: '',
            updateFlag: false,
            errorFlag: false
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
    }
    changeHandler = (e) => {
        // console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
        // console.log(this.state)
    }
    submitUpdate = (e) => {
        e.preventDefault();
        
        console.log("onsubmit", e)
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            instrument: this.state.instrument,
            momsNameTelEmail: this.state.momsNameTelEmail,
            schoolGrade: this.state.schoolGrade,
            teachersNameEmail: this.state.teachersNameEmail,
        };
        console.log(data);

        axios.defaults.withCredentials = true;
        // axios.post('http://localhost:3001/contactus', data).then(response => {
        axios.post(api_url+'/contactus', data).then(response => {
            if (response.status === 200) {
                // Success
                this.setState({
                    msg: 'Submitted Successfully',
                    updateFlag: true,
                    firstName: '',
                    lastName: '',
                    email: '',
                    instrument: '',
                    momsNameTelEmail: '',
                    schoolGrade: '',
                    teachersNameEmail: '',
                })
            } else {
                // Failed
                this.setState({
                    msg: 'Error while submitting',
                    errorFlag: false,
                })
            }
        })
    }

    render() {
        const SubmitButton = withStyles({
            root: {
                background: 'rebeccapurple',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                '&:hover': {
                    transition: 'all 0.3s ease-out',
                    backgroundColor: 'rgb(115, 87, 143)',
                    color: 'white',
                    transition: '250ms',
                }
            },
            label: {
                textTransform: 'capitalize',
            },

        })(Button);
        return (
            <div className="main-grid">
                <Container>
                    <h1>Contact Us</h1>
                    <h3>Please complete the form below</h3>
                    <hr />
                    <br />
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.submitUpdate}
                        onError={errors => console.log(errors)}
                    >
                        <Grid container spacing={2} className="form-container">
                            <Grid item xs={12} md={6}>
                                {/* <TextField fullWidth label="Student First Name" variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="First Name"
                                    onChange={this.changeHandler}
                                    name="firstName"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} md={6}>
                                {/* <TextField fullWidth label="Student Last Name" variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Last Name"
                                    onChange={this.changeHandler}
                                    name="lastName"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.lastName}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* <TextField fullWidth label="Student Email Address" variant="outlined" type="email" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Student Email Address"
                                    onChange={this.changeHandler}
                                    name="email"
                                    variant="outlined"
                                    validators={['required', 'isEmail']}
                                    errorMessages={['this field is required', 'email is not valid']}
                                    value={this.state.email}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* <TextField fullWidth label="Instrument" variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Instrument"
                                    onChange={this.changeHandler}
                                    name="instrument"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.instrument}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* <TextField fullWidth label="Mom's Name and Telephone and Email Address" multiline rows={3} variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Mom's Name, Telephone and Email Address"
                                    multiline
                                    rows={3}
                                    onChange={this.changeHandler}
                                    name="momsNameTelEmail"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.momsNameTelEmail}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* <TextField fullWidth label="Student's School and Grade" multiline rows={2} variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Student's School and Grade"
                                    multiline
                                    rows={2}
                                    onChange={this.changeHandler}
                                    name="schoolGrade"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.schoolGrade}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* <TextField fullWidth label="Private Teacher's Name and Email Address" multiline rows={2} variant="outlined" required onChange={this.changeHandler} /> */}
                                <TextValidator
                                    fullWidth
                                    label="Private Teacher's Name and Email Address"
                                    multiline
                                    rows={2}
                                    onChange={this.changeHandler}
                                    name="teachersNameEmail"
                                    variant="outlined"
                                    validators={['required']}
                                    errorMessages={['this field is required']}
                                    value={this.state.teachersNameEmail}
                                />
                            </Grid>
                            <Grid item xs={6} md={12}>
                                {/* {this.state.updateFlag ? <div class="alert alert-success" role="alert">{this.state.msg}</div> : null} */}
                                {this.state.updateFlag ? <Alert severity="success"><AlertTitle>Success</AlertTitle>{this.state.msg}</Alert> : null}
                                {this.state.errorFlag ? <Alert severity="error"><AlertTitle>Error</AlertTitle>{this.state.msg}</Alert> : null}
                            </Grid>
                            <Grid item xs={6} md={12}>
                                <SubmitButton type="submit">Submit</SubmitButton>
                            </Grid>
                        </Grid>
                        
                    </ValidatorForm>
                </Container>
            </div>
        )
    }
}
export default ContactUs;