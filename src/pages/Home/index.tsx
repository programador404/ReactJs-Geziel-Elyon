import { Content } from '../../components/Content';
import { Header } from '../../components/Header/index';
import { Footer } from '../../components/Footer';

import Desk from '../../assets/desk.svg';
import Mobile from '../../assets/mobile.svg';
import Server from '../../assets/server.svg';
import Web from '../../assets/notebookDev.svg';

interface IContentProps {
  title: string;
  description: string;
  asset: string;
  reverse: boolean;
  icy: boolean;
}

const contents: IContentProps[] = [
  {
    title: "Programador Fullstack Javacript",
    description: "Sou desenvolvedor Javascript a 5 anos e trabalho em diversas áreas, como: desenvolvimento de aplicativos, criação de sistemas no lado do servidor além da criação de aplicações web! Tudo isso usando uma única linguagem de programação!",
    asset: Desk,
    reverse: false,
    icy: false,
  },
  {
    title: "Desenvolvedor Mobile",
    description: "Crio aplicativos já tem 3 anos, quando eu descobri o React-Native, que possibilita a criação de apps tanto para Android quanto para Ios usando Javascript! Criado pelo Facebook e mantido pela comunidade, hoje ele é usado por grandes empresas no mercado!",
    asset: Mobile,
    reverse: true,
    icy: true,
  },
  {
    title: "Desenvolvedor Back-end",
    description: "Hoje em dia é bem difício falar de Javascript sem falar de NodeJs, que é um runtime que possibilita o uso de javascript no lado do servidor. Atráves dele é possível fazer queries em banco de dados, criar regras de negócio, usar Apis externas e muitas coisas mais!",
    asset: Server,
    reverse: false,
    icy: false,
  },
  {
    title: "Desenvolvedor Web",
    description: "O Javascript surgiu com idéia de ser a linguagem que roda nos Browsers (navegadores), e só depois passou a ser usada nos servidores e em outras áreas. Pois é, eu segui a ordem inversa! Somente no começo do ano de 2021 decidi usá-lo para o que ele foi feito inicialmente. Mas tudo bem; logo logo estaria bem afiado e criando coisas incríveis na web!",
    asset: Web,
    reverse: true,
    icy: true,
  },
  // {
  //   title: "Programador Fullstack Javacript",
  //   asset: Desk,
  // },
]

export function Home() {
  return (
    <div style={{paddingTop: 80}}>
      <Header/>
      
      {contents.map((content) => (
        <Content 
          key={content.title}
          title={content.title}
          description={content.description}
          asset={content.asset}
          reverse={content.reverse}
          icy={content.icy}
        />
      ))}

      <Footer />
    </div>
  );
}
