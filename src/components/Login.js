import React from 'react'
import {Modal,Button,Form, ButtonToolbar,Navbar} from 'react-bootstrap'

import Register from './Register'
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      email:'',
      pass:'',
      userlist:[{
        emailid:'abc@gmail.com',
        password:'abc123'
      },
      {
        emailid:'xyz@gmail.com',
        password:'xyz123'
      }
    ],
      success:false
    }
   
  }
  check =() =>{
   let username
    for(let i=0;i<this.state.userlist.length;i++){
      if((this.state.userlist[i].emailid==this.state.email)&&(this.state.userlist[i].password==this.state.pass)){
        this.state.success=true;
        username = this.state.email
        alert("login successful")
        localStorage.setItem('username',username)
        window.open("http://localhost:3000/dashboard","_self")

        break;
      }
      else{
        alert("login failed")
        break;
      }
    }
   
  }
 handleChange =(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  handleChange1 =(e) =>{
    this.setState({
      pass:e.target.value
    })
    console.log(this.state.pass)
  }

    render(){

      
        return(
          
            <div>
            
            <Modal
            {...this.props}
         
            
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               LOGIN
              </Modal.Title>
             
            </Modal.Header>
            <Modal.Body>
            <div className="container">
             <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="abc@example.com" name="email" onChange ={this.handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" name="pass" onChange={this.handleChange1}/>
              </Form.Group>
             </Form>
            </div>
             
            </Modal.Body>
            <Modal.Footer>
            <ButtonToolbar>
             
              <Button onClick={this.check}>Sign in</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            </ButtonToolbar>
            </Modal.Footer>
          </Modal>
          
        
            </div>
        
        )
    }
}