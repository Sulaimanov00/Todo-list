import { useState } from "react";
import { Button } from "./Ui/Button";
import { Input } from "./Ui/Input";
import styled from "styled-components";

export const TodoItem = ({ id, title, onDeleteTodo, onEditTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleEditToggle = () => {
    setIsEditing(true);
    setEditValue(title);
  };
  const editHandleChange = (event) => {
    setEditValue(event.target.value);
  };

  const saveEditHandleClick = (event) => {
    event.preventDefault();
    onEditTodo(id, editValue);
    setIsEditing(false);
  };

  const cancelEditHandleClick = () => {
    setIsEditing(false);
    setEditValue(title);
  };

  return (
    <StyledLi>
      {isEditing ? (
        <StyledForm onSubmit={saveEditHandleClick}>
          <Input type="text" value={editValue} onChange={editHandleChange} />
          <StyledBtn3 type="submit" children={"Сохранить"} />
          <StyledBtn4 onClick={cancelEditHandleClick} children={"Закрыть"} />
        </StyledForm>
      ) : (
        <>
          <StyledText>{title}</StyledText>
          <StyledCon>
            <StyledBtn1 onClick={handleEditToggle} children={"Изменить"} />
            <StyledBtn2 onClick={() => onDeleteTodo(id)} children={"Удалить"} />
          </StyledCon>
        </>
      )}
    </StyledLi>
  );
};
const StyledForm = styled.form`
  display: flex;
  gap: 15px;
`;
const StyledLi = styled.li`
  width: 1146px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  border: 1px solid #dad3d3;
  border-radius: 10px;
`;
const StyledCon = styled.div`
  display: flex;
  padding-right: 15px;
  gap: 24px;
`;
const StyledText = styled.h3`
  padding-left: 25px;
`;
const StyledBtn1 = styled.button`
  width: 150px;
  height: 57px;
  border-radius: 10px;
  background-color: #3c11eb;
  color: #ffffff;
`;
const StyledBtn2 = styled.button`
  width: 150px;
  height: 57px;
  border-radius: 10px;
  background-color: #ff6b6b;
  color: #ffffff;
`;
const StyledBtn3 = styled.button`
  width: 150px;
  height: 57px;
  border-radius: 10px;
  background-color: #1eec33;
  color: #ffffff;
`;
const StyledBtn4 = styled.button`
  width: 150px;
  height: 57px;
  border-radius: 10px;
  background-color: #ff2727;
  color: #ffffff;
`;
