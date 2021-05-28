import {AiFillGithub, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';

import {Container, Button} from './styles';

export function SocialButtons() {
  return(
    <Container>
      <Button href="https://github.com/programador404" target="_black">
        <AiFillGithub color="#fff" size={40} />
      </Button>
      <Button href="https://www.linkedin.com/in/geziel-elyon-a0a1381a5/" target="_black" style={{backgroundColor: '#0962ed'}}>
        <AiFillLinkedin color="#fff" size={40} />
      </Button>
      <Button href="https://www.instagram.com/_programador404/?hl=pt-br" target="_black" style={{backgroundColor: '#ed125f'}}>
        <AiFillInstagram color="#fff" size={40} />
      </Button>
    </Container>
  );
}