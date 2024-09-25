import { useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import { Headre } from "./components/Headre";
import styled from "styled-components";

function App({}) {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
    toast.dismiss("Добавлено !!!");
  };

  const deleteTodoHandler = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const editTodosHandler = (id, title) => {
    const currentTodos = todos.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          title: title,
        };
      }
      return element;
    });
    setTodos(currentTodos);
  };

  return (
    <div>
      <Headre />
      <TodoForm onAddTodo={addTodoHandler} todos={todos} setTodos={setTodos} />
      <StyledDiv>
        <h1>Новые дела</h1>
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodoHandler}
          onEditTodo={editTodosHandler}
        />
      </StyledDiv>
    </div>
  );
}

export default App;

const StyledDiv = styled.div`
  padding: 103px;
`;
