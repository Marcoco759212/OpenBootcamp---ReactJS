import { useEffect, useState } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import TaskPage from './pages/tasks/TaskPage';
import LoginPage from './pages/auth/LoginPage';

const AppRoutingOne = () => {

const [logged, setLogged] = useState(false);

let taskList = [
  {
    id: 1,
    name: 'Task1',
    description: 'desc'
  },
  {
    id: 2,
    name: 'Task2',
    description: 'desc2'
  }
]

const chageLogged = () => {
  console.log('Se ejecuta funcion changeLogged');
  setLogged(true)
}
 
useEffect(() => {
  const user = localStorage.getItem('credentials');
  if(user){
    setLogged(true)
  }else{
    setLogged(false)
  }
   console.log('obteniendo usuario', user, logged);
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <aside>
            <Link to='/'>| Home |</Link>
            <Link to='/about'>| About |</Link>
            <Link to='/profile'>| Profile |</Link>
            <Link to='/task/0'>| task 0 |</Link>
          </aside>
          <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route path='/about' element={<AboutPage/>} />
            <Route path='/login' element={
              logged ? 
              <Navigate replace to={`/profile`}/>
              :
                <LoginPage logged={chageLogged}/>
            }/>
            <Route path='/profile' 
              element={ 
                logged ? 
                  <ProfilePage/>
                :
                  <Navigate replace to={`/login`}/>
              }/>
            <Route path='/tasks' element={<TaskPage/>} />
            <Route path='/task/:id' element={
              <TaskDetailPage task={taskList[1]}/>
            } />
            <Route path='*' element={<NotFoundPage/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default AppRoutingOne;
