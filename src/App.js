import logo from './logo.svg';
import './App.css';
import Link from './Link';
import UserRegistrationForm from './UserRegistrationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Link page="http://www.github.com/patch85">
            patch85 github profile
          </Link>
        </div>

        <UserRegistrationForm />
      </header>
    </div>
  );
}

export default App;
