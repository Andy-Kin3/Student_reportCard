import React from 'react';
import StudentSideBar from './StudentSideBar';
import './studentActivity.css';


function StudentActivity() {
  return (
    <div className='studentActivity'>
        <StudentSideBar />
        <table className='timeTable'>
            <tr>
                <th className='days'>Time</th>
                <th className='days'>Monday</th>
                <th className='days'>Tuesday</th>
                <th className='days'>Wednesday</th>
                <th className='days'>Thursday</th>
                <th className='days'>Friday</th>
                <th className='days'>Saturday</th>
            </tr>
            <tr>
                <td className='subject'>8:00-8:45</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>8:45-9:30</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>9:30-10:10</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>10:10-10:55</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>10:55-11:40</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>11:40-12:20</td>
                <td className='subject' colSpan={6}>BREAK TIME</td>
            </tr>
            <tr>
                <td className='subject'>12:20-01:05</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>01:05-1:50</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>01:50-02:35</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
            <tr>
                <td className='subject'>02:35-03:20</td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
                <td className='subject'></td>
            </tr>
        </table>
    </div>
  )
}

export default StudentActivity;