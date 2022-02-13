import '../Styles/EventContainer.css';
import Opp from './Opp';
import { EventContainerProps } from '../utilities/Types';



const EventContainer = ({ events }: EventContainerProps) => {

  const eventCards = events && events.map((event: any, index: any) => {
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