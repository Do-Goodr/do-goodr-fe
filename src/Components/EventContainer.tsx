import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp'; 
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer = () => {
  
  const { events, category, filteredEvents, filterByCategory, setEvents } = useContext(EventContext)
  const zip = useParams().zipcode
  const miles = useParams().mileage

  useEffect(() => {
    apiCalls.loadEventsByZipCode(zip, miles)
    .then(data => setEvents(data.data))
  }, [])
  
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
    return !filteredEvents.length && category ? 'Sorry, no events available with that category selection!'
        : filteredEvents.length ? filteredEventCards
        : eventCards
  }

  return (
    <div data-cy='events-container'>
      <h3 data-cy='filter-title'>Filter by Category</h3>
      <select
        name="category"
        data-cy='choose-category'
        placeholder="Choose Category"
        onChange={e => filterByCategory(e.target.value)}>
        <option hidden>Choose Category</option>
        <option value='animal-care'>Animal Care</option>
        <option value='campaigning'>Campaigning</option>
        <option value='community-development'>Community Development</option>
        <option value='food-service'>Food Service</option>
        <option value='grounds-cleanup'>Grounds Cleanup</option>
        <option value='healthcare'>Healthcare</option>
        <option value='nursing-home'>Nursing Home</option>
        <option value='youth-mentorship'>Youth Mentorship</option>
        <option value=''>Other</option>
      </select>
      <div className="events-container" >
        {displayedEventCards()}
      </div>
    </div>
  )
}

export default EventContainer;