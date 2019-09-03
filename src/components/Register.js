import React from 'react'
import {Modal,Button,ButtonToolbar,Form} from 'react-bootstrap'


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
               REGISTER
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
             <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="FirstName"/>
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="LastName"/>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="abc@example.com"/>
            </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
              </Form.Group>
              <Form.Group>
                <Form.Label>Retype Password</Form.Label>
                <Form.Control type="password" placeholder="password"/>
              </Form.Group>
             </Form>
            </div>
             
            </Modal.Body>
            <Modal.Footer>
            <ButtonToolbar>
              <Button>Sign Up</Button>
              &nbsp;&nbsp;
              <Button variant="secondary" onClick={this.props.onHide} >Cancel</Button>
            
            </ButtonToolbar>
            </Modal.Footer>
          </Modal>
            </div>
        )
        }
    }
