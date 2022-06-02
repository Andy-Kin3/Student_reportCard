import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaHome, FaChalkboardTeacher, FaBookReader, FaIdBadge, FaChild, FaPersonBooth } from 'react-icons/fa';
import { BsFillPersonPlusFill, BsPersonLinesFill } from 'react-icons/bs';
// import BookMarkAdd from '@material-ui/icons/BookMark';

function Sidebar(props) {
  return (
    <div className="wrapper">
      <div className='sidebar'>
        <div className="profile">
              <img src={props.image} alt="profile_picture" className='pic'/>
              <h3><FaIdBadge/> {props.user}</h3>
              <p>{props.status}</p>
          </div>
        <div>
              <ul>
                <li>
                    <Link to="admin">
                        <span className="item"><FaHome /> Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="adminStudent">
                        <span className="item"><BsFillPersonPlusFill /> Add Student</span>
                    </Link>
                </li>
                <li>
                    <Link to="students">
                        <span className="item"><BsPersonLinesFill /> Manage Student</span>
                    </Link>
                </li>
                <li>
                    <Link to="add_staff">
                        <span className="item"><FaChalkboardTeacher /> Add Staff</span>
                    </Link>
                </li>
                <li>
                    <Link to="staffs">
                        <span className="item"><FaPersonBooth/> Manage Staff</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span className="item"> Add Subjects</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span className="item"><FaBookReader /> Manage Subjects</span>
                    </Link>
                </li>
                <li>
                    <Link to="#">
                        <span className="item"><FaChild /> Attendance</span>
                    </Link>
                </li>
            </ul>
        </div>

      </div>
    </div>
  )
}

export default Sidebar;