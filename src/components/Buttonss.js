import React from 'react'
import {Button,ButtonToolbar,Navbar,Nav} from 'react-bootstrap'
import Login from './Login'
import Register from './Register'
import '../styles/navbar.css'

export default class Buttonss extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addLoginShow : false,
            addRegisterShow:false,
         
        }
    }
  
    logout=()=>{
        // localStorage.removeItem("username")
        window.location = "/"
        localStorage.setItem('username',"*")
    }

    addLoginClose = () =>{
        this.setState({addLoginShow:false});
        localStorage.setItem('username',"*")
        window.location ="/"
         }

    addRegisterClose =() =>{
        this.setState({addRegisterShow:false})
        window.location ="/"
    }
    render(){
        
         
        return(
           
              
                     <div style={{backgroundColor:"black", height: "90px"}}> &nbsp;&nbsp;  

                          {localStorage.getItem("username")!='*'?     
     <div>   <button className="btn btn-outline-info" style={{marginTop: "0"}} onClick={this.logout}>logout</button></div>
    :
                           <ButtonToolbar style={{float: "right"}}>
                           
                           <Button
                               className="btn btn-outline-info"
                               
                               onClick={()=> this.setState({addLoginShow  :true})} 
                           >Login</Button>
                           <Login
                               show={this.state.addLoginShow}
                               onHide={this.addLoginClose}
                           />
                           &nbsp;&nbsp;
                          
                           <Button
                               className="btn btn-outline-info"
                               
                               onClick={()=> this.setState({addRegisterShow  :true})} 
                           >Register</Button>
                           <Register
                               show={this.state.addRegisterShow}
                               onHide={this.addRegisterClose}
                           />
                            </ButtonToolbar>
     
}

                    </div>
                  
              

        )
    }
}
