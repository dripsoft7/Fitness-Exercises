import styled from "styled-components";
import { Stack } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <NavLink style={{ textDecoration: "none", color: "white" }} to="/">
        <Logo>GoFit</Logo>
      </NavLink>
      <LinkWrapper to="/">Home</LinkWrapper>
      <ExercisesLink style={{ textDecoration: "none", color: "white" }}>
        Workouts
      </ExercisesLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  /* justify-content: space-between; */
  margin-left: 20px;
  margin-top: 20px;
`;

const LinkWrapper = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: 4px blue underline;
  }
`;
const Logo = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

const ExercisesLink = styled.a``;
export default Header;
