import React from 'react';
import Header from './Header';
import Form from './Form';
import '../Styles/App.css';
import EventContainer from './EventContainer';

const App = () => {

  return (
    <main className="App">
      <Header />
      <Form />
      <EventContainer />
    </main>
  );
}

export default App;
