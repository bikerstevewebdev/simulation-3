import React, { Component } from 'react'



class Post extends Component{


    render() {
        console.log('Post comp local:', this.props.location)
        
        return(
            <div>
                Post
            </div>
        )
    }
}

export default Post