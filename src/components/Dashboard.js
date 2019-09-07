import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import axios from 'axios';
import '../styles/pages.css';

class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        { title: 'asdsda', username : 'User1', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
        { title: 'uywerywue', username : 'User 2', content: 'Cards that show cryptocurrency-related data, including a chart. Can be used for showing other data, such as fiat currency or stock market prices.'},
      ],
      temp_title: '',
      temp_content: '',
      boards :[],
      boardLength : 0,
      show : false,
      members : [],
      temp_board : ''
    }
  }

  componentDidMount() {
    axios.get('http://192.168.20.97:8080/showboard')
        .then(response => {
            const data = JSON.parse(JSON.stringify(response.data));
            this.setState({
              boards : data,
              boardLength : data.length + 1001 
            });
        })
  }

  componentDidUpdate() {
    axios.get('http://192.168.20.97:8080/showboard')
        .then(response => {
            const data = JSON.parse(JSON.stringify(response.data));
            this.setState({
              boards : data,
              boardLength : data.length + 1001 
            });
        })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (event) => {
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json'
      }
    }
    let current = this.state.posts.slice();
    let inputs = this.state.temp_board.split(",")
    const postData = {
      flag : 'private',
      board_id : this.state.boardLength,
      topic : this.state.temp_title,
      creator : this.state.temp_title,
      members : inputs,
      posts : [{
       postid : 1,
       username : this.state.temp_title,
       data : [this.state.temp_content],
       }]
    };
    current.push({ title: this.state.temp_title, content: this.state.temp_content})
     axios.post('http://192.168.20.97:8080/addboard', postData , axiosConfig)
     .then(res => {
     })
    this.setState({
      posts: current,
      temp_title: '',
      temp_content: '',
      show : false
    })
    event.preventDefault();
  }

  createPost = () => {
    this.setState({
      show:true
    })
  }

  posted = () => {
    this.setState({
      show:false
    })
  }

  openDiscussion = (bid) =>{
    window.open("http://localhost:3000/viewpost", "_self")
    localStorage.setItem("boardId", bid)
  }

  render() {
    let posts =
    <form class = "form-group">  
    <center> 
    <input placeholder = "Discussion Title" class = "form-control" type="text" name="temp_title" value={this.state.temp_title} onChange={this.handleChange} style = {{width : '35rem'}}/><br /><br />
    </center>
    <center>
    <textarea placeholder = "What's on your mind" class = "form-control" name="temp_content" value={this.state.temp_content} onChange={this.handleChange} style = {{width : '35rem', height : '10rem'}}/><br /> <br />
    </center>
    <center>
    <input type = "text" placeholder = "Manage who can see your board" class = "form-control" name="temp_board" value={this.state.temp_board} onChange={this.handleChange} style = {{width : '35rem'}}/>
    </center>
    <br /><br />
    <button class="btn btn-outline-danger" onClick = {this.handleSubmit}>Post Discussion</button>
  </form> 




    let list = this.state.boards.map(
      i => {
        if(i.members){
          let bid = i.board_id
        for(var j = 0; j < i.members.length ; j++){
        if(i.members[j] == "anshbhar112"){
        return <div className="container" style = {{width : '60rem', padding: '2px 16px'}}>
          <hr />
          <div class="card" style = {{width : '50rem', align: 'center', rgba:'(0,0,0,0.2)',transition: '0.3s'}}>
            <div >
              <div >
                <h4 class = "card-title">
                  <center> {i.topic}</center>
                  </h4>
                <h6 class="card-subtitle mb-2 text-muted">{i.creator}</h6>
                <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={50}
                readMoreText="Read more"
                readLessText="Read less"
                >
                {i.posts[0].data}
                </ReadMoreAndLess>
                <br /> <br />
                <button class="btn btn-outline-primary" onClick = {()=>this.openDiscussion(bid)}>Open Discussion</button><br /> <br />&nbsp;&nbsp;
                 <br /> <br />

              </div> 
            </div>
          </div>

          <br />
        </div>
      }}
    }});


    let imgUrl = '..\download.png'

    return (
      <div class = "row" >
        <div class = "column" style = {{ float: 'left', width: '25%', backgroundColor : '#cccccc'}} />
        <div class = "column" style = {{ float: 'left', width: '50%'}}>
        <div className="container" style = {{padding: '2px 16px'}}>
            <br />
            <h3> Veriboard Discussion Forums</h3>
            <h6 style={{color:"#CD040B"}}> Ask. Discuss. Learn.</h6> <br />
            <button class="btn btn-outline-danger center-block" name = "create" onClick = {this.createPost} style = {{float : 'left'}}>Create Post</button>  
          <br/ > <br />
         {this.state.show?posts:<div></div>}
        <center>{list}</center>
      </div>
      </div>
      <div class = "column" style = {{ float: 'left', width: '25%', backgroundColor : '#cccccc'}}/> 
      </div>
    )
  }
}
export default Dashboard; 