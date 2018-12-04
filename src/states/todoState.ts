import {observable} from 'mobx';
import {Todo} from '../models/Todo';

export class TodoState {
    @observable public todos: Todo[] = [];
}

export const todoState = new TodoState();
