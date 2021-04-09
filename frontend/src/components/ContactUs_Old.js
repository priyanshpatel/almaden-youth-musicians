// import React, { Component } from 'react';
// import axios from 'axios'

// class ContactUs extends Component {
//     constructor(props) {
//         super(props);
//         // this.state = {
//         //     firstName: "",a
//         //     lastName: "",
//         //     email: "",
//         //     instrument: "",
//         //     mothersName: "",
//         //     mothersTelephone: "",
//         //     mothersEmail: "",
//         //     school: "",
//         //     grade: "",
//         //     teachersName: "",
//         //     teachersEmail: ""
//         // };
//         this.state = {
//             firstName: "",
//             lastName: "",
//             email: "",
//             instrument: "",
//             mothersNameTelEmail: "",
//             schoolNameGrade: "",
//             teachersNameEmail: "",
//         };
//         this.changeHandler = this.changeHandler.bind(this);
//         this.submitUpdate = this.submitUpdate.bind(this);
//     }
//     changeHandler = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     submitUpdate = (e) => {
//         e.preventDefault();
//         const data = {
//             firstName: this.state.firstName,
//             lastName: this.state.lastName,
//             email: this.state.email,
//             instrument: this.state.instrument,
//             mothersName: this.state.mothersName,
//             mothersTelephone: this.state.mothersTelephone,
//             mothersEmail: this.state.mothersEmail,
//             school: this.state.school,
//             grade: this.state.grade,
//             teachersName: this.state.teachersName,
//             teachersEmail: this.state.teachersEmail
//         }
//     }
//     render() {
//         return (
//             <div>
                
//             </div>
//             /* <div>
//                 <h1>Contact Us</h1>
//                 <h3>Please complete the form below</h3>
//                 <form>
//                     <label>
//                         Student name
//                         <input style={{ fontWeight: "bold" }} onChange={this.changeHandler} placeholder="First Name" type="text" id="firstName" class="form-control" name="firstName" required></input>
//                     </label>
//                 </form>
//             </div> */

//             // <div class="container">
//             //     <div class="row">
//             //         <div class="col-2"></div>
//             //         <div class="col-8">
//             //             <h1>Contact Us</h1>
//             //             <h3>Please complete the form below</h3>
//             //             <hr/>
//             /* <div class="form-group">
//                 <label for="studentFirstName">Student Name</label>
//                 <div class="row">
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="First Name" onChange={this.changeHandler} type="text" id="firstName" class="form-control" name="firstName" required></input>
//                     </div>
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Last Name" onChange={this.changeHandler} type="text" id="lastName" class="form-control" name="lastName" required></input>
//                     </div>
//                 </div>
                
//                 <br />
               
//                 <div class="row">
//                     <div class="col-12">
//                         <label for="email">Student Email Address</label>
//                         <input class="form-input" style={{ fontWeight: "bold" }} onChange={this.changeHandler} type="email" id="email" class="form-control" name="email" required></input>
//                     </div>
//                 </div>
//                 <br />
//                 <div class="row">
//                     <div class="col-12">
//                         <label for="instrument">Instrument</label>
//                         <input class="form-input" style={{ fontWeight: "bold" }} onChange={this.changeHandler} type="text" id="instrument" class="form-control" name="instrument" required></input>
//                     </div>
//                 </div>
//                 <br />
//                 <hr/>
//                 <label for="mothersName">Mom's Details</label>
//                 <div class="row">
//                     <div class="col-4">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Mom's Name" onChange={this.changeHandler} type="text" id="mothersName" class="form-control" name="mothersName" required></input>
//                     </div>
//                     <div class="col-4">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Mom's Telephone" onChange={this.changeHandler} type="number" id="mothersTelephone" class="form-control" name="mothersTelephone" required></input>
//                     </div>
//                     <div class="col-4">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Mom's Email Address" onChange={this.changeHandler} type="email" id="mothersEmail" class="form-control" name="mothersEmail" required></input>
//                     </div>
//                 </div>
//                 <br />
//                 <hr/>
//                 <label for="school">Student's Details</label>
//                 <div class="row">
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Student's School" onChange={this.changeHandler} type="text" id="school" class="form-control" name="school" required></input>
//                     </div>
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Student's Grade" onChange={this.changeHandler} type="text" id="grade" class="form-control" name="grade" required></input>
//                     </div>
//                 </div>
//                 <br />
//                 <label for="teachersName">Private Teacher's Details</label>
//                 <div class="row">
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Teacher's Name" onChange={this.changeHandler} type="text" id="teachersName" class="form-control" name="teachersName" required></input>
//                     </div>
//                     <div class="col-6">
//                         <input class="form-input" style={{ fontWeight: "bold" }} placeholder="Teacher's Email Address" onChange={this.changeHandler} type="email" id="teachersEmail" class="form-control" name="teachersEmail" required></input>
//                     </div>
//                 </div>
//             </div> */
//             //         </div>
//             //         <div class="col-2"></div>
//             //     </div>
//             // </div>
//         )
//     }
// }
// export default ContactUs