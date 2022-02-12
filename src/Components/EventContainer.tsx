import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer: React.FC<{events:[]}> = ({ events }) => {

  const { category, org, filteredEvents, filterByCategory, setEvents } = useContext(EventContext)

  const eventCards = events && events.map((event: any, index: any) => {
    return (
      <Opp
        key={index}
        event={event}
      />
    )
  })

  const filteredEventCards = filteredEvents && filteredEvents.map((event: any, index: any) => {
    return (
      <Opp
        key={index}
        event={event}
      />
    )
  })

  const displayedEventCards = () => {
    if (!org) {
      return !filteredEvents.length && category ? 'Sorry, no events available with that category selection!'
        : filteredEvents.length ? filteredEventCards
          : eventCards
    } else {
      return eventCards.filter((event: any) => {
        return event.name === org
      })
    }
  }

  return (
    <div data-cy='events-container'>
      <h3 data-cy='filter-title'>Filter by Category</h3>
      <input
        list="category"
        data-cy='choose-category'
        placeholder="Choose Category"
        onChange={e => filterByCategory(e.target.value)}/>
        <datalist id='category'>
          <option value='Animal Care'></option>
          <option value='Campaigning'></option>
          <option value='Community Development'></option>
          <option value='Food Service'></option>
          <option value='Grounds Cleanup'></option>
          <option value='Healthcare'></option>
          <option value='Nursing Home'></option>
          <option value='Youth Mentorship'></option>
          <option value='Other'></option>
        </datalist>

        
      
      <div className="events-container" >
        {displayedEventCards()}
      </div>
    </div>
  )
}

export default EventContainer;