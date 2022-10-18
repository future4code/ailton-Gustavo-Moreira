import './App.css';
import { Router } from './routes/Router';
import GlobalState from './componentes/global/GlobalState';

function App() {
  return (
    <GlobalState>
     <Router />
    </GlobalState>
  );
}

export default App;
