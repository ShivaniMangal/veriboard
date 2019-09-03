import React, {Component} from 'react'

class EachPost extends Component{
    constructor (props){
        super(props)

        this.state={
            newPost:{
            'id':'',
            'post':''.anchor,
            },
            comments:[]
        }

    }

    handlePost = (event) => {
        
                fetch('http://localhost:3000/newPost', {
                    method: 'POST',
                    body: JSON.stringify(this.state.newPost),
                    headers: {
                        "Content-Type": "application/json"
                    }
                }).then(response =>
                    console.log("Post Entered"));
                
                }

// componentDidMount(){
//     fetch('http://localhost:3000/newPost')
//     .then(response => response.json() )
//     .then(json => console.log(json.data))
//      .then(json=> this.setState({comments:json.data}))
// }

     handlePostSend = (event) => {
                    let name = event.target.name;
                    let value = event.target.value;
                    this.setState(prevState => ({ newPost: { ...prevState.newPost, ['post']: value } }))
                    event.preventDefault()
                    // event.target.value=" ";
                }      
                

    
    render(){
        return(
                //  <div class="card" > //style="width: 18rem;">
                // <div class= "card bg-light mb-3">
                // <div class="col-sm-6" class={card.car
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
                <div class="card-text">
                {this.state.comments.map((comment,index)=>(
                    <ul key={index}>
                    <li >{comment.post}</li>
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