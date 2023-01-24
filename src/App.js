import './App.css';
import TodoContainer from './components/container/TodoContainer';
import TodoFormContainer from './components/container/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer>
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
