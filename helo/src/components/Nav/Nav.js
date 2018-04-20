import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props) {
    return(
        <nav>
            <p>{props.username}</p>
            <img src={props.profilePic} alt="profile picture" />
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
            <Link to='/'>Logout</Link>
        </nav>
    )
}

function mapStateToProps(state){
    return {
        profilePic: state.currentUser.profilePic,
        username: state.currentUser.username
    }
}

export default connect(mapStateToProps)(Nav)