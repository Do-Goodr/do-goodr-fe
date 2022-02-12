import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer: React.FC<{events: any[]}> = ({ events }) => {

  const { category, org, filterByCategory, setEvents } = useContext(EventContext)

  const eventCards = events && events.map((event: any, index: any) => {
    return (
      <Opp
        key={index}
        event={event}
      />
    )
  })

  // const filteredEventCards = filteredEvents && filteredEvents.map((event: any, index: any) => {
  //   return (
  //     <Opp
  //       key={index}
  //       event={event}
  //     />
  //   )
  // })

  // const displayedEventCards = () => {
  //   if (!org) {
  //     return !filteredEvents.length && category ? 'Sorry, no events available with that category selection!'
  //       : filteredEvents.length ? filteredEventCards
  //         : eventCards
  //   } else {
  //     return eventCards.filter((event: any) => {
  //       return event['organization_id'] === org
  //     })
  //   }
  // }

  // const displayedEventCards = () => {
  //   if (category) {
  //     return filteredEventCards
  //   } else {
  //     return eventCards
  //   }
  // }


  // eventCards is an array of JSX elements - not sure we can call filter on an array of JSX elements? ^^^^

  return (
    <div data-cy='events-container'>
      <div className="events-container" >
        {eventCards}
      </div>
    </div>
  )
}

export default EventContainer;