import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Form from './Form';
import '../Styles/App.css';
import EventContainer from './EventContainer';

const App = () => {

  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<> <Header /> <Form /> </>} />
        <Route path="/:zipcode" element={<EventContainer />} />
      </Routes>
    </main>
  );
}

export default App;
