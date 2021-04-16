import React from 'react';

import "./PersonStyle.css"


class  Person  extends React.Component 
{
    constructor(props) {
        super(props);

        this.state = {
          fullName:'Asma Haouas',
          profession:'Web Developer',
          bio:'Eniso University',
          picture:'/pictureProfile.png',

          intervall: null,
          timer: 0,
        };
      }


      componentDidMount() {
       
        this.setState({
          intervall: setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
          }, 1000),
        });
      }


render() {
        return (
    
    <div className="App">
     
    <br/>   <br/>
        <div class="card">

                    <img src={this.state.picture}  alt="Asma"/>

                    <h1  style={{color:"#d662ac"}} >{this.state.fullName}</h1>
                    <p className="title"> {this.state.profession} </p>
                    <p className="title">{this.state.bio} </p>

                    <div style={{margin: '24px 0'}}>
                        <a href="#"><i className="fa fa-facebook"></i></a> 
                        <a href="#"><i className="fa fa-twitter"></i></a>  
                        <a href="#"><i className="fa fa-linkedin"></i></a>  
                    </div>
                    
                    <p><button>Contact Me</button></p>
                    </div>
                    <h2>Time Interval : {this.state.timer}</h2>
        </div>
      
      );
    }
}


export default Person;
