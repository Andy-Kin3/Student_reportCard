import React from 'react';
import Sidebar from './Sidebar';
import './Admin.css';
import {FaChalkboardTeacher} from 'react-icons/fa';
import {BsPersonLinesFill} from 'react-icons/bs';

function Admin() {
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
