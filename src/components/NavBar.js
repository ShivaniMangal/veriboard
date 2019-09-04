import React, {Component} from 'react';
import Buttonss from './Buttonss';
import {Link} from 'react-router-dom';

class NavBar extends Component{
    constructor(props){
        super (props);
    }
    //Add State


render(){
    return(
<div>
<nav class="navbar navbar-light bg-light">
    {/* <img src="https://media.licdn.com/dms/image/C4E0BAQFJWS9dHHT0jA/company-logo_200_200/0?e=2159024400&v=beta&t=WBMIM9eGXy-yXSOJXKZDbq9EL0fv4r9GK6rat3vCSwc" width="30" height="30" alt=""/>
    <a class="navbar-brand" href="#">Navbar</a> */}
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Buttonss/>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link to ='/dashboard' class="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link to ='/profile' class="nav-link" >My Profile</Link>
      </li>
      <li class="nav-item">
        <Link to ='/dashboard' class="nav-link" >Posts</Link>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="Visibility" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Posts
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Public Posts</a>
          <a class="dropdown-item" href="#">Private Posts</a>
        </div>
      </li> */}
      <li class="nav-item">
        <a class="nav-link" href="#">Logout</a>
      </li>

    </ul>
  </div>
</nav>
</div>
    )
}
}

export default NavBar;