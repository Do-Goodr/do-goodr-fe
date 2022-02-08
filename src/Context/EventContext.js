import React, { useState, useEffect, createContext } from 'react'
import apiCalls from '../utilities/apiCalls';

const EventContext = createContext()

const EventProvider = props => {
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [category, setCategory] = useState('')
  const [zipCode, setZipCode] = useState()

  const filterByCategory = (selectedCategory) => {
      const filteredEventsByCategory = events.filter(event => event.category === selectedCategory)
      setFilteredEvents(filteredEventsByCategory)
      setCategory(selectedCategory)
  }
  
  useEffect(() => {
    apiCalls.loadAllEvents()
    .then(data => setEvents(data.data))
  }, [])

  return (
    <EventContext.Provider value={{ events, filteredEvents, category, filterByCategory }}>
      {props.children}  
    </EventContext.Provider>
  )
  
}

export { EventContext, EventProvider }