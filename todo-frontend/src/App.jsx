
import './App.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import ListTodoComponent from "./components/ListTodoComponent.jsx";
import HeaderComponent from "./components/HeaderComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import TodoComponent from "./components/TodoComponent.jsx";
import RegisterComponent from './components/RegisterComponent';
import LoginComponent from "./components/LoginComponent.jsx";
import {isUserLoggedIn} from "./services/AuthService.js";

function App() {

  function AuthenticatedRoute({children}){
    const isAuth = isUserLoggedIn();
    if(isAuth) return children;
    return <Navigate to="/" />
  }

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path='/' element = { <LoginComponent /> }></Route>
          <Route path='/todos' element = {
            <AuthenticatedRoute>
              <ListTodoComponent/>
            </AuthenticatedRoute>
          }></Route>
          <Route path='/add-todo' element = {
            <AuthenticatedRoute>
            <TodoComponent />
            </AuthenticatedRoute>
          }></Route>
          <Route path='/update-todo/:id' element = {
            <AuthenticatedRoute>
              <TodoComponent />
            </AuthenticatedRoute>
          }></Route>
          <Route path='/register' element = { <RegisterComponent /> }></Route>
          <Route path='/login' element = { <LoginComponent /> }></Route>

        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
