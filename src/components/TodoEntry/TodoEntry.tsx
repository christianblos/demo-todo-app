import React from 'react';
import styles from './TodoEntry.module.css';

interface Props {
    id: number;
    text: string;
    done: boolean;
    onToggleDone: () => void;
}

export function TodoEntry(props: Props) {
    return (
        <div className={props.done ? styles.done : ''}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={props.done}
                onChange={props.onToggleDone}
            />
            {props.text}
        </div>
    );
}
