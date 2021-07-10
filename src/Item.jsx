import './List.css';

const Item = ({ content, id, deleteTodo, isDone, toggleTodo }) => {

    return (
        <li className='list'>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => toggleTodo(id)}
            />
            <span style={{ textDecoration: isDone ? 'line-through' : 'none' }}>
                {content}
            </span>
            <button
            className='button-style'
            onClick={() => deleteTodo(id)}
            >
            削除
            </button>
        </li>
    );
};

export default Item;