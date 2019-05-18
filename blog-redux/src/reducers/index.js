import {combineReducers} from 'redux';
import postReducer from './postsReducer';
import UserReducer from './UsersReducer'

export default combineReducers({
    posts : postReducer,
    user :UserReducer
});

