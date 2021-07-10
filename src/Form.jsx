import { useState } from 'react';
import './Form.css';

//Formコンポーネント
const Form = ({ addTodo }) => {
    // 入力されている内容
    const [text, setText] = useState('');

    // formが送信されたタイミングで実行される関数
    const handleSubmit = (e) => {
        e.preventDefault();

        // 文字が入力されていないときの処理
        if(text.trim().length === 0) {
            alert('文字を入力してください!!')
            return;
        }
        addTodo(text);
        setText('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            className='onInput'
            placeholder='' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
            <button className='button-item'>追加</button>
        </form>
    );
};

export default Form;