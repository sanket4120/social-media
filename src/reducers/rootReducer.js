import { combineReducers } from 'redux';
import userReducer from './userReducer';
import usersReducer from './usersReducer';
import postsReducer from './postsReducer';
import userDetailsReducer from './userDetailsReducer';
import { bookmarksReducer } from './bookmarksReducer';

const rootReducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  posts: postsReducer,
  userDetails: userDetailsReducer,
  bookmarks: bookmarksReducer,
});

export default rootReducer;
