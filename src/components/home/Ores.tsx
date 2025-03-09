import styled from "@emotion/styled";
import React from "react";

import { ItemImage } from "@/components/common";
import { ORES } from "@/constants";
import { compactNumber } from "@/utils";

const Ores = () => {
  return (
    <Wrapper>
      {ORES.map((item) => (
        <Row key={item.key}>
          <ItemImage src={`/images/ores/${item.key}.png`}></ItemImage>
          <Text>{item.name}</Text>
          <Text>${compactNumber(item.value)}</Text>
        </Row>
      ))}
    </Wrapper>
  );
};

export default Ores;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Text = styled.p``;
