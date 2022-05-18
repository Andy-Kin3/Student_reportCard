import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StudentSideBar from './StudentSideBar';
import './StudentRC.css';

function StudentResult() {
    let { id } = useParams();
  const [postObject, setPostObject ] = useState({});

  useEffect(() => {
    axios.get(`http://127.0.0.1:3001/posts/byId/${id}`).then((response) => {
    setPostObject(response.data);
    });
  }, [])
  return (
    <div className='report_card'>
        <StudentSideBar user={postObject.firstName}/>
        <div className="tables">
            <table border="1" className="table_one">
                <thead>
                    <tr>
                        <th colSpan={17} className='t_header'>Group 1 Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="headings">
                        <td>Subject/Metiere</td>
                        <td colSpan={3}>Term 1</td>
                        <td colSpan={3}>Term 2</td>
                        <td colSpan={3}>Term 3</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                    </tr>
                    <tr>
                        <td>ENGLISH</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>FRENCH</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr >
                        <td>MATHEMATICS</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr >
                        <td colSpan={10} ><b>Grand Total:</b></td>
                        <td>Average:</td>
                        <td></td>
                        <td></td>
                        <td colSpan={4}>Group Remark</td>
                    </tr>
                </tbody>
            </table>
            <table border="1" align="center" id="table_two">
                <thead>
                    <tr>
                        <th colSpan={17} className='t_header'>Group 2 Subjects</th>
                    </tr>
                </thead>
                <tbody>
                    <tr  className="headings">
                        <td>Subject/Metiere</td>
                        <td colSpan={3}>Term 1</td>
                        <td colSpan={3}>Term 2</td>
                        <td colSpan={3}>Term 3</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                    </tr>
                    <tr>
                        <td>BIOLOGY</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>CHEMISTRY</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>CITIZENSHIP</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>COMPUTER</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>GEOGRAPHY</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>HISTORY</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>LITERATURE</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                    <td>PHYSICS</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr >
                        <td colSpan={10}><b>Grand Total:</b></td>
                        <td>Average:</td>
                        <td></td>
                        <td></td>
                        <td colSpan={4}>Group Remark</td>
                    </tr>
                </tbody>
            </table>
            <table border="1" align="center" id="table_three">
                <thead>
                    <tr>
                        <th colSpan={17} className='t_header'>Group 3 Subjects</th>
                    </tr>
                </thead>
                    <tbody>
                    <tr  className="headings">
                        <td>Subject/Metiere</td>
                        <td colSpan={3}>Term 1</td>
                        <td colSpan={3}>Term 2</td>
                        <td colSpan={3}>Term 3</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                    </tr>
                    <tr>
                        <td>LOGIC</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td>PHYSICAL <p>EDUCATION</p></td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                    <td>RELIGION</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                    <td>FOOD AND <p>NUTRITION</p></td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Eval 1</td>
                        <td>Eval 2</td>
                        <td>Avg</td>
                        <td>Avg</td>
                        <td>Coef</td>
                        <td>Total</td>
                        <td>Rank</td>
                        <td>Grade</td>
                        <td>Remarks</td>
                        <td>Teacher</td>
                    </tr>
                    <tr>
                        <td colSpan={10}><b>Grand Total:</b></td>
                        <td>Average:</td>
                        <td></td>
                        <td></td>
                        <td colSpan={4}>Group Remark</td>
                    </tr>
                </tbody>
            </table>
            <div className='code'>
                code:1393242<br/>
                Auth_Num:BCwew123
            </div>
        </div>
    </div>
  )
}

export default StudentResult;