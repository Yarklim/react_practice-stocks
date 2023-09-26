import Header from './components/Header/Header';
import Router from './routes/Router';
import NoInternet from './components/NoInternet/NoInternet';
import { useOnlineStatus } from './hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus();

  if (!isOnline) return <NoInternet />;

  return (
    <div className="app">
      <Header />
      <Router />
    </div>
  );
}

export default App;
