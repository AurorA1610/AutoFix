import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import Garages from './Pages/Services/Garages';
import Concern from './Pages/Concern/Concern';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import UserLocation from './Pages/UserLocation/UserLocation';
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/garages" element={<Garages />} />
            <Route path="/concern" element={<PrivateRoute><Concern /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/map" element={<UserLocation />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
