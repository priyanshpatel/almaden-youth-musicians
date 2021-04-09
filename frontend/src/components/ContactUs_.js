import React, { Component } from 'react';
import axios from 'axios';
import { Container, Grid, TextField, FormControl, Input, InputLabel, FormHelperText } from "@material-ui/core";
import './ContactUs.css';

class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            instrument: "",
            mothersNameTelEmail: "",
            schoolNameGrade: "",
            teachersNameEmail: "",
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitUpdate = (e) => {
        e.preventDefault();
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            instrument: this.state.instrument,
            mothersName: this.state.mothersName,
            mothersTelephone: this.state.mothersTelephone,
            mothersEmail: this.state.mothersEmail,
            school: this.state.school,
            grade: this.state.grade,
            teachersName: this.state.teachersName,
            teachersEmail: this.state.teachersEmail
        }
    }
    render() {
        return (
            <div className="main-grid">
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="field" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField fullWidth label="field" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextField fullWidth label="short field" variant="outlined" />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextField fullWidth label=" short field" variant="outlined" />
                        </Grid>
                    </Grid>
                    {/* <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl> */}
                </Container>
            </div>
        )
    }
}
export default ContactUs