import React, {Component} from 'react';
import'../css/Projects.scss';
import colOne from '../css/img/col-one.jpg';
import colTwo from '../css/img/col-two.jpg';
import colThree from '../css/img/col-three.jpg';


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
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 no-padding">
                        <div className="project-container-half project-container-two col-sm-6">
                            
                        </div>
                        <div className="project-container-half project-container-two col-sm-6">
                            
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 no-padding">
                        <div className="project-container-full project-container-three">
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Projects;