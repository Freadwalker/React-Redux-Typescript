import { combineReducers } from 'redux';
import {TodoProp} from '../../models/Todo';
import todo from '../todo/todoReducers';

export interface AppState {
    todo: TodoProp[]
};

export default combineReducers({
    todo
});