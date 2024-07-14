import logo from '../logo.svg'
import '../App.css';
import Alert from './Alert';
import AllTheBooks from './AllTheBooks';


function ReactLogo() {
  return (
    <div className="App">
      <header className="App-header">
      <div className='d'>
     <Alert />
     </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <AllTheBooks />
      </header>
    </div>
  );
}

export default ReactLogo;