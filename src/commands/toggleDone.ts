import {Todo} from '../models/Todo';
import {todoState} from '../states/todoState';

export function toggleDone(id: number, done: boolean) {
    todoState.todos = todoState.todos.map((todo: Todo) => {
        if (todo.id == id) {
            return new Todo(todo.id, todo.text, done);
        }

        return todo;
    });
}
