import React, { useContext, useState, useEffect } from 'react';
import '../Styles/SignIn.css';
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';
import EventContainer from './EventContainer';
import { useNavigate } from 'react-router'
import { OrgDetails } from '../utilities/Types';
import { Link } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate()

  const { events, setCategory, setOrg, category, setEvents, org, allOrgs, setAllOrgs } = useContext(EventContext)

  useEffect(() => {
    apiCalls.loadAllOrganizations()
      .then(data => setAllOrgs(data.data))
  }, [])

  const orgNames = allOrgs.map((org: OrgDetails) => {
    return (
      <option key={org.id} value={org.id}>{org.name}</option>
    )
  })

  const handleOrgChange = (id: number) => {
    const singleOrg = allOrgs.find((el: OrgDetails) => el.id === id)
    setOrg(singleOrg)
    setCategory('Any')
    apiCalls.loadEventsByOrg(id)
      .then(data => setEvents(data.data))
  }

  return (
    <div className="sign-in">
      <p className='sign-in-title'>View Your Organizations Events</p>
      <form data-cy='organization-form' className="organization-form">
        <select
          name="organization"
          placeholder="Choose Organization"
          data-cy='choose-organization'
          className='choose-org-menu'
          aria-label='Drop down menu to search for your Organization'
          onChange={(e) => handleOrgChange(parseInt(e.target.value))}>
          <option hidden>Choose Organization</option>
          {orgNames}
        </select>
      </form>
      {!org ?
        <div>
          <p className='no-org-message'>Don't see your organization? Create it below!</p>
          <button className='add-org-btn' data-cy='add-org-btn' onClick={() => navigate('/neworganization')} aria-label='Button to create a new organization'>Create New Organization</button>
        </div> : 
        <Link to='/newevent' className='add-opp-btn' data-cy='add-opp-btn' aria-label='Button to create a new volunteering event'>Add Volunteer Opp</Link>}
      

      {org && <EventContainer events={events} />}
    </div>
  )
}

export default SignIn;