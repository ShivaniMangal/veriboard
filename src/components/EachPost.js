import React, {Component} from 'react'
import '../styles/pages.css';

import axios from 'axios'

class EachPost extends Component{
    constructor (props){
        super(props)

        this.state={
            // newPost:{
            // 'id':'',
            // 'post':''.anchor,
            // },
            posts:[{'username':'', 'post':''}],

           newPost: {"flag":'',"board_id":'',"topic":'',"tag":[],"creator":'',"members":[],"posts":[{"postid":'',"username":'',"data":[]}]}
        }

 
    }

    handlePost = (event) => {
        
                fetch('http://192.168.20.97:8080/showboard', {
                    method: 'POST',
                    body: JSON.stringify(this.state.newPost),
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin":"*"
                    }
                }).then(response =>
                    console.log("Post Entered"));
                
                }

componentDidMount(){
        axios.get("http://192.168.20.97:8080/showboard")
            .then(res =>
                {
                    
                    let tempPosts = [{'username':'', 'post':''}]
                    // console.log(res.data[0].posts[0])
                    // if(res.data.posts != null){
                    for(let i = 0; i<res.data.length; i++){
                        //console.log(res.data[i].posts.length)
                        if(res.data[i].posts){
                        for(let j=0;  j<res.data[i].posts.length ; j++){
                            tempPosts.push({'username':res.data[i].posts[j].username,'post':res.data[i].posts[j].data[0]})
                          //  console.log(res.data[1].posts[j].data[0])
                          //  console.log(tempPosts)
                         
                        }
                    }
                    }

                    this.setState({
                        posts:tempPosts

                    })
                 }
               )
            .catch(res => console.log(res))
                
}

     handlePostSend = (event) => {
                    let name = event.target.name;
                    let value = event.target.value;
                    this.setState(prevState => ({ newPost: { ...prevState.newPost, ['post']: value } }))
                    event.preventDefault()
                    // event.target.value=" ";
                }      
                

    
    render(){

        // let posts = <div>
        //     post
        // </div>

        // for(let i = 0; i <= this.state.comments.length; i++ ){
        //     posts = <div>{this.state.comments[i].posts.length}</div>
        // }
        

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
                <div class="card">
                 {this.state.posts && this.state.posts.map((posts,index)=>(
                    <ul class="list-group list-group-flush"  key={index}>
                    <li class="list-group list-group-flush">{posts.username} {posts.post}</li>
                    {/* {console.log(posts.username)} */}
                    </ul> 
                    ))} 
                
                </div>
                </div>
                </div>
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Message" aria-label="Message" 
                    aria-describedby="basic-addon2" onChange={this.handlePostSend}/> 
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" onClick={this.handlePost} >Post</button>
                    </div>
                    </div>
                </div>
                </div>
        
        )
    }
}

export default EachPost;