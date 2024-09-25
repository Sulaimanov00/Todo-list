import React from "react";
import styled from "styled-components";

export const Headre = () => {
  return (
    <StyledHeader>
      <StyledText>Todo App</StyledText>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #0071f6;
  display: flex;
  align-items: center;
`;
const StyledText = styled.h1`
  width: 206px;
  height: 56px;
  color: #ffffff;
  padding-left: 56px;
`;
