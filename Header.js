import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Header.css"

function Header() {
    const history = useHistory();
    return (
        <div className="header">
            <img src="logo.jpeg" alt="S7" className="header_logo"/>
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                <button className="header__optionLine1">
                    Home
                </button>
                <button className="header__optionLine3" onClick={() => history.push('/about')}>
                    About Us
                </button>
                <button className="apply_button" onClick={() => history.push('/Register')}>Apply Now</button>
            </div>
        </div>
    )
}

export default Header
