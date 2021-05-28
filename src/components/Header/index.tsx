import {Container, Logo, ButtonContact} from './styles';

export function Header() {
  return(
    <Container>
      <div>

        <Logo to="/">Geziel Elyon</Logo>

        <ButtonContact href="https://www.linkedin.com/in/geziel-elyon-a0a1381a5/" target="_black">Ver linkedin</ButtonContact>

      </div>
    </Container>
  );
}