import styled from "@emotion/styled";
import { Flex } from "@ma9pie/lite-ui";
import React from "react";

import { ItemImage } from "@/components/common";
import { Layout } from "@/components/layout";
import { REFINED_ORE_LIST } from "@/constants";
import { compactNumber, formatDuration } from "@/utils";

const RefinedOres = () => {
  return (
    <Layout>
      <Container>
        {REFINED_ORE_LIST.map((refinedOre) => (
          <Flex key={refinedOre.key} col gap={8}>
            <Flex items="center" gap={16}>
              <ItemImage
                src={`/images/refined-ores/${refinedOre.key}.png`}
              ></ItemImage>
              <Text>{refinedOre.name}</Text>
              <Text>${compactNumber(refinedOre.value)}</Text>
            </Flex>

            <Flex col gap={4}>
              <Text>시간 : {formatDuration(refinedOre.time)}</Text>
              {refinedOre.recipe.map((item) => (
                <Text key={item.key}>{`${item.key} x${compactNumber(
                  item.quantity
                )}`}</Text>
              ))}
            </Flex>
          </Flex>
        ))}
      </Container>
    </Layout>
  );
};

export default RefinedOres;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Text = styled.p``;
