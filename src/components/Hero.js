import React, {Component} from 'react';
import'../css/Nav.scss';


class Hero extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <img src="../css/img/cover15.png" />
            </div>
        );
    }
}

export default Hero;