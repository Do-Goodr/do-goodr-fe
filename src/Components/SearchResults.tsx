import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';
import EventContainer from './EventContainer';
import { serialize } from 'v8';



const SearchResults = () => {

  const { setCategory, category, org } = useContext(EventContext)
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const zip = useParams().zipcode
  const miles = useParams().mileage

  console.log(zip)
  console.log(miles)
  

  useEffect(() => {
    apiCalls.loadEventsByZipCode(zip, miles)
      .then(data => setEvents(data.data))
  }, [])

  const filterByCategory = (selectedCategory: any) => {
    const filteredEventsByCategory = events.filter((event: { category: any; }) => event.category === selectedCategory)
    setCategory(selectedCategory)
    setFilteredEvents(filteredEventsByCategory)
  }

  return (
    <div>
      <h1>Search Results</h1>
      <h3 data-cy='filter-title'>Filter by Category</h3>
      <select
        name="category"
        data-cy='choose-category'
        placeholder="Choose Category"
        onChange={e => filterByCategory(e.target.value)}>
        <option hidden>Choose Category</option>
        <option>Any</option>
        <option>Animal Care</option>
        <option>Campaigning</option>
        <option>Community Development</option>
        <option>Food Service</option>
        <option>Grounds Cleanup</option>
        <option>Healthcare</option>
        <option>Nursing Home</option>
        <option>Youth Mentorship</option>
        <option value=''>Other</option>
      </select>
      <EventContainer events={events} />
    </div>
  )

}

export default SearchResults