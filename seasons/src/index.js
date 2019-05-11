import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    constructor(props){
        super(props);
        //this.state= {lat:null,errorMessage:''};
     }
    state= {lat:null,errorMessage:''};

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div> Error : {this.state.errorMessage} </div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return <Spinner message="please accept location request"/>
    }
    render(){
       return <div className="border red">
                {this.renderContent()}    
            </div>
    }

    //Always use to one time data loading
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(    
            position=>this.setState({lat : position.coords.latitude})
            ,err =>this.setState({errorMessage:err.message})
        );
    };

    //Use when we have to some thing when the state/props get changed
    componentDidUpdate(){
        console.log("My component was just updated ")
    };
};




ReactDom.render(<App />,document.querySelector("#root"));