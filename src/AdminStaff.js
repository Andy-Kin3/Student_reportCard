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
        axios.post("http://127.0.0.1:3001/t_posts", values).then((response) => {
            alert("SUBMITTED");
        });
    };
    return (
    <div className='staff_form'>
        <Sidebar user="Nfuh Anderson" status="ADMIN" name="Register Student" activity="Add Teacher" statistic="Performance"/>
        <h1>Staff Registration</h1>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            <Form method="post" class="reg_form" encType='multipart/form-data'>
                <Field type="text" name="name" placeholder="Full Name"/><br/><br/>
                <ErrorMessage name='email' component='sup' />
                <Field type="text" name="email" placeholder="email"/><br/><br/>
                <Field type="text" name="address" placeholder="Address"/><br/><br/>
                <ErrorMessage name='phone' component='sup' />
                <Field type="tel" name="phone" placeholder="Phone number"/><br/><br/>
                <ErrorMessage name='password' component='sup' />
                
                Sex:
                <Field type="radio" name="sex" className="gender" value="male"/>Male
                <Field type="radio" name="sex" className="gender" value="female"/>Female<br/><br/>
                <Field type="password" name="password" placeholder="password"/><br/><br/>
                <p>Group A</p>
                <Field component="select" className="group_a">
                    <option>English Language</option>
                    <option>French Language</option>
                    <option>Mathematics</option>
                </Field>
                <p>Group B</p>
                <Field component="select" className="group_b">
                    <option>History</option>
                    <option>Literature</option>
                    <option>Chemistry</option>
                    <option>Physics</option>
                    <option>Economics</option>
                    <option>Geography</option>
                    <option>Geology</option>
                    <option>Computer Science</option>
                    <option>Information Communication and Technology</option>
                    <option>Philosophy</option>
                    <option>Statistics</option>
                    <option>Mechanics</option>
                </Field>
                <p>Group C</p>
                <Field component="select" className="group_c">
                    <option>Sports and Physical Education</option>
                    <option>Food and Nutrition</option>
                    <option>Citizenship</option>
                    <option>Commerce</option>
                </Field><br/><br/>
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