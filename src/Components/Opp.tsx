import { useContext } from 'react';
import '../Styles/Opp.css';
import { Event, OppProps } from '../utilities/Types';
import apiCalls from '../utilities/apiCalls';
import { EventContext } from '../Context/EventContext';


const Opp = ({ event }: OppProps) => {

  const { events, setEvents, org } = useContext(EventContext)


  const handleDeletion = (id: number) => {
    let updatedEvents = events.filter((event: Event) => event.id !== id)
    setEvents(updatedEvents)
    apiCalls.deleteEvent(id)
  }

  const DeleteButton = () => {
    if (org) {
      return <button className='delete-opp-button' onClick={() => handleDeletion(event.id!)} data-cy='delete-event-button'>Delete Event</button>
    } else {
      return null
    }
  }


  return (
    <div className="opportunity" data-cy='opportunity'>
      <div className='opp-info'>
        <div className='opp-left'>
          <h2 className='event-name' data-cy='event-name'>{event.name}</h2>
          <p data-cy='event-address'><strong>Event Address:</strong>{event.address}</p>
          <p data-cy='event-phone'><strong>Phone:</strong> (928) 778-7857</p>
        </div>
        <div className='opp-right'>
          <p data-cy='event-category'><strong>Category:</strong> {event.category}</p>
          <p data-cy='event-date'><strong>Date:</strong> {event.date}</p>
          <p data-cy='event-time'><strong>Time:</strong> {event.start_time} - {event.end_time}</p>
          <p data-cy='event-volunteers'><strong>Volunteers Needed:</strong> {event.vols_required}</p>
        </div>
      </div>
      <p data-cy='event-description'><strong>Description:</strong> {event.description}</p>
      <DeleteButton />
    </div>
  );
}

export default Opp;