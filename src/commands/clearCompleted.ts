import {Todo} from '../models/Todo';
import {todoState} from '../states/todoState';

export function clearCompleted() {
    todoState.todos = todoState.todos.filter((todo: Todo) => !todo.done);
}
