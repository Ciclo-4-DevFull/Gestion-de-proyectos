import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from 'layouts/PrivateLayout';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Inicio from 'pages/Inicio';
import RegistroProyecto from 'pages/proyectos/RegistroProyecto';
import Solicitudes from 'pages/usuarios/Solicitudes';
import MisProyectos from 'pages/proyectos/MisProyectos';
import Detalle from 'pages/proyectos/Detalle';
import ActualizarInfo from 'pages/usuarios/ActualizarInfo';
import BuscaProyectos from 'pages/proyectos/BuscaProyectos';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';

const client = new ApolloClient({
  uri: 'https://servidor-gestion-proyectos.herokuapp.com/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path={['/bienvenida', '/registro-proyecto', '/mis-proyectos', '/detalle-proyecto', '/solicitudes','/actualizar-info','/busca-proyecto']}>
            <PrivateLayout>
              <Switch>
                <Route path='/bienvenida'>
                  <Inicio/>
                </Route>
                <Route path='/registro-proyecto'>
                  <RegistroProyecto/>
                </Route>
                <Route path='/mis-proyectos'>
                  <MisProyectos/>
                </Route>
                <Route path='/detalle-proyecto'>
                  <Detalle/>
                </Route>
                <Route path='/solicitudes'>
                  <Solicitudes/>
                </Route>
                <Route path='/actualizar-info'>
                  <ActualizarInfo/>
                </Route>
                <Route path='/busca-proyecto'>
                  <BuscaProyectos/>
                </Route>
              </Switch>
            </PrivateLayout>
          </Route>
          <Route path={['/login', 'registro', '/']}>
            <PublicLayout>
              <Switch>
                <Route path='/login'>
                  <Login/>
                </Route>
                <Route path='/registro'>
                  <Registro/>
                </Route>
                <Route path='/'>
                  <Index/>
                </Route>
              </Switch>
            </PublicLayout>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
