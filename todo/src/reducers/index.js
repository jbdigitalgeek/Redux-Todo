import { combineReducers } from 'redux';
import todosReducer from './Todos';

const rootReducer = combineReducers({
  todos: todosReducer
});

export default rootReducer;