import React from "react";
import styled from "styled-components";

export const Input = ({ type, onChange, value }) => {
  return <StyledInpet type={type} onChange={onChange} value={value} />;
};

const StyledInpet = styled.input`
  width: 960px;
  height: 57px;
  border-radius: 10px;
  border: 2px solid #8a72ea;
`;
