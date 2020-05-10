import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f7f9ff;
  justify-content: flex-end;
`;

const NavOption = styled.div`
  padding: 32px;
`;

const NavLogo = styled.div`
  padding: 32px;
  margin-right: auto;
`;

export const TopNavBar = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = `newPath`;
    history.push(path);
  };
  return (
    <Wrapper>
      <NavLogo>
        <Link to="/">LX</Link>
      </NavLogo>
      <NavOption>
        <Link to="/">Home</Link>
      </NavOption>
      <NavOption>
        <Link to="/about">about</Link>
      </NavOption>
    </Wrapper>
  );
};
