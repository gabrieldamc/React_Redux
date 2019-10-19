import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/popper.js/dist/umd/popper.min';

import Menu from './components/menu'
import Rotas from './routes';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Menu/>
        <Rotas/>

      </header>
    </div>
  );
}

export default App;
