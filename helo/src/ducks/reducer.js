const initialState = {
    users: [],
    currentUser: {
        username: '',
        profilePic: ''
    },
    userNameIn: '',
    passwordIn: '',
    posts: [],
    filteredPosts: []
}

const UPDATE_USERNAME = 'UPDATE_USERNAME'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const SIGN_IN = 'SIGN_IN'
const UPDATE_SEARCH = 'UPDATE_SEARCH'
const GET_POSTS = 'GET_POSTS'
const SEARCH_POSTS = 'SEARCH_POSTS'

export function updateUsername(val) {
    return{
        type: UPDATE_USERNAME,
        payload:  val
    }
}

export function updatePassword(val) {
    return{
        type: UPDATE_PASSWORD,
        payload:  val
    }
}

export function updateSearch(val) {
    return{
        type: UPDATE_SEARCH,
        payload:  val
    }
}

export function signIn(user) {
    console.log('In reducer, user obj: ', user)
    return{
        type: SIGN_IN,
        payload:  {
            username: user.username,
            img: user.profile_pic
        }
    }
}

export function getPosts() {
    let posts = axios.get('http://localhost:3010/posts').then(res => {
        return res.data
    })
    console.log('In reducer, posts: ', posts)
    return{
        type: GET_POSTS,
        payload: posts
    }
}

export function searchPosts(val) {
    let posts = axios.get(`http://localhost:3010/posts/search?filter=${val}`).then(res => {
        return res.data
    })
    console.log('In reducer, posts filtered: ', posts)
    return{
        type: GET_POSTS,
        payload: posts
    }
}



export default function(state = initialState, action){
    switch(action.type){
        case UPDATE_PASSWORD:
            return { ...state, passwordIn: action.payload}
        case UPDATE_USERNAME:
            return { ...state, userNameIn: action.payload}
        case UPDATE_SEARCH:
            return { ...state, searchIn: action.payload}
        case SIGN_IN:
            return { ...state, currentUser: {username: action.payload.username, profilePic: action.payload.img}}
        case GET_POSTS + '_FULFILLED':
            return { ...state, posts: action.payload}
        default:
            return state
    }
}