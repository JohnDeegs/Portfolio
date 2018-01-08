import React, {Component} from 'react';
import'../css/Selected.scss';


class Selected extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-fluid selected-section text-center">
                <h5 className="text-center"><strong>SELECTED PROJECTS</strong></h5>
            </div>
        );
    }
}

export default Selected;