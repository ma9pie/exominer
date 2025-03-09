import styled from "@emotion/styled";
import React from "react";

interface Props {
  src: string;
  size?: number;
}

const ItemImage = ({ src, size = 40 }: Props) => {
  return (
    <Wrapper
      style={{
        width: size,
        height: size,
        backgroundImage: `url('${src}')`,
      }}
    ></Wrapper>
  );
};

export default ItemImage;

const Wrapper = styled.div`
  position: relative;
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
