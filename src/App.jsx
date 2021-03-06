import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateLayout from 'layouts/PrivateLayout';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Inicio from 'pages/Inicio';
import RegistroProyecto from 'pages/proyectos/RegistroProyecto';
import Usuarios from 'pages/usuarios/Usuarios';
import MisProyectos from 'pages/proyectos/MisProyectos';
import Detalle from 'pages/proyectos/Detalle';
import ActualizarInfo from 'pages/usuarios/ActualizarInfo';
import BuscaProyectos from 'pages/proyectos/BuscaProyectos';
import PublicLayout from 'layouts/PublicLayout';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import Index from 'pages/Index';
import { AuthContext } from 'context/AuthContext';
import { useState, useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { UserContext } from 'context/UserContext';
import PrivateRoute from 'components/PrivateRoute';

const httpLink = createHttpLink({
  uri: 'https://servidor-gestion-proyectos.herokuapp.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem('token'));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {

  const [authToken, setAuthToken] = useState('');
  const [userData, setUserData] = useState({});

  const setToken = (token) => {
    setAuthToken(token);
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
    } else {
      localStorage.removeItem('token')
    }
  }

  useEffect(() => {

    if (authToken) {
      const decoded = jwtDecode(authToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        estado: decoded.estado
      });
    };
  }, [authToken])

  return (
    <ApolloProvider client={client}>
      <AuthContext.Provider value={{ authToken, setAuthToken, setToken }}>
        <UserContext.Provider value={{ userData, setUserData }}>
          <Router>
            <Switch>
              <Route path={['/bienvenida', '/registro-proyecto', '/mis-proyectos', '/detalle-proyecto', '/usuarios', '/actualizar-info', '/busca-proyecto']}>
                <PrivateLayout>
                  <Switch>
                    <Route path='/bienvenida'>
                      <Inicio />
                    </Route>
                    <Route path='/registro-proyecto'>
                      <PrivateRoute roleList={['LIDER']}>
                        <RegistroProyecto />
                      </PrivateRoute>
                    </Route>
                    <Route path='/mis-proyectos'>
                      <MisProyectos />
                    </Route>
                    <Route path='/detalle-proyecto/:idproject'>
                      <Detalle />
                    </Route>
                    <Route path='/usuarios'>
                      <PrivateRoute roleList={['ADMINISTRADOR', 'LIDER']}>
                        <Usuarios />
                      </PrivateRoute>
                    </Route>
                    <Route path='/actualizar-info'>
                      <ActualizarInfo />
                    </Route>
                    <Route path='/busca-proyecto'>
                      <BuscaProyectos />
                    </Route>
                  </Switch>
                </PrivateLayout>
              </Route>
              <Route path={['/login', 'registro', '/']}>
                <PublicLayout>
                  <Switch>
                    <Route path='/login'>
                      <Login />
                    </Route>
                    <Route path='/registro'>
                      <Registro />
                    </Route>
                    <Route path='/'>
                      <Index />
                    </Route>
                  </Switch>
                </PublicLayout>
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </AuthContext.Provider>
    </ApolloProvider>
  );
}

export default App;
