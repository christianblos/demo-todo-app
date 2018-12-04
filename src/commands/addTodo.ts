import {Todo} from '../models/Todo';
import {todoState} from '../states/todoState';

let nextId: number = 1;

export function addTodo(text: string) {
    let todo: Todo = new Todo(nextId++, text);
    todoState.todos.push(todo);
}
