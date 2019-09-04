import React from 'react';
import ReadMoreAndLess from 'react-read-more-less';
import axios from 'axios'


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
      show : false
    }
  }

  componentDidMount() {
    axios.get('http://192.168.20.97:8080/showboard')
        .then(response => {
            const data = JSON.parse(JSON.stringify(response.data));
            console.log(data)
            this.setState({
              boards : data
            });
        })
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (event) => {
    let current = this.state.posts.slice();
    current.push({ title: this.state.temp_title, content: this.state.temp_content})
    this.setState({
      posts: current,
      temp_title: '',
      temp_content: '',
      show : false
    })
    console.log(this.state.show)
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

  render() {
    let posts =
    <form class = "form-group">  
    <center> 
    <input placeholder = "Discussion Title" class = "form-control" type="text" name="temp_title" value={this.state.temp_title} onChange={this.handleChange} style = {{width : '35rem'}}/><br /><br />
    </center>
    <center>
    <textarea placeholder = "What's on your mind" class = "form-control" name="temp_content" value={this.state.temp_content} onChange={this.handleChange} style = {{width : '35rem', height : '10rem'}}/>
    </center>
    <br /><br />
    <button class="btn btn-outline-danger" onClick = {this.handleSubmit}>Post Discussion</button>
  </form> 




    let list = this.state.boards.map(
      i => {
        for(var j = 0; j < i.members.length ; j++){
          console.log(i.members[j])
        if(i.members[j] == "amal121"){
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
                <button class="btn btn-outline-primary" >Open Discussion</button><br /> <br />&nbsp;&nbsp;
                 <br /> <br />

              </div> 
            </div>
          </div>

          <br />
        </div>
      }
    }
    }
    );



    return (
        <div className="container" style = {{padding: '2px 16px'}}>
            <br />
            <h3> Veriboard Discussion Forums</h3>
            <h6 style={{color:"#CD040B"}}> Ask. Discuss. Learn.</h6> <br />
            <button class="btn btn-outline-danger center-block" name = "create" onClick = {this.createPost} style = {{float : 'left'}}>Create Post</button>  
          <br/ > <br />
         {this.state.show?posts:<div></div>}
        <center>{list}</center>
      </div>
    )
  }
}
export default Dashboard; 