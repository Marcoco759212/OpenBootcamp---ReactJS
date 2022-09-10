import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import TaskPage from './pages/tasks/TaskPage';
import RegisterPage from './pages/auth/RegisterPage';

const AppRoutingFinal = () => {

    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
      const user = localStorage.getItem('credentials');
      if(user){
        setLoggedIn(true)
        console.log('true');
        console.log('obteniendo usuario', user, loggedIn);
      }else{
        setLoggedIn(false)
        console.log('false');
        console.log('obteniendo usuario', user, loggedIn);
      }

    }, [loggedIn]);

    console.log('logged', loggedIn);

    const loggedTo = () => {
      console.log('cambiando logged a true', loggedIn);
      setLoggedIn(true)
    }

    return (
      <div className="App">
        <header className="App-header">
          <Router>
              <Routes>
                  <Route exact path='' element={ 
                      loggedIn ? 
                          <Navigate from='/' replace to='/tasks'/>
                      :
                          <Navigate from='/' replace to='/login'/>
                  }/>
                  <Route exact path='/login' element={ <LoginPage logged={loggedTo} /> } />
                  <Route exact path='/signin' element={ <RegisterPage/> } />
                  <Route path='/tasks' element={ 
                      loggedIn ? 
                          <TaskPage/>
                      :
                          <Navigate from='/' replace to='/login' />
                  }/>
                  <Route path='*' element={ <NotFoundPage/> } />
              </Routes>
          </Router>
        </header>
      </div>
    );
}

export default AppRoutingFinal;
