import React, {Component} from 'react';
import'../css/Projects.scss';
import colOne from '../css/img/col-one.jpg';
import colTwo from '../css/img/col-two.jpg';
import colThree from '../css/img/col-three.jpg';
import colFour from '../css/img/col-four.jpg';


class Projects extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid projects-section text-center">
                <div className="row">
                    <div className="col-md-4 col-sm-12 no-padding">
                        <div className="project-container-full project-container-one">
                            <div className="box-content">
                                <h2>React Project</h2>
                                <a href="" className="button button-ghost ripple">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6 no-padding">
                        <div className="project-container-half project-container-two">
                            <div className="box-content">
                                <h2>React Project</h2>
                                <a href="" className="button button-ghost">View</a>
                            </div>
                        </div>
                        <div className="project-container-half project-container-three">
                            <div className="box-content">
                                <h2>React Project</h2>
                                <a href="" className="button button-ghost">View</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 no-padding">
                        <div className="project-container-full project-container-four">
                            <div className="box-content">
                                <h2>React Project</h2>
                                <a href="" className="button button-ghost">View</a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Projects;