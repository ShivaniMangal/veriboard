import React from 'react'
import '../styles/profile.module.css'
import {Link} from 'react-router-dom'

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            user: 'User_957',
            contributions: [{ postId: 'pid_145', post: 'The Amazon is on fire', board: 'Environment' },
            { postId: 'pid_186', post: 'Riya is great on gantt chart', board: 'People' },
            { postId: 'pid_201', post: 'Neel knows everything', board: 'Inspiring People' }],
            created: [{ boardId: 'gid_14', name: 'Guinness Records New Additions' }]
        }
        this.items = this.state.contributions.map((item, key) =>
            <div class="card" style={{ width: 400 }}>
                <div class="card-header">
                    Post ID:  {item.postId}
                </div>
                <div class="card-body">
                    <p class="card-text">{item.post}</p>
                    <footer class="blockquote-footer">from the Board <cite title="Source Title">{item.board}</cite></footer>
                    <Link to ='/viewpost' class="btn btn-primary">View Post</Link>
                </div>

            </div>
        )
        this.groups = this.state.created.map((item, key) =>
            <div class="card" style={{ width: 400 }}>
                <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Board_ID: {item.boardId}</h6>
                    <a href="#" class="card-link">Go To Board</a>
                </div>
            </div>)

    }
    render() {
        return (
            <div className="Jumbotron container">
                <div className="toppane">
                    <div class="row">
                        <div class="col-sm-11"><h1 className="display-3">VeriBoard</h1></div>
                        <div class="col-sm-1"><button type="button" class="btn btn-outline-primary btn-xs">LogOut</button></div>
                    </div>
                </div>
                <br />
                <div className="leftpane">
                    <img src="https://image.flaticon.com/icons/png/512/21/21294.png" alt="user's DP" width="200" height="150" />
                    <br /><table><th>User_ID</th><th> <h6>: {this.state.user}</h6></th>
                        </table>
                </div>
                <div className="middlepane">
                    <h3>List of Contributions to Groups</h3>
                    {this.items}
                </div>
                <div className="rightpane">
                    <h3>My Groups</h3>
                    {this.groups}
                </div>
            </div>
        )
    }
}
