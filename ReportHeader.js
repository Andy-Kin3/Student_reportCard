import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import './ReportHeader.css';
import { useHistory } from 'react-router-dom';

function ReportHeader() {
  const history = useHistory();
  return (
    <div className="header">
            <img src="" alt="school logo" class="school_logo"/>
            <button type="button" onClick={() => history.push('/login')} id="login_button"><PersonIcon />Login</button>
            <div className="search_components">
                <input type="search" name="search" class="search_text" placeholder="Search a student or teacher"/>
                <button type="submit" id='search_button'><SearchIcon /></button>
            </div>
            <div class="header_row">
                <div class="header_component">
                </div>
            </div>
    </div>
  )
}

export default ReportHeader