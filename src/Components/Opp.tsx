import React from 'react';
import '../Styles/Opp.css';
import { Event, OppProps } from '../utilities/Types';


const Opp = ({ event }: OppProps ) => {
  return (
    <div className="opportunity" data-cy='opportunity'>
      <h2>{event.name}</h2>
      <p>Category: {event.category}</p>
      <p>Event Address: {event.address}</p>
      <p>Date: {event.start_time}</p>
      <p>Volunteers Needed: {event.vols_required}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default Opp;