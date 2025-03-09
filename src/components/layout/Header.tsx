import styled from "@emotion/styled";
import Link from "next/link";
import React from "react";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">
        <Logo></Logo>
      </Link>

      <MenuWrapper>
        <FiMenu size={24}></FiMenu>
      </MenuWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0px 16px;
  background-color: var(--dark);
`;
const Logo = styled.div`
  height: 48px;
  aspect-ratio: 815 /261;
  background-color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/logo/text-logo.png");
`;
const MenuWrapper = styled.div``;
