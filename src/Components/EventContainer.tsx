import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer: React.FC<{events: any[]}> = ({ events }) => {

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
      <div className="events-container" >
        {eventCards}
      </div>
    </div>
  )
}

export default EventContainer;