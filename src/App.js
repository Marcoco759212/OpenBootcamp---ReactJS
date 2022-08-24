import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name="Marco"></Greeting>   */}
        <TaskListComponent></TaskListComponent>
      </header>
    </div>
  );
}

export default App;
