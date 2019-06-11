import React from "react";
import styled from "styled-components";

import { AppBar } from "../components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  position: relative;
`;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
`;

type Props = {
  path?: string;
  children?: React.ReactNode;
};

const SharedRouter: React.SFC<Props> = ({ path, children }) => (
  <Container>
    <StickyHeader>
      <AppBar />
    </StickyHeader>
    {children}
  </Container>
);

export default SharedRouter;
