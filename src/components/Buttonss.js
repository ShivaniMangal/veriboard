import React from 'react'
import {Button,ButtonToolbar} from 'react-bootstrap'
import Login from './Login'
import Register from './Register'

export default class Buttonss extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addModalShow : false,
            addRegisterModal:false,
         
        }
    }
    render(){
        let addModalClose = () =>
        this.setState({addModalShow:false},

            );
        let addModalClose1 = () =>
        this.setState({addRegisterModal:false});
        return(
            <div>
            <ButtonToolbar>
                <Button
                   variant = 'primary'
                   onClick={()=> this.setState({addModalShow  :true})} 
                >Login</Button>
                <Login
                    show={this.state.addModalShow}
                    onHide={addModalClose}
                />
                &nbsp;&nbsp;
                
                <Button
                   variant = 'primary'
                   onClick={()=> this.setState({addRegisterModal  :true})} 
                >Register</Button>
                <Register
                    show={this.state.addRegisterModal}
                    onHide={addModalClose1}
                />
                

            </ButtonToolbar>
            </div>

        )
    }
}
