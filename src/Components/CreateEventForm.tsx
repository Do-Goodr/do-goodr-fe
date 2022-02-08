import React, { useState } from 'react';
import '../Styles/CreateEvent.css';
import apiCalls from '../utilities/apiCalls';

interface CreateEventProps {
  id: number
  
  date: string
  category: string
  start_time: string
  end_time: string
  vols_required: number
  description: string
}
const CreateEventForm: React.FC = ({}) => {

const [category, setCategory] = useState<CreateEventProps["category"]>()
const [date, setDate] = useState<CreateEventProps["date"]>()
const [startTime, setStartTime] = useState<CreateEventProps["start_time"]>()
const [endTime, setEndTime] = useState<CreateEventProps["end_time"]>()
const [volunteers, setVolunteers] = useState<CreateEventProps["vols_required"] | 0>(0)
const [description, setDescription] = useState<CreateEventProps['description']>()

const submitEvent = (e:any) => {
  e.preventDefault(e)
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

  return (
    <form className='create-event' data-cy='create-event'>
      <h2>Create New Volunteering Event</h2>
      <label>Date:
        <input type='date' onChange={(e) => setDate(e.target.value)}/>
      </label>
      <label>Start Time:
        <input type='time' onChange={(e) => setStartTime(e.target.value)}/>
      </label>
      <label>End Time:
        <input type='time' onChange={(e) => setEndTime(e.target.value)}/>
      </label>
      <input list='category' onChange={(e) => setCategory(e.target.value)}/>
        <datalist id='category'>
          <option hidden>Choose Category</option>
          <option >Animal Care</option>
          <option >Campaigning</option>
          <option >Youth Mentorship</option>
          <option >Nursing Home</option>
          <option >Food Service</option>
          <option >Grounds Cleanup</option>
          <option >Healthcare</option>
          <option >Community Development</option>
        </datalist>
      <label>Volunteers Needed:
        <input  type='number' min={1} max={100} onChange={(e) => setVolunteers((parseInt(e.target.value)))}/>
      </label>
      <textarea onChange={(e) => setDescription(e.target.value)}>Description:</textarea>
      <button onClick={(e) => submitEvent(e)}>Submit Opportunity</button>
    </form>
  );
}

export default CreateEventForm;