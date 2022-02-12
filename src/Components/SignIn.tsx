import React, { useContext, useState, useEffect } from 'react';
import '../Styles/SignIn.css';
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import EventContainer from './EventContainer';
import { useNavigate } from 'react-router'

const SignIn = () => {

  const navigate = useNavigate()

  const { events, setOrg, setEvents, org } = useContext(EventContext)
  console.log('signin: ', events)

  useEffect(() => {
    apiCalls.loadAllEvents()
      .then(data => setEvents(data.data))
  }, [])

  return (
    <div>
      <p>View Your Organizations Events</p>
      <form className="SignIn">
        <select
          name="organization"
          placeholder="Choose Organization"
          onChange={(e) => setOrg(e.target.value)}>
            <option hidden>Choose Organization</option>
            <option>American Red Cross</option>
            <option>Farts McGee</option>
            <option>Food Bank</option>
        </select>
      </form>
      <p>Don't see your organization? Create it below!</p>
      <button className='add-org-btn' data-cy='add-org-btn' onClick={() => navigate('/neworganization')}>create org</button>
      <EventContainer events={events}/>
    </div>
  )
}

export default SignIn;