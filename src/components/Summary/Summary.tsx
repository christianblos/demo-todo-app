import React from 'react';
import styles from './Summary.module.css';

interface Props {
    openTodos: number;
}

export function Summary(props: Props) {
    return (
        <div className={styles.summary}>
            Open Todos: {props.openTodos}
        </div>
    );
}
