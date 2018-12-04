import React, {Component} from 'react';
import {TodoList} from './components/TodoList/TodoList';
import {Todo} from './models/Todo';

class App extends Component {
    render() {
        let todos: Todo[] = [
            new Todo(1, 'one'),
            new Todo(2, 'two', true),
            new Todo(3, 'three'),
        ];

        return (
            <div>
                <TodoList todos={todos} onToggleDone={(id, done) => console.log(id, done)}/>
            </div>
        );
    }
}

export default App;
