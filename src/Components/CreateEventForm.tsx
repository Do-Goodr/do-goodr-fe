import React, { useState } from 'react';
import '../Styles/CreateEvent.css';
import apiCalls from '../utilities/apiCalls';
import { CreatedEvent } from '../utilities/Types';





const CreateEventForm: React.FC = () => {

const [category, setCategory] = useState<CreatedEvent["category"]>()
const [date, setDate] = useState<CreatedEvent["date"]>()
const [startTime, setStartTime] = useState<CreatedEvent["start_time"]>()
const [endTime, setEndTime] = useState<CreatedEvent["end_time"]>()
const [volunteers, setVolunteers] = useState<CreatedEvent["vols_required"] | 0 | null>(null)
const [description, setDescription] = useState<CreatedEvent['description']>()

const submitEvent = (e:React.MouseEvent) => {
  e.preventDefault()
  const newEvent = {
    organization_id: 1,
    name: 'American Red Cross',
    address: '123 Sesame St',
    date: date,
    start_time: startTime,
    end_time: endTime,
    category: category,
    vols_required: volunteers,
    description: description
  }
  apiCalls.postEvent(newEvent)
}

const SubmitButton = () => {
  if (date && startTime && endTime && category && volunteers && description) {
    return <button data-cy='enabled-submit-button' onClick={(e) => submitEvent(e)}>Submit Opportunity</button>
  } else {
    return <button disabled={true} data-cy='disabled-submit-button' onClick={(e) => submitEvent(e)}>Submit Opportunity</button>
  }
}

  return (
    <form className='create-event' data-cy='create-event-form'>
      <h2>Create New Volunteering Event</h2>
      <label>Date:
        <input type='date' data-cy='set-date' onChange={(e) => setDate(e.target.value)}/>
      </label>
      <label>Start Time:
        <input type='time' data-cy='set-start-time' onChange={(e) => setStartTime(e.target.value)}/>
      </label>
      <label>End Time:
        <input type='time' data-cy='set-end-time' onChange={(e) => setEndTime(e.target.value)}/>
      </label>
      <input list='category' data-cy='set-category' placeholder='Choose Category' onChange={(e) => setCategory(e.target.value)}/>
        <datalist id='category'>
          <option >Animal Care</option>
          <option >Campaigning</option>
          <option >Community Development</option>
          <option >Food Service</option>
          <option >Grounds Cleanup</option>
          <option >Healthcare</option>
          <option >Nursing Home</option>
          <option >Youth Mentorship</option>
        </datalist>
      <label>Volunteers Needed:
        <input type='number' min={1} max={100} data-cy='set-volunteer-num' onChange={(e) => setVolunteers((parseInt(e.target.value)))}/>
      </label>
      <textarea placeholder='Description...' data-cy='set-description' onChange={(e) => setDescription(e.target.value)}></textarea>
      <SubmitButton />
    </form>
  );
}

export default CreateEventForm;