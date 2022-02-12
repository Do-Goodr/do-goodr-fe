import React, { useState, useEffect, createContext } from 'react'
import apiCalls from '../utilities/apiCalls';

const EventContext = createContext()

const EventProvider = props => {
  const [events, setEvents] = useState([])
  // const [searchedEvents, setSearchedEvents] = useState([])
  // const [filteredEvents, setFilteredEvents] = useState([])
  const [category, setCategory] = useState('')
  const [org, setOrg] = useState('')

  // const filterByCategory = (selectedCategory) => {
  //   const filteredEventsByCategory = events.filter(event => event.category === selectedCategory)
  //   setFilteredEvents(filteredEventsByCategory)
  //   setCategory(selectedCategory)
  // }

  // return (
  //   <EventContext.Provider value={{ events, searchedEvents, filteredEvents, category, org, setFilteredEvents, setCategory, setEvents, setOrg, setSearchedEvents }}>
  //     {props.children}  
  //   </EventContext.Provider>
  // )

  return (
    <EventContext.Provider value={{ events,setEvents,category, setCategory, org, setOrg }}>
      {props.children}  
    </EventContext.Provider>
  )
  
}

export { EventContext, EventProvider }