import { useContext } from 'react';
import '../Styles/Opp.css';
import { Event, OppProps } from '../utilities/Types';
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';


const Opp = ({ event }: OppProps ) => {

  const { events, setEvents, org } = useContext(EventContext)


  const handleDeletion = (id: number) => {
    let updatedEvents = events.filter((event: Event) => event.id !== id)
    setEvents(updatedEvents)
    apiCalls.deleteEvent(id)
  }

  const DeleteButton = () => {
    if (org && event['organization_id'] === org) {
      return <button onClick = {() => handleDeletion(event.id)} data-cy='delete-event-button'>🗑</button>
    } else {
      return null
    }
  }


  return (
    <div className="opportunity" data-cy='opportunity'>
      <h2 className='event-name' data-cy='event-name'>{event.name}</h2>
      <p data-cy='event-phone'>Phone: 555-555-5555</p>
      <p data-cy='event-category'>Category: {event.category}</p>
      <p data-cy='event-address'>Event Address: {event.address}</p>
      <p data-cy='event-date'>Date: {event.date}</p>
      <p data-cy='event-time'>Time: {event.start_time} - {event.end_time}</p>
      <p data-cy='event-volunteers'>Volunteers Needed: {event.vols_required}</p>
      <p data-cy='event-description'>Description: {event.description}</p>
      <DeleteButton />
    </div>
  );
}

export default Opp;