import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import BtnGet from './components/BtnGet';
import ShowQuote from './components/ShowQuote';

import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <ShowQuote />
    </div>
  );
}

export default App;
