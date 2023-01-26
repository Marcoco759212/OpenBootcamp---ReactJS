import './App.css';
import './styles/Tasks.css'
import TasksComponent from './components/pure/TasksComponent';

const val = 0;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TasksComponent></TasksComponent>
      </header>
    </div>
  );
}

export default App;
