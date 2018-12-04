import {Todo} from '../../models/Todo';
import {todoState} from '../../states/todoState';
import {clearCompleted} from '../clearCompleted';

it('clears completed todos', () => {
    todoState.todos = [
        new Todo(1, 'one', false),
        new Todo(2, 'two', true),
        new Todo(3, 'three', false),
        new Todo(4, 'four', true),
    ];

    clearCompleted();

    expect(todoState.todos.length).toBe(2);
    expect(todoState.todos[0].text).toBe('one');
    expect(todoState.todos[1].text).toBe('three');
});
