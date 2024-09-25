import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDeleteTodo, onEditTodo }) => {
  return (
    <ul>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          {...item}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </ul>
  );
};
