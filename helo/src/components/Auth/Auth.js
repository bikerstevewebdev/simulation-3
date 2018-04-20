import React, { Component } from 'react'
// import { updatePassword, updateUsername } from '../../ducks/reducer'
// import { connect } from 'react-redux'

class Auth extends Component{


    render() {
        console.log('Auth comp local:', this.props.location)
        // const { userNameIn, passwordIn, updateUsername, updatePassword } = this.props
        return(
            
            <div>
                {/* <input value={userNameIn} onChange={(e) => updateUsername(e.target.value)} placeholder="username"/>
                <input value={passwordIn} onChange={(e) => updatePassword(e.target.value)} placeholder="password" type="password"/> */}
                <a href={process.env.REACT_APP_LOGIN}>
                    <button >Login</button>
                </a>
                <a href={process.env.REACT_APP_LOGIN}>
                    <button>Register</button>
                </a>
            </div>
        )
    }
}
// function mapStateToProps(state) {
//     return{
//         userNameIn: state.userNameIn,
//         passwordIn: state.passwordIn
//     }
// }
export default Auth
// export default connect(mapStateToProps,  { updatePassword, updateUsername })(Auth)