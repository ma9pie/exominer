import styled from "@emotion/styled";
import React from "react";

const Footer = () => {
  return <Wrapper>Copyright 2025 ma9pie All rights reserved</Wrapper>;
};

export default Footer;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 10px;
  height: 32px;
  padding: 0px 12px;
  color: var(--black400);
  background-color: var(--black900);
`;
