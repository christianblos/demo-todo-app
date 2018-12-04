import React, {Component} from 'react';
import {TodoEntry} from './components/TodoEntry/TodoEntry';

class App extends Component {
    render() {
        return (
            <div>
                <TodoEntry id={1} text={'one'} done={false} onToggleDone={() => console.log(1)}/>
                <TodoEntry id={2} text={'two'} done={true} onToggleDone={() => console.log(2)}/>
            </div>
        );
    }
}

export default App;
