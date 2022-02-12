import React, { useState, useEffect, createContext } from 'react'
import apiCalls from '../utilities/apiCalls';

const EventContext = createContext()

const EventProvider = props => {
  const [events, setEvents] = useState([])
  const [category, setCategory] = useState('Any')
  const [org, setOrg] = useState(null)


  return (
    <EventContext.Provider value={{ events,setEvents,category, setCategory, org, setOrg }}>
      {props.children}  
    </EventContext.Provider>
  )
  
}

export { EventContext, EventProvider }