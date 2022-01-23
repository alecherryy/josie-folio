import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <h1>Welcome to this site</h1>
    </BrowserRouter>
  );
}

export default App;
