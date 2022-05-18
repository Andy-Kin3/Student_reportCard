import React from 'react';
import './Manage_Staff.css';
import Sidebar from './Sidebar';

function Manage_Staff() {
  return (
    <div className='staffs'>
        <Sidebar />
        <div className='staff_title'>
            <table className='info_entry'>
                <tr>
                    <th>S/N</th>
                    <th>Teachers</th>
                    <th>Phone Number</th>
                    <th>Subject</th>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default Manage_Staff;