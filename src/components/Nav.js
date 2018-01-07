import React, {Component} from 'react';
import '../css/Nav.scss';

class Nav extends Component {

    constructor(props){
        super(props);
        this.toggleBurger = this.toggleBurger.bind(this);
    }

    toggleBurger(){
        let linksEl = document.querySelector('.narrow-links');
        let responsiveNav = document.querySelector('.narrow-nav');
        if(linksEl.style.display === 'block'){
            linksEl.style.display = 'none';
        }else{
            linksEl.style.display = 'block';
        }
    }
    render(){
        return(
        <nav>  
            <div className="wide-nav">
                <div className="right-logo">
                    <span>
                        JOHN DEEGAN
                    </span>
                </div>
                <ul>
                    <li>
                        <a href="#">CONTACT</a>
                        <i className="down-arrow"></i>
                    </li>
                    <li>
                        <a href="#">ABOUT ME</a>
                        <i className="down-arrow"></i>
                    </li>
                    <li>
                        <a href="#">HOME</a>
                        <i className="down-arrow"></i>
                    </li>
                </ul>
            </div>
            <div onClick={this.toggleBurger} className="narrow-nav">
                <i id="icon-state" className="fa fa-bars fa-2x"></i>
                <div className="right-logo">
                    <span>
                        JOHN DEEGAN
                    </span>
                </div>
            </div>
            <div className="narrow-links">
                <a href="#">HOME</a>
                <a href="#">ABOUT ME</a>
                <a href="#">CONTACT</a>
            </div>
        </nav>
        )
    }
}

export default Nav;