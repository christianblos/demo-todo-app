import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {addTodo} from './commands/addTodo';
import {clearCompleted} from './commands/clearCompleted';
import {toggleDone} from './commands/toggleDone';
import {AddTodoForm} from './components/AddTodoForm/AddTodoForm';
import {Summary} from './components/Summary/Summary';
import {TodoList} from './components/TodoList/TodoList';
import {Todo} from './models/Todo';
import {TodoState} from './states/todoState';

interface Props {
    todoState?: TodoState
}

@inject('todoState')
@observer
class App extends Component<Props> {
    render() {
        const todos: Todo[] = this.props.todoState!.todos;

        return (
            <div>
                <AddTodoForm onAdd={addTodo}/>

                <TodoList todos={todos} onToggleDone={(id, done) => toggleDone(id, done)}/>

                <Summary openTodos={todos.filter(todo => !todo.done).length}/>
                <button onClick={clearCompleted}>Clear completed</button>
            </div>
        );
    }
}

export default App;
