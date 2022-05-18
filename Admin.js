import React, {useEffect} from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import './Admin.css';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';

function Admin() {
    // let [studentData, staffData, setStudentData, setStaffData] = useState([]);
    // const studentColumns = [
    //     {title:"FirstName", field:"firstName"},
    //     {title:"LastName", field:"lastName"},
    //     {title:"ClassName", field:"class"}
    // ]

    useEffect(() => {
        axios.get("http://127.0.0.1:3001/t_posts").then((response) => {
            console.log(response);
        });
    }, []);
    return (
        <div className="Admin">
            <Sidebar/>
            <h1>Welcome To The Report System</h1>
            <div className='admin__body'>
                <div className='table'>
                    <div className="form">
                        <form method='get'>
                            <div className="table">
                                <table className='info_comp'>
                                    <thead>
                                        <th className='title'
                                            colSpan={3}><FaChalkboardTeacher/>
                                            STAFF</th>
                                        <th className='title'
                                            colSpan={3}><BsPersonLinesFill/>
                                            STUDENT</th>
                                    </thead>
                                    <thead>
                                        <th>FIRST NAME</th>
                                        <th>LAST NAME</th>
                                        <th>SUBJECT</th>
                                        <th>FIRST NAME</th>
                                        <th>LAST NAME</th>
                                        <th>ClASS NAME</th>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;
