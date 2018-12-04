import React, {Component, KeyboardEvent, RefObject} from 'react';

interface Props {
    onAdd: (text: string) => void;
}

export class AddTodoForm extends Component<Props> {

    private inputRef: RefObject<HTMLInputElement>;

    constructor(props: Props) {
        super(props);
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current!.focus();
    }

    public render() {
        return (
            <>
                <input ref={this.inputRef} onKeyPress={this.handleKeyPress} placeholder="Add new task..."/>
                <button onClick={this.handleAdd}>Add</button>
            </>
        );
    }

    private handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key == 'Enter') {
            this.handleAdd();
        }
    };

    private handleAdd = () => {
        const input = this.inputRef.current!;
        this.props.onAdd(input.value);
        input.value = '';
        input.focus();
    };
}
