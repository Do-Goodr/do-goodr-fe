import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp'; 

interface Event {
  address: string
  category: string
  description: string
  duration: number
  name: string
  organization_id: number
  start_time: string
  vols_required: number
}  

const EventContainer = () => {

  const [events, setEvents] = useState<Event[]>([])
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