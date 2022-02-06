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
      <p>{event.address}</p>
    </div>
  );
}

export default Opp;