import logo from './logo.svg';
import './App.css';
import ContactListComponent from './components/container/contact_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
