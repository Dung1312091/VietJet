import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import handleCollapse from '../components/Header/reducer';
import user from '../containers/UserProfile/reducer';
export default combineReducers({
  handleCollapse: handleCollapse,
  router: routerReducer,
  user
});
