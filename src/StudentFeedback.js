import React from 'react';
import StudentSideBar from './StudentSideBar';
import './StudentFeedback.css';

function StudentFeedback() {
  return (
    <div className='feeds'>
        <StudentSideBar />
        <form className='form_feed' method='GET'>
            <textarea cols={90} rows={30}></textarea>
            <button type='submit' className='bt'>Submit</button>
        </form>
    </div>
  )
}

export default StudentFeedback