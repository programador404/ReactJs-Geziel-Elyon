import {BrowserRouter} from 'react-router-dom';

import { Routes } from './routes/index.routes';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}
