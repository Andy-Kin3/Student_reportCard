import React from 'react';
import StudentSideBar from './StudentSideBar';
import './StudentPerformance.css';

function StudentPerformance() {
  return (
    <div className='student_perfomance'>
        <StudentSideBar />
        <div className='performance_table'>
            <table className='perfomance_table'>
                <thead>
                    <tr>
                        <th>Subjects</th>
                        <th colSpan={3} className='scores'>Scores</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>History</td>
                        <td>20</td>
                        <td>20</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Economics</td>
                        <td>12</td>
                        <td>12</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Geography</td>
                        <td>7</td>
                        <td>7</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
            <div className='bar'>
                <h1 className='pTitle'>Performance Rate</h1>
                <p>History</p>
                <div className='bar_chart'>
                    <div className='skill history'></div>
                </div>
                <p>Economics</p>
                <div className='bar_chart'>
                    <div className='skill econs'></div>
                </div>
                <p>Geography</p>
                <div className='bar_chart'>
                    <div className='skill geo'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentPerformance