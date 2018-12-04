import {Todo} from '../../models/Todo';
import {todoState} from '../../states/todoState';
import {addTodo} from '../addTodo';

it('adds todo', () => {
    todoState.todos = [];

    addTodo('test');

    expect(todoState.todos.length).toBe(1);
    const todo: Todo = todoState.todos[0];
    expect(todo.text).toBe('test');
    expect(todo.done).toBe(false);
});
