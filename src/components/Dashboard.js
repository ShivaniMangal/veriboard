import React from 'react';
//import './styles.css'
import ReadMoreReact from 'read-more-react';
import ReadMoreAndLess from 'react-read-more-less';
import {Modal,Button,ButtonToolbar,Form} from 'react-bootstrap'
// import Newpost from './Newpost'
import {Link} from 'react-router-dom'

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
      show : false
    }
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
    <button class="btn btn-outline-primary" onClick = {this.handleSubmit}>Post Discussion</button>
  </form> 




    let list = this.state.posts.map(
      i => {
        return <div className="container" style = {{width : '60rem', padding: '2px 16px'}}>
          <hr />
          <div class="card" style = {{width : '50rem', align: 'center', rgba:'(0,0,0,0.2)',transition: '0.3s'}}>
            <div >
              <div >
                <h4 class = "card-title">
                  <center> {i.title}</center>
                  </h4>
                <h6 class="card-subtitle mb-2 text-muted">Username</h6>
                <ReadMoreAndLess
                ref={this.ReadMore}
                className="read-more-content"
                charLimit={50}
                readMoreText="Read more"
                readLessText="Read less"
                >
                 {i.content}
                </ReadMoreAndLess>
                 <br /> <br />
                 <Link to ='/viewpost'><button class="btn btn-outline-primary" >Open Discussion</button></Link><br /> <br />&nbsp;&nbsp;
              </div> 
            </div>
          </div>

          <br />
        </div>

      }
    );



    return (
        <div className="container" style = {{padding: '2px 16px'}}>
            <button class="btn btn-outline-primary center-block" name = "create" onClick = {this.createPost} style = {{float : 'left'}}>Create Post</button>  
          <br/ > <br />
         {this.state.show?posts:<div></div>}
        <center>{list}</center>
      </div>
    )
  }
}
export default Dashboard; 