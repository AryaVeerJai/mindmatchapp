import { combineReducers } from "redux";

import User from './user';
import Todos from './taskAction';

export default combineReducers({
   User,
   Todos,
})