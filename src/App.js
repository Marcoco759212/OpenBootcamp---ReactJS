import logo from './logo.svg';
import './App.css';
import { Clock } from './components/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock nombre={'Marco'} apellidos={'hdz'}></Clock>
      </header>
    </div>
  );
}

export default App;
