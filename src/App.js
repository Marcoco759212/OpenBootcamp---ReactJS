// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/forms/greetingStyled';
import Father from './components/container/father';
import OptionalRenders from './components/pure/forms/optionalRenders';
import LoginFormik from './components/pure/forms/loginFormik';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import ComponeteContext from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import { ComponenteEstado } from './components/ComponenteEstado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Greeting name="Marco"></Greeting>   */}
        {/* <GreetingStyled name={'Marco'}></GreetingStyled> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <ComponeteContext></ComponeteContext> */}
        {/* <Ejemplo4 nombre={'Pepe'}>
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
        {/* <ComponenteEstado></ComponenteEstado> */}
        {/* <Father></Father> */}
        {/*<OptionalRenders></OptionalRenders>  Renderizado condicional*/}
        <LoginFormik></LoginFormik>
      </header>
    </div>
  );
}

export default App;
