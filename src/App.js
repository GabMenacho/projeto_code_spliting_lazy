import './App.css';

import {lazy, Suspense} from 'react';

//import Slogan from './code_splitting/slogan';
//import Rodape from './code_splitting/rodape;'

//importação controlada pelo lazy
const Slogan = lazy(() => import('./code_splitting/slogan'));
const Rodape = lazy(() =>import('./code_splitting/rodape'));
const Logo = lazy(() => import('./code_splitting/logo'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Suspense fallback={<p> Carregando Imagem </p>}>
          <Logo />
        </Suspense>

        <Suspense fallback={ <p>Carregando o Slogan...</p>}>
          <Slogan />
        </Suspense>

        <Suspense fallback={ <p>Carregando o Rodapé...</p>}>
          <Rodape />
        </Suspense>
      
      </header>
    </div>
  );
}

export default App;
