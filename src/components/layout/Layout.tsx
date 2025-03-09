import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Favicon from "react-favicon";

import { Header } from "@/components/layout";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Wrapper>
      <Title>ExoMiner</Title>
      <Favicon url="/images/logo/logo.png"></Favicon>
      <Header></Header>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100vh;
`;
const Container = styled.div`
  height: calc(100vh - 64px);
  padding: 32px 24px;
`;
const Title = styled.title``;
