import React, { useState } from "react";
import { Button } from "./Ui/Button";
import styled from "styled-components";
import { Input } from "./Ui/Input";

export const TodoForm = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const HandlerSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now().toString(),
      title: value,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };
  const HandlerChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <form onSubmit={HandlerSubmit}>
      <Styleddiv>
        <h4>Введите название дела</h4>
        <StyledContai>
          <Input onChange={HandlerChange} value={value} />
          <Button>создать</Button>
        </StyledContai>
      </Styleddiv>
    </form>
  );
};

const Styleddiv = styled.div`
  padding: 103px;
`;
const StyledContai = styled.div`
  display: flex;
  gap: 36px;
`;
