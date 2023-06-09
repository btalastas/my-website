import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HeaderBar from './components/HeaderBar';
function App() {
  return (
    <ChakraProvider>
    <HeaderBar></HeaderBar>
      <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      
    </div>
    </ChakraProvider>
  );
}

export default App;
