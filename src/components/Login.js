import React from 'react'
import {Modal,Button,Form, ButtonToolbar} from 'react-bootstrap'

import Register from './Register'
export default class App extends React.Component{
  constructor(props){
    super(props);
    
   
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
                  <Form.Control type="email" placeholder="abc@example.com"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
              </Form.Group>
             </Form>
            </div>
             
            </Modal.Body>
            <Modal.Footer>
            <ButtonToolbar>
             
              <Button onClick={this.props.onHide}>Sign in</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            </ButtonToolbar>
            </Modal.Footer>
          </Modal>
            </div>
        )
    }
}
