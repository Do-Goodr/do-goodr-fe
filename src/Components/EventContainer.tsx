import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer: React.FC<{events: any[], category: string}> = ({ events, category }) => {

  const eventCards = events && events.map((event: any, index: any) => {
    return (
      <Opp
        key={index}
        event={event}
      />
    )
  })

  return (
    <div data-cy='events-container'>
      <div className="events-container">
        {events && eventCards}
      </div>
      <div>
        {!events.length && <p className='error-message'>No events are available for that category!</p>}
      </div>
    </div>
  )
}

export default EventContainer;