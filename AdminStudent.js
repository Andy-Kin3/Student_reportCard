import React from 'react';
import Sidebar from './Sidebar';
import './AdminStudent.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import axios from 'axios';

function AdminStudent() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    image: '',
    age: '',
    phone:'',
    password: '',
    subject: [],
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3).max(15).required("Required"),
    lastName: Yup.string().min(3).max(15).required("Required"),
    phone: Yup.string().phone().required("Required"),
    email: Yup.string().email("Invalid Format").required("Required"),
    password: Yup.string().required("Required")
  });

  const onSubmit = (data) => {
    axios.post("http://127.0.0.1:3001/auth", data).then(() => {
      alert("SUBMITTED");
  });
  };
  return (
    <div className="student__admission">
        <Sidebar user="Nfuh Anderson" status="ADMIN" name="Register Student" activity="Add Teacher" statistic="Performance"/>
        <div className="report_entry">
          <h1>Student Registration</h1>
          <div className='reg_form'>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              <Form method="post" name="form" encType='multipart/form-data'>
                <div className='input'>
                  <ErrorMessage name="firstName" component="sup"/>
                  First Name: <Field type="text" name="firstName" maxLength="70" placeholder="First Name" /><br/><br/>
                  <ErrorMessage name="lastName" component="sup"/>
                  Last Name: <Field type="text" name="lastName" maxLength="70" placeholder="Last Name" /><br/><br/>
                  <ErrorMessage name="email" component="sup"/>
                  Email: <Field type='email' name='email' placeholder='email'/><br/><br/>
                  Image: <Field type="file" name="image" /><br/><br/>
                  Age: <Field type="number" name="age"/><br/><br/>
                  Sex:
                  <Field type="radio" name="sex" className="gender" value="male"/>Male
                  <Field type="radio" name="sex" className="gender" value="female"/>Female<br/><br/>
                  {/* Status: <Field type="text" name="class" component="select" >
                    <option>Staff</option>
                    <option>Student</option>
                  </Field><br/><br/> */}
                  Class: <Field type="text" name="class" component="select" >
                    <option>Form 1</option>
                    <option>From 2</option>
                    <option>Form 3</option>
                    <option>Form 4</option>
                    <option>Form 5</option>
                    <option>LowerSixth</option>
                    <option>upperSixth</option>
                  </Field><br/><br/>
                  PhoneNumber: <Field type="tel" name="phone" placeholder="123-45-678"/><br/><br/>
                  <ErrorMessage name="password" component="span"/>
                  Password: <Field type="password" name="password" placeholder="password" /><br/><br/>
                  <ErrorMessage name="c_password" component="span"/>
                  Confirm Password: <Field type="password" name="c_password" placeholder="password" />
                  {/* <input type="image" name="student_image" value="Enter image here" class="imager" height="240" width="240" alt='pic'/> */}
                </div>
                <h2 className='h'>Subjects:</h2>
                <div className='subject_table'>
                  English Language<Field type="checkbox" name="subject" className="container" value="english"/> 
                  History<Field type="checkbox" name="subject" className="container" value="history"/> 
                  Food and Nutrition<Field type="checkbox" name="subject" className="container" value="food"/> 
                  French Language<Field type="checkbox" name="subject" className="container" value="french"/> <hr/>
                  Chemistry<Field type="checkbox" name="subject" className="container" value="chemistry"/> 
                  Logic <Field type="checkbox" name="subject" className="container" value="logic"/>       
                  Pure Mathematics<Field type="checkbox" name="subject" className="container" value="maths"/> 
                  Literature In English<Field type="checkbox" name="subject" className="container" value="literature"/> <hr/>
                  Religion<Field type="checkbox" name="subject" className="container" value="religion"/> 
                  Physics<Field type="checkbox" name="subject" className="container" value="physics"/> 
                  Physical Education<Field type="checkbox" name="subject" className="container" value="sports"/> 
                  Economics<Field type="checkbox" name="subject" className="container" value="economics"/> <hr/>
                  Commerce<Field type="checkbox" name="subject" className="container" value="commerce"/> 
                  Geography<Field type="checkbox" name="subject" className="container" value="geography"/> 
                  Citizenship<Field type="checkbox" name="subject" className="container" value="citizenship"/> 
                  Computer Science<Field type="checkbox" name="subject" className="container" value="computer"/> <hr/>
                  Geology<Field type="checkbox" name="subject" className="container" value="geology"/> 
                  Philosophy<Field type="checkbox" name="subject" className="container" value="philosophy"/> 
                  Additional Mathematics<Field type="checkbox" name="subject" className="container" value="add_maths"/> 
                  Statistics<Field type="checkbox" name="subject" className="container" value="statistics"/> <hr/>
                  ICT<Field type="checkbox" name="subject" className="container" value="ict"/>
                  Mechanics<Field type="checkbox" name="subject" className="container" value="mechanics"/> 
                      
                </div>
                <div className='buttons'>
                  <button type="submit" name="submit" className="submit_button">Submit</button><br/>
                  <button type="reset" name='cancel' className="reset_button">Cancel</button>
                </div>
              </Form>
            </Formik>
          </div>
      </div>
    </div>
  )
}


export default AdminStudent;