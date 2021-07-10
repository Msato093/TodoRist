import Item from './Item';

//Listコンポーネント
const List = ({ todos, deleteTodo, toggleTodo }) => {

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <Item
                        deleteTodo={deleteTodo}
                        id={todo.id}
                        content={todo.content}
                        key={todo.id}
                        isDone={todo.isDone}
                        toggleTodo={toggleTodo}
                    />
                );
            })}
        </ul>
    );

};

export default List;