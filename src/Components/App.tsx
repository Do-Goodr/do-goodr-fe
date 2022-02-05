import React, { useEffect } from 'react';
import Header from './Header';
import Form from './Form';
import apiCalls from '../utilities/apiCalls';
import '../Styles/App.css';

const App = () => {

  useEffect(() => {
    apiCalls.loadAllEvents()
    .then(data => console.log(data))
  }, [])

  return (
    <main className="App">
      <Header />
      <Form />
    </main>
  );
}

export default App;
