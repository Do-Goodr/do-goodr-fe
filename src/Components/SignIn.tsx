import React, { useContext, useState, useEffect } from 'react';
import '../Styles/SignIn.css';
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import EventContainer from './EventContainer';

const SignIn = () => {

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
      <form className="SignIn">
        <select
          name="organization"
          placeholder="Choose Organization"
          onChange={(e) => handleOrgChange(parseInt(e.target.value))}>
            <option hidden>Choose Organization</option>
            <option>1</option>
            <option>2</option>
            <option>Food Bank</option>
        </select>
      </form>
      <p>Don't see your organization? Create it below!</p>
      <button className='add-org-btn'>create org</button>
      {org && <EventContainer events={events} />}
    </div>
  )
}

export default SignIn;