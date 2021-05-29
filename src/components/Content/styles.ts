import styled, {css} from 'styled-components';

interface IContainerProps {
  icy: boolean;
}

interface ILimitProps {
  reverse: boolean;
}

export const Container = styled.div<IContainerProps>`
  height: 100vh;
  width: 100%;
  ${props => props.icy ? css`
    background-color: var(--icy);
  `: css`
    background-color: var(--white);
  `}

  @media(max-width: 720px) {
    height: 90vh;
  }
`;

export const Limit = styled.div<ILimitProps>`
  max-width: 100rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  ${props => props.reverse ? css`
    flex-direction: row-reverse;
  `: css`
    flex-direction: row;
  `}

  @media(max-width: 720px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const TextDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 1.5rem;

  h1 {
    margin-bottom: 1rem;
    font-size: 2.3rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 550px;
    font-weight: 500;
  }

  @media(max-width: 720px) {
    width: 100%;
    height: 65%;
    align-items: center;
    justify-content: center;
    text-align: center;
    h1 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const ImageDiv = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  padding: 1.5rem;

  img {
    height: 100%;
    width: 100%;
  }
  
  @media(max-width: 720px) {
    width: 100%;
    height: 35%;
    align-items: center;
    justify-content: center;
    padding-top: 5rem;
  }
`;
