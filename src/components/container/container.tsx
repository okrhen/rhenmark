import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`;

interface IContainer {
  children: ReactNode;
}
const Container = ({ children }: IContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
