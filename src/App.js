// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Header from './Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Services from './Services'
// import Home from './Home';
// import About from "./About";
// import Register from './Register';
import Admin from './Admin';
import AdminStudent from './AdminStudent';
import Manage_Staff from './Manage_Staff';
import AdminStaff from './AdminStaff';
import Login from './Login';
import Manage_student from './Manage_student';
import StudentHome from './StudentHome';
import StudentActivity from './StudentActivity';
import StudentResult from './StudentResult';
import StudentFeedback from './StudentFeedback';
import TeacherHome from './TeacherHome';
import StudentPerformance from './StudentPerformance';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact strict path="/"
                        component={Login}/>
                    <Route exact path="/staffs"
                        component={Manage_Staff}/>
                    <Route exact path="/students"
                        component={Manage_student}/>
                    <Route exact path="/admin"
                        component={Admin}/>
                    <Route exact path="/adminStudent"
                        component={AdminStudent}/>
                    <Route exact path="/add_staff"
                        component={AdminStaff}/>
                    <Route path="/student_user"
                        component={StudentHome}/>
                    <Route exact path="/schedule"
                        component={StudentActivity}/>
                    <Route exact path="/report_card"
                        component={StudentResult}/>
                    <Route exact path="/student_feed"
                        component={StudentFeedback}/>
                    <Route exact path="/t_home"
                        component={TeacherHome}/>
                    <Route exact path="/performance"
                        component={StudentPerformance}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
