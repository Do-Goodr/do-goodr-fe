import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';
import EventContainer from './EventContainer';
import { serialize } from 'v8';



const SearchResults = () => {

  const { events, searchedEvents, category, org, filteredEvents, filterByCategory, setEvents, setSearchedEvents } = useContext(EventContext)
  const zip = useParams().zipcode
  const miles = useParams().mileage
  console.log(zip)
  console.log(miles)
  console.log('searchresults', searchedEvents)

  useEffect(() => {
    apiCalls.loadEventsByZipCode(zip, miles)
      .then(data => setSearchedEvents(data.data))
  }, [])

  return (
    <div>
      <h1>Search Results</h1>
      <EventContainer events={searchedEvents}/>
    </div>
  )

}

export default SearchResults