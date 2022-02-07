import React, { useState } from 'react';
import '../Styles/CreateEvent.css';
import apiCalls from '../utilities/apiCalls';

interface CreateEventProps {

  date: string
  category: string
  start_time: string
  end_time: string
  volunteers_needed: string
  description: string
}
const CreateEventForm: React.FC<CreateEventProps> = ({}) => {

const [category, setCategory] = useState<CreateEventProps["category"]>()
const [date, setDate] = useState<CreateEventProps["date"]>()
const [startTime, setStartTime] = useState<CreateEventProps["start_time"]>()
const [endTime, setEndTime] = useState<CreateEventProps["end_time"]>()
const [volunteers, setVolunteers] = useState<CreateEventProps["volunteers_needed"]>()
const [description, setDescription] = useState<CreateEventProps['description']>()

const submitEvent = () => {
  const newEvent = {
    id: 1,
    date: date,
    start_time: startTime,
    end_time: endTime,
    category: category,
    volunteers_needed: volunteers,
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
          <option >Animals</option>
          <option >Campaigning</option>
          <option >Children</option>
          <option >Elderly</option>
          <option >Food Service</option>
          <option >Grounds Clean Up</option>
          <option >Health Care</option>
        </datalist>
      <label>Volunteers Needed:
        <input type='number' min='1' max='100' onChange={(e) => setVolunteers(e.target.value)}/>
      </label>
      <textarea onChange={(e) => setDescription(e.target.value)}>Description:</textarea>
      <button onClick={(e) => submitEvent()}>Submit Opportunity</button>
    </form>
  );
}

export default CreateEventForm;