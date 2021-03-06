import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Home from './pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import EditaCategoria from './pages/Editar/Categoria';
import Error404 from '../src/components/Error';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} exact />
      <Route exact path="/cadastro/video" component={CadastroVideo} />
      <Route exact path="/cadastro/categoria" component={CadastroCategoria} />
      <Route exact path="/editar/:dados" component={EditaCategoria} />
      <Route component={Error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
