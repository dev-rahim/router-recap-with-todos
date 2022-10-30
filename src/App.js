import React, { createContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Error404 from './Components/Error404/Error404';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Todo from './Components/Todo/Todo';
import Todos from './Components/Todos/Todos';

export const TextContext = React.createContext('first')

function App() {

  return (
    <TextContext.Provider value='First Context Value'>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/todo/:id' element={<Todo />} />
            <Route path='*' element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </TextContext.Provider>
  );
}

export default App;
