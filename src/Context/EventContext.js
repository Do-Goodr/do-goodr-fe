import React, { useState, useEffect, createContext } from 'react'


const EventContext = createContext()

const EventProvider = props => {
  const [events, setEvents] = useState([])
  const [category, setCategory] = useState('Any')
  const [org, setOrg] = useState(null)
  const [allOrgs, setAllOrgs] = useState([])

  return (
    <EventContext.Provider value={{ events, setEvents, category, setCategory, org, setOrg, allOrgs, setAllOrgs }}>
      {props.children}  
    </EventContext.Provider>
  )
  
}

export { EventContext, EventProvider }