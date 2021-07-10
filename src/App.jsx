import { Fragment, useState } from 'react';
import { nanoid } from 'nanoid';
import Title from './Title';
import Form from './Form';
import List from './List';

//Appコンポーネント
const App = () => {

    const [todos, setTodos] = useState([
        // { content: 'ポートフォリオ作成', id: nanoid() },
        // { content: '企業探し', id: nanoid() },
    ]);

    // Todo Ristを増やす関数
    const addTodo = (content) => {
        setTodos([...todos, { content, id: nanoid() }])
    };

    // Todo Ristを減らす関数
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // isDoneを反転させる関数
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if(todo.id === id) {
                    // クリックされた処理
                    return {...todo,isDone: !todo.isDone };
                }else {
                    // クリックされていない要素の処理
                    return todo;
                }
            })
        );
    };

    return (
        <Fragment>
            <Title />
            <Form addTodo={addTodo} />
            <List deleteTodo={deleteTodo} toggleTodo={toggleTodo} todos={todos} />
        </Fragment>
    );
};

export default App;