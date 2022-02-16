import '../Styles/EventContainer.css';
import Opp from './Opp';
import { EventContext } from '../Context/EventContext';
import { Event, EventContainerProps } from '../utilities/Types';
import { useContext } from 'react'


const EventContainer = ({ events }: EventContainerProps) => {

  const { category, org } = useContext(EventContext)

  const eventCards = events && events.map((event: Event, index: number) => {
    return (
      <Opp
        key={index}
        event={event}
      />
    )
  })

  return (
    <div data-cy='events-container'>
      <div className="events-container">
        {events && eventCards}
      </div>
      {!events.length && !org && category === 'Any' ? <h2>...loading...</h2> :
        <div>
          {!events.length && category !== 'Any' && <p className='error-message'>No events are available for that category!</p>}
          {!events.length && org && <p className='error-message'>No events are available for this organization!</p>}
        </div>}
    </div>
  )
}

export default EventContainer;