import styled from "@emotion/styled";
import React from "react";

import { Layout } from "@/components/layout";

const Error404 = () => {
  return (
    <Layout>
      <TextBox>
        <Number>404</Number>
        <Text>Page Not Found</Text>
      </TextBox>
    </Layout>
  );
};

export default Error404;

const TextBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
const Number = styled.p`
  font-size: 120px;
  font-weight: 600;
`;
const Text = styled.p`
  font-size: 24px;
`;
