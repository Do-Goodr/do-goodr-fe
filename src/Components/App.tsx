import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Form from './Form';
import '../Styles/App.css';
import EventContainer from './EventContainer';
import CreateEvent from './CreateEvent';
import SignIn from './SignIn';
import { EventProvider } from '../Context/EventContext';

const App = () => {

  return (
    <EventProvider>
      <main className="App">
        <Routes>
          <Route path="/" element={<> <Header /> <Form /> </>} />
          <Route path="/:zipcode" element={<EventContainer />} />
        </Routes>
        <SignIn />
      </main>
    </EventProvider>
  );
}

export default App;
