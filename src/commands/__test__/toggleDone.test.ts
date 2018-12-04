import {Todo} from '../../models/Todo';
import {todoState} from '../../states/todoState';
import {toggleDone} from '../toggleDone';

it('toggles done', () => {
    todoState.todos = [new Todo(1, 'test')];

    toggleDone(1, true);

    expect(todoState.todos[0].done).toBe(true);
});
