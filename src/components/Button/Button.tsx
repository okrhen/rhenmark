import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.button`
  width: auto;
  min-width: 100px;
  background-color: #ddd;
  min-height: 40px;
  height: auto;
  border: none;
  cursor: pointer;
`;

type BtnProps = {
  label: string;
};

const Button: React.SFC<BtnProps> = ({ label }) => (
  <ButtonContainer>{label}</ButtonContainer>
);

export default Button;
