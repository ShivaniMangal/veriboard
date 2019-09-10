import React from 'react'
import axios from 'axios'
import '../styles/profile.module.css'
import { Link } from 'react-router-dom'
import { getPostsDetails } from '../action';
import { getProfilesDetails } from '../action';
import { connect } from 'react-redux'
import { log } from 'util';

class Profile extends React.Component {
    constructor() {
        super();
        // this.state = {
        //     user: "sahila"
        //     // boards: []
        // }
    }
    // componentDidMount() {
    //     axios.get('http://192.168.20.97:8080/showboard')
    //         .then(response => {
    //             this.setState({
    //                 boards: response.data
    //             })
    //         }).catch(error => console.log(error))
    // }
    handleclick = (p) => {
        // console.log(event.target.name)
        localStorage.setItem("boardid", p)
    }
    handletoggle = (p) => {
        console.log(p)
        axios.get('http://192.168.20.87:8004/profile/toggle/'+p)
            .then(response => console.log())
            .catch(error => console.log(error))

        window.open("/profile", "_self")    
    }
    componentDidMount() {

        this.props.getPostsDetails();
        this.props.getProfilesDetails();
        // this.setState({
        // localStorage.setItem("username", "sahila")
        // })
    }
    render() {
        let data = this.props.allposts
        let data1 = this.props.allprofiles
        // console.log(data1)
        // console.log(data1)
        // console.log(this.props.allposts[0])
        let boards = []
        let boardslength = 0
        let disabled = []
        let disabledlength = 0
        // let posts = []
        // if (this.props.allposts.length > 0) { // old entire code 
        //     console.log(this.props.allposts[0].show);

        //     for (let i = 0; i < this.props.allposts.length; i++) { // this is the old loop
                
        //         if (this.props.allposts[i].creator === localStorage.getItem("username")) {
        //             console.log("Varan")

        //             if (this.props.allposts[i].show) {
        //                 boardslength += 1 
        //                 boards.push(

        //                     <div>

        //                         <div class="card">
        //                             <h5 class="card-header"><h6>Topic : {this.props.allposts[i].topic}</h6></h5>
        //                             <div class="card-body">
        //                                 <h6 class="card-title">Board_ID : {this.props.allposts[i].boardid}</h6>
        //                                 <p class="card-text">{this.props.allposts[i].posts[0].data}</p>
        //                                 <div className="row">
        //                                     <div className="col-sm-9">
        //                                         <Link to='/viewpost'> <button class="btn btn-primary" name={this.props.allposts[i].boardid} onClick={this.handleclick}>View Board</button></Link>
        //                                     </div>
        //                                     <div className="col-sm-3">

        //                                         <button type="button" className="btn btn-outline-danger"  >Close Board</button>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         </div><br />
        //                     </div>
        //                 )
        //             }
        //             else {
        //                 { disabledlength += 1 }
        //                 disabled.push(
        //                     <div>
        //                         <div class="card">
        //                             <h5 class="card-header"><h6>Topic : {this.props.allposts[i].topic}</h6></h5>
        //                             <div class="card-body">
        //                                 <h6 class="card-title">Board_ID : {this.props.allposts[i].boardid}</h6>
        //                                 <p class="card-text">{this.props.allposts[i].posts[0].data}</p>
        //                                 <div className="row">
        //                                     <div className="col-sm-9">
        //                                         <Link to='/viewpost' class="btn btn-primary" onClick={this.handleclick(this.props.allposts[i].boardid)}>View Board</Link>
        //                                     </div>
        //                                     <div className="col-sm-3">

        //                                         <button type="button" className="btn btn-outline-danger" >Open Board</button>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         </div><br />
        //                     </div>
        //                 )
        //             }
        //         }
        //     }
        // }


        if (this.props.allprofiles) { // old entire code 
            if(this.props.allprofiles.boards){
            // console.log(this.props.allprofiles.boards.length);
            
            
            for (var i = 0; i < this.props.allprofiles.boards.length; i++) { // this is the old loop
                // console.log("varan")
                
                // if (this.props.allposts[i].creator === localStorage.getItem("username")) {
                    // console.log("Varan")
                    
                    if (this.props.allprofiles.boards[i].show) {
                        let pass= this.props.allprofiles.boards[i].boardid
                        {console.log(this.props.allprofiles.boards[i])}
                        boardslength += 1 
                        boards.push(

                            <div>

                                <div class="card">
                                    <h5 class="card-header"><h6>Topic : {this.props.allprofiles.boards[i].topic}</h6></h5>
                                    <div class="card-body">
                                        <h6 class="card-title">Board_ID : {this.props.allprofiles.boards[i].boardid}</h6>
                                        <p class="card-text">{this.props.allprofiles.boards[i].posts[0].data}</p>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <Link to='/viewpost'> <button class="btn btn-primary" name={this.props.allprofiles.boards[i].boardid} onClick={this.handleclick(this.props.allprofiles.boards[i].boardid)}>View Board</button></Link>
                                            </div>
                                            <div className="col-sm-3">
                                                {/* {console.log("true=>",this.props.allprofiles.boards[i].boardid)} */}
                                                <button type="button" className="btn btn-outline-danger" onClick={() => this.handletoggle(pass)} >Close Board</button>
                                            </div>
                                        </div>

                                    </div>
                                </div><br />
                            </div>
                        )
                    }
                    else {
                        let pass= this.props.allprofiles.boards[i].boardid
                        { disabledlength += 1 }
                        disabled.push(
                            <div>
                                <div class="card">
                                    <h5 class="card-header"><h6>Topic : {this.props.allprofiles.boards[i].topic}</h6></h5>
                                    <div class="card-body">
                                        <h6 class="card-title">Board_ID : {this.props.allprofiles.boards[i].boardid}</h6>
                                        <p class="card-text">{this.props.allprofiles.boards[i].posts[0].data}</p>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <Link to='/viewpost' class="btn btn-primary" onClick={this.handleclick(this.props.allprofiles.boards[i].boardid)}>View Board</Link>
                                            </div>
                                            <div className="col-sm-3">

                                                <button type="button" className="btn btn-outline-danger" onClick={() => this.handletoggle(pass)} >Open Board</button>
                                            </div>
                                        </div>

                                    </div>
                                </div><br />
                            </div>
                        )
                    }
                // }
            }
        }
        }
        
        // {data1 && console.log(this.props.allprofiles.boards)}
        // for(let i=0;i<this.props.allprofiles.boards.length;i++){
        //     boards.push(

        //                     <div>
        //                         <div class="card">
        //                             <h5 class="card-header"><h6>Topic : {this.props.allprofiles.boards[i].topic}</h6></h5>
        //                             <div class="card-body">
        //                                 <h6 class="card-title">Board_ID : {this.props.allposts[i].boardid}</h6>
        //                                 <p class="card-text">{this.props.allposts[i].posts[0].data}</p>
        //                                 <div className="row">
        //                                     <div className="col-sm-9">
        //                                         <Link to='/viewpost' class="btn btn-primary" onClick={this.handleclick(this.props.allposts[i].boardid)}>View Board</Link>
        //                                     </div>
        //                                     <div className="col-sm-3">

        //                                         <button type="button" className="btn btn-outline-danger">Close Board</button>
        //                                     </div>
        //                                 </div>

        //                             </div>
        //                         </div><br />
        //                     </div>
        //                 )
        // }
        // for (let i = 0; i < this.state.boards.length; i++) {
        //     for (let j = 0; j < this.state.boards[i].posts.length; j++) {
        //         if (this.state.boards[i].posts[j].username === this.state.user) {
        //             posts.push(
        //                 <div class="card" style={{ width: 400 }}>
        //                     <div class="card-header">
        //                         <h6>Post_ID:  {this.state.boards[i].posts[j].postid}</h6>
        //                     </div>
        //                     <div class="card-body">
        //                         <p class="card-text">{this.state.boards[i].posts[j].data[0]}</p>
        //                         <footer class="blockquote-footer">from the discussion topic <cite title="Source Title">{this.state.boards[i].topic}</cite></footer>
        //                         <Link to='/viewpost' class="btn btn-primary">View Post</Link>
        //                     </div>

        //                 </div>
        //             )
        //         }
        //     }

        // }

        return (
            <div>
                {/* {data1 && console.log(this.props.allprofiles.boards)} */}
                {data && data1 && <div style={{ backgroundImage: "url(https://www.pixelstalk.net/wp-content/uploads/2016/05/Free-Silver-Backgrounds-Images-Download.png)" }}>
                    <div className="container">
                        <div className="toppane">
                            <div class="row">
                                <div class="col-sm-11"><h1 className="display-3">VeriBoard</h1></div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-4">
                                <img src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="user's DP" width="200" height="150" />
                                <br />
                                {/* <table><th>UserName </th><th> <h6>: {this.state.user}</h6></th>
                                </table> */}
                                <div className="col-sm-12">
                                    User Name : {this.props.allprofiles.username}<br />
                                    First Name   : {this.props.allprofiles.firstname}<br />
                                    Last Name : {this.props.allprofiles.lastname}<br />
                                    Email ID &nbsp;&nbsp;&nbsp;&nbsp;: {this.props.allprofiles.email}
                                </div>
                            </div>
                            <div className="col">
                                <h3>My Boards  </h3>
                                {boardslength > 0 ? boards : <div><h3>-- No Active Boards --</h3></div>}<br />

                                {disabledlength > 0 ? <div> <h3>Closed Boards</h3>{disabled} </div> : <div> <h4> -- All Boards Open -- </h4> </div>}
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}
const mapStateToProps = state => ({ allposts: state.postsdata, allprofiles: state.profilesdata });
export default connect(mapStateToProps, { getPostsDetails, getProfilesDetails })(Profile);
