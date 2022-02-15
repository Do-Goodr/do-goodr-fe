import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import apiCalls from '../utilities/apiCalls';
import '../Styles/SearchResults.css';
import { EventContext } from '../Context/EventContext';
import { Event, Error } from '../utilities/Types';
import EventContainer from './EventContainer';

const SearchResults = () => {

  const { setCategory } = useContext(EventContext)
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState<any>(events)
  const [error, setError] = useState<Error['error']>('')
  console.log('error-test', error)

  const zip = useParams().zipcode
  const miles = useParams().mileage

  useEffect(() => {
    apiCalls.loadEventsByZipCode(zip, miles)
      .then(data => {
        if (data.error) {
          setError(data.error)
        } else {
          setEvents(data.data)
        }
      })
      .then(events => setFilteredEvents(events))
  }, [])

  const filterByCategory = (selectedCategory: string) => {
    if (selectedCategory === 'Any') {
      setFilteredEvents(events) 
    } else {
      const filteredEventsByCategory = events.filter((event: { category: any; }) => event.category === selectedCategory)
      setCategory(selectedCategory)
      setFilteredEvents(filteredEventsByCategory)
    }
  }

  return (
    <div>
      {error ? <p>{error}</p> :
        <div className='search-results-section'>
        <h1 className='search-result-title'>Search Results</h1>
        <select
          name="category"
          className='choose-category-menu'
          data-cy='choose-category'
          placeholder="Choose Category"
          onChange={(e) => filterByCategory(e.target.value)}>
          <option hidden>Filter by Category</option>
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
        {!filteredEvents ? <EventContainer events={events} /> : <EventContainer events={filteredEvents} />}
      </div>}
    </div>
  )

}

export default SearchResults