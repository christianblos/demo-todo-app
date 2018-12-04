import React, {Component} from 'react';
import {AddTodoForm} from './components/AddTodoForm/AddTodoForm';
import {Summary} from './components/Summary/Summary';
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
                <AddTodoForm onAdd={console.log}/>

                <TodoList todos={todos} onToggleDone={(id, done) => console.log(id, done)}/>

                <Summary openTodos={99}/>
                <button>Clear completed</button>
            </div>
        );
    }
}

export default App;
