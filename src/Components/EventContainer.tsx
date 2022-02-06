import React, { useEffect, useState } from 'react';
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';

const EventContainer = () => {

  const [events, setEvents] = useState([])
  console.log(events)
  
  useEffect(() => {
    apiCalls.loadAllEvents()
    .then(data => setEvents(data.data))
  }, [])
  
  return (
    <div className="events-container" data-cy='events-container'>
    </div>
  )
}

export default EventContainer;