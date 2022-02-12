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


  const handleOrgChange = (id: any) => {
    setOrg(id)
    apiCalls.loadEventsByOrg(id)
    .then(data => setEvents(data.data))
  }

  return (
    <div>
      <p>View Your Organizations Events</p>
      <form data-cy='organization-form' className="SignIn">
        <select
          name="organization"
          placeholder="Choose Organization"
          data-cy='choose-organization'
          onChange={(e) => handleOrgChange(parseInt(e.target.value))}>
            <option hidden>Choose Organization</option>
            <option>1</option>
            <option>2</option>
            <option>4</option>
        </select>
      </form>
      <p>Don't see your organization? Create it below!</p>
      <button className='add-org-btn' data-cy='add-org-btn' onClick={() => navigate('/neworganization')}>create org</button>
      {org && <EventContainer events={events} />}
    </div>
  )
}

export default SignIn;