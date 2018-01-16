import React, {Component} from 'react';
import'../css/Footer.scss';


class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid footer-section">
                <div className="footer-wrapper">
                    <div className="col-md-3 col-sm-12">
                        <h2>John Deegan</h2>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-blog-posts">
                            <h4>Recent Posts</h4>
                            <hr/>
                            <strong>Aliquam quis cursus orci</strong>
                            <p class="footer-blog-date">February 2nd 2018</p>
                            <strong>Cras tortor purus, imperdiet vitae urna scelerisque, euismod commodo arcu.</strong>
                            <p class="footer-blog-date">March 5th 2018</p>
                            <strong>Phasellus fringilla dolor lorem.</strong>
                            <p class="footer-blog-date">April 17th 2018</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-twitter">
                            <h4>Latest Updates</h4>
                            <hr />
                            <div className="update">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <span>
                                    Cras tortor purus, imperdiet vitae urna scelerisque, euismod commodo arcu.
                                </span>
                            </div>
                            <div className="update">
                                <i class="fa fa-twitter" aria-hidden="true"></i>
                                <span>
                                    Cras tortor purus, imperdiet vitae urna scelerisque, euismod commodo arcu.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12">
                        <div className="footer-instagram">
                            <h4>Instagram</h4>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;