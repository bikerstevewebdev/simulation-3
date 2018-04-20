import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { signIn, updateSearch, getPosts } from '../../ducks/reducer'

class Dashboard extends Component{
    constructor() {
        super()
        this.state = {
            posts: []
        }
        this.resetPosts = this.resetPosts.bind(this)
    }
    
    componentDidMount() {
        this.props.getPosts
        axios.get('/user').then(res => {
            console.log('Res data:', res.data)
            this.props.signIn(res.data)
        })
    }

    componentDidUpdate() {
        this.setState({
            posts: this.props.posts
        })
    }

    resetPosts() {
        this.setState({
            posts: this.props.posts
        })
    }

    render() {
        console.log('DB props:', this.props)
        const posts = this.state.posts.map(v =>{
            return <Post key={v.id} author={v.author} proPic={v.profile_pic} content={v.content} />
        })
        return(
            <div>
                <h1>Dashboard</h1>

                <input placeholder="Search" value={this.props.earchIn} onChange={(e) => this.props.updateSearch(e.target.value)}/>

                <button>Search</button>
                <button onClick={this.resetPosts} >Reset</button>
                <input type="checkbox" label="My Posts"/>
                {posts}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        username: state.currentUser.username,
        profilePic: state.currentUser.profilePic,
        searchIn: state.searchIn,
        posts: (state.filteredPosts.length > 0 ? state.filteredPosts : state.posts)
    }
}

export default connect(mapStateToProps, { signIn, updateSearch, getPosts })(Dashboard)
// export default Dashboard