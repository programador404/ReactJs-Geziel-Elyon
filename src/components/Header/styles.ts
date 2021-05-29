import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.header`
  top: 0;
  position: fixed;
  width: 100%;
  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.3);
  background-color: var(--white);

  div {
    padding: 0 1.5rem;
    height: 6rem;
    max-width: 100rem;
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled(Link)`
  font-size: 2.2rem;
  font-family: "Caveat Brush";
  text-decoration: none;
  color: var(--black);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &:hover {
    color: var(--blue);
    font-size: 2.3rem;
  }
`;

export const ButtonContact = styled.a`
  padding: 1rem 1.5rem;
  background-color: var(--black);
  color: var(--white);
  border: 0;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 1rem 1rem 0 1rem;
  transition: all 0.3s ease-out;
  text-decoration: none;

  &:hover {
    background-color: var(--blue);
    font-weight: 900;
    font-size: 1.07rem;
  }
`;