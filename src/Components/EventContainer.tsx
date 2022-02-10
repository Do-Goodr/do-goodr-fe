import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import '../Styles/EventContainer.css';
import apiCalls from '../utilities/apiCalls';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const EventContainer = () => {

  const { events, category, org, filteredEvents, filterByCategory, setEvents } = useContext(EventContext)
  const zip = useParams().zipcode
  const miles = useParams().mileage
  console.log('eventcontainer', events)
  console.log(zip)
  console.log(miles)

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
    <div>
      <h3>Filter by category</h3>
      <select
        name="category"
        placeholder="Choose Category"
        onChange={e => filterByCategory(e.target.value)}>
        <option hidden>Choose Category</option>
        <option>Nursing Home</option>
        <option>Grounds Cleanup</option>
        <option>Animal Care</option>
        <option>Campaigning</option>
        <option>Food Service</option>
        <option>Youth Mentorship</option>
        <option>Community Development</option>
        <option>Healthcare</option>
        <option>Other</option>
      </select>
      <div className="events-container" data-cy='events-container'>
        {displayedEventCards()}
      </div>
    </div>
  )
}

export default EventContainer;