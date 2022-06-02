import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { FaIdBadge, FaHome, FaChartBar } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
// import { MdOutlineScore } from 'react-icons/md';
import { ImFeed } from 'react-icons/im';

function StudentSideBar(props) {
  return (
    <div className="wrapper">
        <div className='sidebar'>
            <div className="profile">
                    <img src={props.image} alt="profile_picture" className='pic'/>
                    <h3><FaIdBadge/> {props.user}</h3>
                    <p>Student</p>
                </div>

                <div>
                        <ul>
                        <li>
                            <NavLink to="student_user">
                                <span className="item"><FaHome /> Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="performance">
                                <span className="item"><FiActivity /> Performance</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="schedule">
                                <span className="item"><FaChartBar /> Activity</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="report_card">
                                <span className="item"> Report Card</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="student_feed">
                                <span className="item"><ImFeed /> FeedBack</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </div>
  </div>
  )
}

export default StudentSideBar