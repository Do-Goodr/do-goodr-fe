import React, { useContext, useState } from 'react';
import '../Styles/SignIn.css';
import { EventContext } from '../Context/EventContext';
import EventContainer from './EventContainer';

const SignIn = () => {

  const { events, setOrg, org } = useContext(EventContext)
  console.log(events)

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
      <button className='add-org-btn'>create org</button>
      <EventContainer />
    </div>
  )
}

export default SignIn;