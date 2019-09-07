import React,{Component} from 'react'
import {Modal,Button,ButtonToolbar,Form} from 'react-bootstrap'
import axios from 'axios'



export default class Register extends Component{
  constructor(props){
    super(props);
    this.state ={
      pass:'',
      pass1:'',
      success:true,
      firstname:'',
      lastname:'',
      username:'',
      email:'',
      password:'',
      data:''
      
    }
  }
 
  handleChange =(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    }
    )
    
  }
  
    
 handleSubmit =() =>{ 
  
    
    if(this.state.password===this.state.pass1){
      // console.log("match")
      // post=()=>{
      
        const response = axios.post('http://192.168.20.87:8003/register/', {firstname:this.state.firstname,lastname:this.state.lastname,username:this.state.username,email:this.state.email,password:this.state.password},)
        .then(res => {
        
      
      const auth=JSON.parse(JSON.stringify(res.data))
      console.log(auth)
      this.setState({
        data:auth.message
      
      })
    

      
      })
      // window.open("http://localhost:3001/","_self")
    //}
    }
    else{
      this.setState({
        success:false
        
    
      })
    }
    
 
  
}
//   post=()=>{
//     axios.post('http://192.168.20.87:8003/register/', {firstname:this.state.firstname,lastname:this.state.lastname,username:this.state.username,email:this.state.email,password:this.state.password},
//       {    
//       headers: {
//           "Content-Type": "application/json"
//       }
//     }
//     .then(res => {
    
  
//       const auth=JSON.parse(JSON.stringify(res.data))
//       console.log(auth)
//   )}
//   window.open('','_self')
//   alert("signed in")
// }
// post=()=>{
  
//   const response = axios.post('http://192.168.20.87:8003/register/', {firstname:this.state.firstname,lastname:this.state.lastname,username:this.state.username,email:this.state.email,password:this.state.password},)
//   .then(res => {
  

// const auth=JSON.parse(JSON.stringify(res.data))
// console.log(auth)
// this.setState({
//   data:auth.message

// })
// this.handleSubmit()
// alert(this.state.data)

// // if(this.state.data === 'welcome'){
// //   window.open("http://localhost:3001/dashboard","_self")
// // }
// })}
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
             <Form >
              <Form.Group controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstname" placeholder="FirstName" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text"  name="lastname"placeholder="LastName" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              {this.state.data?<div style={{color:"red"}}>Username exists</div>:<div></div>}
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
              
             {this.state.success?<div></div>:<div style={{color:"red"}}>Passwords don't match</div>}
              <Form.Group>
                <Form.Label >Retype Password</Form.Label>
                <Form.Control type="password" placeholder="retype-password" name="pass1" onChange={this.handleChange}/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Profile Image:</Form.Label>
                <Form.Control type="file" name="imageupload"/>
              </Form.Group>
             </Form>
            </div>
             
            </Modal.Body>
            <Modal.Footer>
            <ButtonToolbar>
              <Button onClick={this.handleSubmit}>Sign Up</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            
            </ButtonToolbar>
            </Modal.Footer>
          </Modal>
            </div>
        )
        }
    }

   