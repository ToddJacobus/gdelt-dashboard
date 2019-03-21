import { combineReducers } from 'redux';
import articlesReducer from './articlesReducer'
import articleDetailReducer from './articleDetailReducer'

export default combineReducers({
  articles: articlesReducer,
  detail: articleDetailReducer
});
