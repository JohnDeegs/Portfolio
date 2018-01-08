import React, {Component} from 'react';
import Logo from '../css/img/cover15.jpg'
import'../css/Hero.scss';


class Hero extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid hero-section text-center">
                <div className="hero-text">
                    <h1 className="hero-h1"><strong>JOHN</strong>DEEGAN</h1>
                    <h5 className="hero-span">Irish Front-End Developer</h5>
                    <div className="social-icons">
                        <a><i className="ti-twitter-alt"></i></a>
                        <a><i className="ti-instagram"></i></a>
                        <a><i className="ti-linkedin"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;