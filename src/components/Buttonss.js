import React from 'react'
import {Button,ButtonToolbar,Navbar,Nav} from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import '../styles/navbar.css'

export default class Buttonss extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addModalShow : false,
            addRegisterModal:false,
         
        }
    }
    logout=()=>{
        localStorage.removeItem("username")
        window.location = "/"
    }

    addModalClose1 = () =>{
        this.setState({addRegisterModal:false});
        localStorage.removeItem("username")
        window.location ="/"
         }
    render(){
        let addModalClose = () =>
        this.setState({addModalShow:false},

            );
         
        return(
           
              
                     <div style={{backgroundColor:"black"}}> &nbsp;&nbsp;  

                          {localStorage.getItem("username")?     
     <div>   <button className="btn btn-outline-danger btn-lg" onClick={this.logout}>logout</button></div>
    :
                           <ButtonToolbar style={{float: "right"}}>
                           
                           <Button
                               className="btn btn-outline-info btn-lg"
                               
                               onClick={()=> this.setState({addModalShow  :true})} 
                           >Login</Button>
                           <Login
                               show={this.state.addModalShow}
                               onHide={this.addModalClose1}
                           />
                           &nbsp;&nbsp;
                          
                           <Button
                               className="btn btn-outline-info btn-lg"
                               
                               onClick={()=> this.setState({addRegisterModal  :true})} 
                           >Register</Button>
                           <Register
                               show={this.state.addRegisterModal}
                               onHide={addModalClose}
                           />
                            </ButtonToolbar>
     
}

                    </div>
                  
              

        )
    }
}