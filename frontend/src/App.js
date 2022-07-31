import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import About from './pages/About';
import SignUpPage from './pages/SignUp';
import MyTournaments from './pages/MyTournaments';

function App() {
  return (
    <div className="App">
      <Router>
       
      
        <AuthProvider>
          <Header/>
          <PrivateRoute component={HomePage} path="/home" exact/>
          <Route component={LoginPage} path="/login"/>
          <Route component={About} path="/about"/>
          <Route component={SignUpPage} path="/signup"/>
          <PrivateRoute component={MyTournaments} path="/tournaments"/>
        </AuthProvider>
        
      </Router>
    </div>
  );
}

export default App;
