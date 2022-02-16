import React, { useEffect, useState, useContext, MouseEvent } from 'react';
import '../Styles/CreateEvent.css';
import apiCalls from '../utilities/apiCalls';
import { CreatedEvent } from '../utilities/Types';
import { EventContext } from '../Context/EventContext';


const CreateEventForm = () => {

  const [category, setCategory] = useState<CreatedEvent["category"]>('')
  const [date, setDate] = useState<CreatedEvent["date"]>('')
  const [startTime, setStartTime] = useState<CreatedEvent["start_time"]>('')
  const [endTime, setEndTime] = useState<CreatedEvent["end_time"]>('')
  const [address, setAddress] = useState<CreatedEvent["address"]>('')
  const [volunteers, setVolunteers] = useState<CreatedEvent["vols_required"]>(0)
  const [description, setDescription] = useState<CreatedEvent['description']>('')
  const [eventName, setEventName] = useState<CreatedEvent['name']>('')
  const { org } = useContext(EventContext)

  const submitEvent = (e: MouseEvent) => {
    e.preventDefault()
    const newEvent = {
      organization_id: org.id,
      name: eventName,
      address: address,
      phone: '(928)778-7857',
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
    if (date && startTime && endTime && category && address && volunteers && description) {
      return <button className="event-submit-btn-enabled" data-cy='enabled-submit-button' onClick={(e) => submitEvent(e)}>Submit Opportunity</button>
    } else {
      return <button className="event-submit-btn-disabled" disabled={true} data-cy='disabled-submit-button' onClick={(e) => submitEvent(e)}>Submit Opportunity</button>
    }
  }

  return (
    <div className="event-form-container">
      <form className='create-event' data-cy='create-event-form'>
        <h2 className='create-event-title'>Create New Volunteering Event</h2>
        <label>Name of Event:
          <input type='text' className='event-name-input' data-cy='set-event-name' placeholder='Ex: Beach Cleanup' onChange={(e) => setEventName(e.target.value)} />
        </label>
        <label>Date:
          <input type='date' className='date-input' data-cy='set-date' onChange={(e) => setDate(e.target.value)} />
        </label>
        <div className='time-inputs'>
          <label>Start Time:
            <input type='time' className='start-time-input' data-cy='set-start-time' onChange={(e) => setStartTime(e.target.value)} />
          </label>
          <label>End Time:
            <input type='time' className='end-time-input' data-cy='set-end-time' onChange={(e) => setEndTime(e.target.value)} />
          </label>
        </div>
        <label>Address:
          <input type='text' className='address-input' data-cy='set-address' placeholder='Event Address' onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>Category:
          <input list='category' className='category-input' data-cy='set-category' placeholder='Choose Category' onChange={(e) => setCategory(e.target.value)} />
          <datalist id='category'>
            <option value='Animal Care'></option>
            <option value='Campaigning'></option>
            <option value='Community Development'></option>
            <option value='Food Service'></option>
            <option value='Grounds Cleanup'></option>
            <option value='Healthcare'></option>
            <option value='Nursing Home'></option>
            <option value='Youth Mentorship'></option>
            <option value='Other'></option>
          </datalist>
        </label>
        <label>Volunteers Needed:
          <input type='number' className='vol-num-input' min={1} max={100} data-cy='set-volunteer-num' onChange={(e) => setVolunteers((parseInt(e.target.value)))} />
        </label>
        <label>Event Description:
          <textarea placeholder='Give potential volunteers the detail they need for this event...' className='description-input' data-cy='set-description' onChange={(e) => setDescription(e.target.value)}></textarea>
        </label>
        <SubmitButton />
      </form>
    </div>
  );
}

export default CreateEventForm;