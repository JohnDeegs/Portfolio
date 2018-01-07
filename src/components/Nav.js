import React, {Component} from 'react';
import '../css/Nav.scss';

class Nav extends Component {
    render(){
        return(
        <div className="nav">
            <div className="right-logo">
                <span>
                    John Deegan
                </span>
            </div>
            <ul>
                <li>
                    <a href="#">Contact</a>
                    <i className="down-arrow"></i>
                </li>
                <li>
                    <a href="#">About Me</a>
                    <i className="down-arrow"></i>
                </li>
                <li>
                    <a href="#">Home</a>
                    <i className="down-arrow"></i>
                </li>
            </ul>
        </div>
        )
    }
}

export default Nav;