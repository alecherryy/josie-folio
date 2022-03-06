import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import { Header } from './components/layouts/Header/Header';
import { RouteSwitch } from './components/core/RouteSwitch/RouteSwitch';
import { Splash } from './components/core/Splash/Splash';
import { useEffect, useState } from 'react';

function App() {
  const isFirstVisit = sessionStorage.getItem('isFirstVisit');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2500);

  }, [setIsReady])

if (!isReady && !isFirstVisit) {
  return <Splash title={`josie — portfolio`} />;
}

return (
  <BrowserRouter>
    <Header />
    <RouteSwitch />
  </BrowserRouter>
);
}

export default App;
