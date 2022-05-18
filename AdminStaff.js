import React from 'react';
import Sidebar from './Sidebar';
import './AdminStaff.css';
import axios from 'axios';
import * as Yup from 'yup';
import 'yup-phone';
import { Formik, Form, Field, ErrorMessage } from 'formik';

function AdminStaff() {
    const initialValues = {
        name:"",
        email:"",
        address:"",
        phone:"",
        subject:""
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(15).max(25).required("Required"),
        phone: Yup.string().phone('IN').required("Required"),
        email: Yup.string().email("Invalid Format").required("Required"),
        password: Yup.string().required("Required")
      });
    const onSubmit = (values) => {
        axios.post("http://127.0.0.1:3001/auth", values).then((response) => {
            alert("SUBMITTED");
        });
    };
    return (
    <div className='staff_form'>
        <Sidebar user="Nfuh Anderson" status="ADMIN" name="Register Student" activity="Add Teacher" statistic="Performance"/>
        <h1>Staff Registration</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form method="post" class="reg_form" encType='multipart/form-data'>
                Full Name: <Field type="text" name="name" placeholder="Full Name"/><br/><br/>
                <ErrorMessage name='email' component='sup' />
                Email: <Field type="text" name="email" placeholder="email"/><br/><br/>
                <ErrorMessage name='phone' component='sup' />
                Phone Number: <Field type="tel" name="phone" placeholder="Phone number"/><br/><br/>
                
                Sex:
                <Field type="radio" name="sex" className="gender" value="male"/>Male
                <Field type="radio" name="sex" className="gender" value="female"/>Female<br/><br/>
                <ErrorMessage name='password' component='sup' />
                Password: <Field type="password" name="password" placeholder="password"/><br/><br/>
                <p>Group A</p>
                <Field type="radio" name="subject" value="English"/> English Language
                <Field type="radio" name="subject" value="French"/> French Language
                <Field type="radio" name="subject" value="Maths"/> Mathematics
                <p>Group B</p>
                <Field type="radio" name="subject" value="History"/>History
                <Field type="radio" name="subject" value="literature"/> Literature
                <Field type="radio" name="subject" value="Chemistry"/> Chemistry
                <Field type="radio" name="subject" value="physics"/> Physics
                <Field type="radio" name="subject" value="Economics"/> Economics
                <Field type="radio" name="subject" value="Geography"/> Geography
                <Field type="radio" name="subject" value="Geology"/> Geology
                <Field type="radio" name="subject" value="Computer"/> Computer Science
                <Field type="radio" name="subject" value="ICT"/> Information Communication and Technology
                <Field type="radio" name="subject" value="Philosophy"/> Philosophy
                <Field type="radio" name="subject" value="Statistics"/> Statistics
                <Field type="radio" name="subject" value="Mechanics"/> Mechanics
                <p>Group C</p>
                <Field type="radio" name="subject" value="Sports"/> Sports and Physical Education
                <Field type="radio" name="subject" value="FN"/> Food and Nutrition
                <Field type="radio" name="subject" value="Civics"/> Citizenship
                <Field type="radio" name="subject" value="Commerece"/> Commerce
                    <br/><br/>
                <Field type="file" name="image" className="staff_pic" alt='pic'/>
                <div className='button'>
                    <button type="submit">Submit</button>
                    <button type="reset">Cancel</button>
                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default AdminStaff