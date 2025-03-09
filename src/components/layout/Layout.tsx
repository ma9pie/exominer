import styled from "@emotion/styled";
import React, { ReactNode } from "react";
import Favicon from "react-favicon";

import { Footer, Header } from "@/components/layout";

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
      <Footer></Footer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Container = styled.div`
  flex: 1;
  padding: 32px 24px;
`;
const Title = styled.title``;
