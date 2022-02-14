import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer: React.FC<{ events: any[], category: string, org: number }> = ({ events, category, org }) => {

  console.log(org)
  console.log(category)

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
      {!events.length && !org && category === 'Any' ? <h2>...loading...</h2> :
        <div>
          {!events.length && category !== 'Any' && <p className='error-message'>No events are available for that category!</p>}
          {!events.length && org && <p className='error-message'>No events are available for this organization!</p>}
        </div>}
    </div>
  )
}

export default EventContainer;