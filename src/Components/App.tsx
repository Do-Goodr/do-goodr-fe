import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import ZipCodeForm from './ZipCodeForm';
import '../Styles/App.css';
import EventContainer from './EventContainer';
import CreateEventForm from './CreateEventForm';
import SignIn from './SignIn';
import { EventProvider } from '../Context/EventContext';
import SearchResults from './SearchResults';

const App = () => {

  return (
    <EventProvider>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<ZipCodeForm />} />
          <Route path="results/:zipcode/:mileage" element={<SearchResults />} />
          <Route path='/newevent' element={<CreateEventForm />} />
          <Route path='/signin' element={<SignIn />} />
        </Routes>
        
      </main>
    </EventProvider>
  );
}

export default App;
