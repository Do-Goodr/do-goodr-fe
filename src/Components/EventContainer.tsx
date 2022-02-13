import '../Styles/EventContainer.css';
import Opp from './Opp';
import { Event, EventContainerProps } from '../utilities/Types';



const EventContainer = ({ events }: EventContainerProps) => {

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
      <div className="events-container" >
        {eventCards}
      </div>
    </div>
  )
}

export default EventContainer;