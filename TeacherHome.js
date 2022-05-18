import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Teachers from './Teachers';
import './TeacherHome.css';
import axios from 'axios';

function TeacherHome() {
  let { id } = useParams();
  const [postObject, setPostObject ] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/t_user/byId/${id}`).then((response) => {
    setPostObject(response.data);
    });
  }, [])
  return (
    <div className='main'>
        <Teachers user={postObject.name}/>
        <div className='student_Row'>
          <h1>Welcome Teacher</h1>
          <div className='teacher_name'>
            Full Name: {postObject.name}<br/>
          </div>
          <div className='teacher_sex'>
            Gender: {postObject.sex}<br/>
          </div>
        </div>
    </div>
  )
}

export default TeacherHome