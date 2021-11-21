import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from 'layouts/PrivateLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Inicio from 'pages/Inicio';
import RegistroProyecto from 'pages/RegistroProyecto';
import Solicitudes from 'pages/Solicitudes';
import MisProyectos from 'pages/MisProyectos';
import Detalle from 'pages/Detalle';
import ActualizarInfo from 'pages/ActualizarInfo';
import BuscaProyectos from 'pages/BuscaProyectos';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';

function App() {
  return (
    <div className="App">
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
                <Route path='actualizar-info'>
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
    </div>
  );
}

export default App;
