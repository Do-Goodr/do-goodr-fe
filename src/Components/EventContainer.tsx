import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp'; 


const EventContainer = () => {

  const [events, setEvents] = useState([])
  const zip = useParams().zipcode
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