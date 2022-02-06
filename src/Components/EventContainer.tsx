import React, { useEffect, useState } from 'react';
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp'; 


const EventContainer = () => {

  const [events, setEvents] = useState([])
  console.log(events)
  
  useEffect(() => {
    apiCalls.loadAllEvents()
    .then(data => setEvents(data.data))
  }, [])
  
  const eventCards = events && events.map((event, index) => {
    return (
      <Opp
        key={index} 
        event={event}
      />
    )
  })

  return (
    <div className="events-container" data-cy='events-container'>
      {eventCards}
    </div>
  )
}

export default EventContainer;