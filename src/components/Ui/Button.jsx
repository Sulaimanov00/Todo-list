import React, { Children } from "react";
import styled from "styled-components";

export const Button = ({ onClick, type, children, ...props }) => {
  return (
    <StyledBtn onClick={onClick} type={type} {...props}>
      {children}
    </StyledBtn>
  );
};

const StyledBtn = styled.button`
  width: 150px;
  height: 57px;
  border-radius: 10px;
  border: 1px solid black;
  background-color: #ffff;
  stroke: #bab5cd;
`;
