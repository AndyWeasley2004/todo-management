
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ListTodoComponent from "./components/ListTodoComponent.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = { <ListTodoComponent /> }></Route>
          <Route path='/todos' element = { <ListTodoComponent /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
