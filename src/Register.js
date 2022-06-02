import React from 'react'
import { useHistory } from 'react-router-dom'

function Register() {
    const history = useHistory();
    return (
        <div className="Reg_form">
            <h1>Register for Internship Or TIC summer school</h1>
            <form>
                First: <input className="firstName" type="text" value="Enter your first Name" required/>
                Last: <input className="lastName" type="text" value="Enter last Name" required/><br/><br/>
                Sex:  Male <input className="sex" type="radio" value="male"/>
                Female <input className="sex" type="radio" value="female"/><br/><br/>
                Age: <input className="age" type="number"/><br/><br/>
                School: <input className="school" type="text"/><br/><br/>
                Department: <input className="dpt" type="text"/><br/><br/>
                Option: <input className="option" type="text"/><br/><br/>
                Year: <select>
                    <option className="year_one">Year one</option>
                    <option className="year_two">Year two</option>
                    <option className="year_three">Year three</option>
                </select><br/><br/>
                <button >Submit</button>
                <button onClick={() => history.push('/')}>Cancel</button>
            </form>
        </div>
    )
}
 
export default Register
