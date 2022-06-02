import React, { useState, useEffect } from 'react';
import StudentSideBar from './StudentSideBar';
import {useParams} from 'react-router-dom'; 
import './StudentHome.css';
import axios from 'axios';

function StudentHome() {
  let { id } = useParams();
  const [postObject, setPostObject ] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/posts/byId/${id}`).then((response) => {
    setPostObject(response.data);
    });
  }, [])
  return (
      <div className='student_home'>
        <StudentSideBar user={postObject.firstName} />
        <div className='student_Row'>
          <h1>Welcome Student</h1>
          <div className='student_name'>
            Name: {postObject.firstName} {postObject.lastName}<br/>
          </div>
          <div className='student_class'>
            Class: {postObject.class}<br/>
          </div>
          <div className='student_sex'>
            Gender: {postObject.sex}<br/>
          </div>
        </div>
      </div>
  )
  }
export default StudentHome