import {SocialButtons} from '../SocialButtons/index';

import {Container, Limit, TextDiv, ImageDiv} from './styles';

interface IContentProps {
  title: string;
  description: string;
  asset: string;
  reverse: boolean;
  icy: boolean;
}

export function Content ({
  title,
  description,
  asset,
  reverse,
  icy
}: IContentProps) {

  return(
    <Container icy={icy}>
      <Limit reverse={reverse}>
        <TextDiv>
          <h1>{title}</h1>
          <p>{description}</p>
          <SocialButtons />
        </TextDiv>
        <ImageDiv>
          <img src={asset} width="100%" height="100%" alt="Desk" />
        </ImageDiv>
      </Limit>
    </Container>
  );
}