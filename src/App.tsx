import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header/Header';
import { RouteSwitch } from './components/core/RouteSwitch/RouteSwitch';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteSwitch />
    </BrowserRouter>
  );
}

export default App;
