import './App.css';
import LoginUseReducer from './components/pure/LoginUseReducer';
// import Counter from './components/pure/Counter';
import LoginUseState from './components/pure/LoginUseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter></Counter> */}
        {/* <LoginUseState></LoginUseState> */}
        <LoginUseReducer></LoginUseReducer>
      </header>
    </div>
  );
}

export default App;
