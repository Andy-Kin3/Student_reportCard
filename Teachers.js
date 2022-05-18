import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FaChartBar, FaIdBadge } from 'react-icons/fa';
import { AiFillDashboard } from 'react-icons/ai';
import { FiActivity } from 'react-icons/fi';
import { MdCreditScore } from 'react-icons/md';
import { ImFeed } from 'react-icons/im';

function Teachers(props) {
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
                            <Link to="t_home">
                                <span className="item"><AiFillDashboard /> Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="item"><FiActivity /> Attendance</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="item"><FaChartBar /> Update Attendance</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="item"><MdCreditScore /> Students</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <span className="item"><ImFeed /> FeedBack</span>
                            </Link>
                        </li>
                    </ul>
                </div>
        </div>
  </div>
  )
}

export default Teachers