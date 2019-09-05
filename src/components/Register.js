import React,{Component} from 'react'
import {Modal,Button,ButtonToolbar,Form} from 'react-bootstrap'
import axios from 'axios'



export default class Register extends Component{
  constructor(props){
    super(props);
    this.state ={
      pass:'',
      pass1:'',
      success:false,
      firstname:'',
      lastname:'',
      username:'',
      email:'',
      password:''
      
    }
  }
 
  handleChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    }
    )
    
  }
  
    
  
  check=()=>{
    console.log(this.state.pass)
    console.log(this.state.pass1)
    if(this.state.password===this.state.pass1){
     alert("match")
    }
    else{
      this.setState({
        success:true
      })
    }
  }
  post=()=>{
    axios.post('http://192.168.20.139:8003/register/', {firstname:this.state.firstname,lastname:this.state.lastname,username:this.state.username,email:this.state.email,password:this.state.password},
      {    
      headers: {
          "Content-Type": "application/json"
      }
    }
  )
  window.open('','_self')
}
    render(){
        return(
            <div>
            <Modal
            {...this.props}
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
               REGISTER
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
             <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstname" placeholder="FirstName" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"  name="lastname"placeholder="LastName" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
            <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username"placeholder="abc_123" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="abc@example.com"onChange={this.handleChange}/>
            </Form.Group>
           
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password"   placeholder="password" name="password" onChange={this.handleChange}/>
              </Form.Group>
              
             
              <Form.Group>
                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password" placeholder="retype-password" name="pass1" onChange={this.handleChange1}/>
              </Form.Group>
             </Form>
            </div>
             
            </Modal.Body>
            <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.post}>Sign Up</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            
            </ButtonToolbar>
            </Modal.Footer>
          </Modal>
            </div>
        )
        }
    }

   