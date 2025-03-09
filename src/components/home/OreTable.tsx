import styled from "@emotion/styled";
import { Flex } from "@ma9pie/lite-ui";
import React from "react";

import { ItemImage } from "@/components/common";
import { ORE_LIST } from "@/constants";
import { compactNumber } from "@/utils";

const OreTable = () => {
  return (
    <Wrapper>
      {ORE_LIST.map((item) => (
        <Flex key={item.key} items="center" gap={16}>
          <ItemImage src={`/images/ores/${item.key}.png`}></ItemImage>
          <Text>{item.name}</Text>
          <Text>${compactNumber(item.value)}</Text>
        </Flex>
      ))}
    </Wrapper>
  );
};

export default OreTable;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Text = styled.p``;
