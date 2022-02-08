import React from 'react';
import '../Styles/Opp.css';

interface Event {
  address: string
  category: string
  description: string
  duration: number
  name: string
  organization_id: number
  start_time: string
  vols_required: number
}  

interface OppProps {
  key: number
  event: Event  
}

const Opp = ({ event }: OppProps ) => {
  return (
    <div className="opportunity" data-cy='opportunity'>
      <h2>{event.name}</h2>
      <p>Category: {event.category}</p>
      <p>Address: {event.address}</p>
      <p>Date: {event.start_time}</p>
      <p>Volunteers Needed: {event.vols_required}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default Opp;