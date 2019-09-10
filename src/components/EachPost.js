import React, {Component} from 'react'
import '../styles/pages.css';
import {connect} from 'react-redux';
import {showFilteredPosts} from '../actions'
import axios from 'axios'

class EachPost extends React.Component{
    constructor (props){
        super(props)

        this.state={
          newPost: {flag:'',board_id:'',topic:'',tag:[],creator:'',members:[],posts:[{postid:'',username:'',data:[]}]},
          postData:[{username:'', data:''}],
          enteredMessage:'',
          profanity:''
        }

    }


componentDidMount(){

        this.props.showFilteredPosts();
}
        

handleChange = (event) =>{
    this.setState({
        [event.target.name] : event.target.value
    })
} 

call = () => {
    console.log(this.state.profanity)
}

                
addCommentsToPosts = (event) =>{
        event.preventDefault()
        let showpost=true
        let boardID = localStorage.getItem("boardId")
        console.log(boardID)
        let post = this.state.postData
        post.push( {boardid: boardID,username: localStorage.getItem("username"),
                        data: this.state.enteredMessage, showpost: showpost})
         this.setState({
             postData:post
         })
        //  console.log(this.state.postData[this.state.postData.length-1])
         let postToEndpoint = this.state.postData[this.state.postData.length-1]
         axios.post('http://192.168.20.87:8002/boards/addpost', postToEndpoint )
        //  .then(res=>console.log(res.data.message))
         .then(response=>{
             if(response.data.message !== 'Post created'){
                 let len = response.data.message.length
                 let str = response.data.message.substring(2,len-2)
                 alert('Please refrain from using foul language like '+str)
             }
         })
        
        //  window.open("/viewpost", "_self")
    }
    
    render(){

        return(
                //  <div className="card" > //style="width: 18rem;">
                // <div className= "card bg-light mb-3">
                // <div className="col-sm-6" class={card.car
                <div class ="row justify-content-center">
                <div class="col-9">
                <div class="card" >
                {/* className={card.cardsize}> */}
                <div class="card-header">
                <div class="commenterImg">
                <img src="https://media.licdn.com/dms/image/C4E0BAQFJWS9dHHT0jA/company-logo_200_200/0?e=2159024400&v=beta&t=WBMIM9eGXy-yXSOJXKZDbq9EL0fv4r9GK6rat3vCSwc" width="30" height="30" alt=""/>
                <b>User Name</b>
                </div>  
                </div>
                <div class="card-body">
                    <h5 class="card-title">Post Title</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Tags</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Like</a>
                    <a href="#" class="card-link">Report</a>
                </div>
                <div class="card-body">
             
                 {this.props.posts && this.props.posts.map((posts,index)=>(
                    <ul class="list-group list-group-flush"  key={index}>
                    <div class="card" >
                    <li class="list-group list-group-flush">{posts.username}: {posts.data}</li>
                    {/* {console.log(posts.username)} */}
                    </div>
                    </ul> 
                    ))} 
                
               
                </div>
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Message" aria-label="Message" 
                    aria-describedby="basic-addon2" name='enteredMessage' value={this.state.enteredMessage} onChange={event => this.handleChange(event)}/> 
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.addCommentsToPosts} >Post</button>
                    </div>
                    </div>
                </div>
                </div>
        
        )
    }


}
const mapStateToProps = state => ({posts: state.postFromReducer });
export default connect (mapStateToProps, {showFilteredPosts: showFilteredPosts})(EachPost)
