import './App.css';
import CerrarSesion from './components/CerrarSesion';
import LoginButton from './components/LoginButton';
import Profile from './components/Profile';

function App() {

  return (
    <div className="App">
      <h1>Application</h1>
      <LoginButton />
      <CerrarSesion />
      <Profile />
    </div>
  );
}

export default App;
