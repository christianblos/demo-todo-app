import React from 'react';
import {Todo} from '../../models/Todo';
import {TodoEntry} from '../TodoEntry/TodoEntry';
import styles from './TodoList.module.css';

interface Props {
    todos: Todo[];
    onToggleDone: (id: number, done: boolean) => void;
}

export function TodoList(props: Props) {
    if (props.todos.length == 0) {
        return <div className={styles.list + ' ' + styles.empty}>(Empty)</div>;
    }

    const todos = [...props.todos].sort(sortTodos);

    return (
        <div className={styles.list}>
            {todos.map(((todo) => {
                return (
                    <TodoEntry
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        done={todo.done}
                        onToggleDone={() => props.onToggleDone(todo.id, !todo.done)}
                    />
                );
            }))}
        </div>
    );
}

function sortTodos(a: Todo, b: Todo) {
    if (a.done == b.done) {
        return 0;
    }
    return a.done ? 1 : -1;
}