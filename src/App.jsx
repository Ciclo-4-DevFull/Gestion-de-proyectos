import PrivateLayout from 'layouts/PrivateLayout';
import Solicitudes from 'pages/Solicitudes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <PrivateLayout>
        <Solicitudes />
      </PrivateLayout>
    </div>
  );
}

export default App;
