import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import { Event } from '../utilities/Types';



const SearchResults = () => {

  const { events, category, org, filteredEvents, filterByCategory, setEvents } = useContext(EventContext)
  const zip = useParams().zipcode
  const miles = useParams().mileage

}

export default SearchResults