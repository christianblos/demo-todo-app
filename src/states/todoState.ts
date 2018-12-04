import {Todo} from '../models/Todo';

export class TodoState {
    public todos: Todo[] = [];
}

export const todoState = new TodoState();
