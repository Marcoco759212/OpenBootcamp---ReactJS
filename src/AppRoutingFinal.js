import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom'
import DashBoardPage from './pages/dashboard/DashBoardPage';
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';

const AppRoutingFinal = () => {

    let loggedIn = true;

  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <Routes>
                <Route exact path='' element={ 
                    loggedIn ? 
                        <Navigate from='/' replace to='/dashboard'/>
                    :
                        <Navigate from='/' replace to='/login'/>
                 }/>
                <Route exact path='/login' element={ <LoginPage/> } />
                <Route path='dashboard' element={ 
                    loggedIn ? 
                        <DashBoardPage/>
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
