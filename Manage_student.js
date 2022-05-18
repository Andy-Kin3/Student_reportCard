import React from 'react';
import Sidebar from './Sidebar';
import './Manage_student.css';

function Manage_student() {
  return (
    <div className='main'>
    <Sidebar />
        <div className='info_update'>
          <form method='GET' className='student_form'>
            <table id='tbl' className='student_table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Subjects</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </form>
        </div>
    </div>
  )
}

export default Manage_student