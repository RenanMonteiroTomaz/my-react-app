import { useState } from 'react';
import './App.css';
import Chat from './Chat';

function App() {
  const [username, setUsername] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (name) => {
    setUsername(name);
    setIsLogged(true);
  };

  return (
    <div className="App">
      {!isLogged ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

function LoginScreen({ onLogin }) {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim()) {
      onLogin(name);
    }
  };

  return (
    <div className="login-screen">
      <h2>Digite seu nome:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Insira seu nome"
        />
        <button type="submit">Prosseguir</button>
      </form>
    </div>
  );
}

export default App;