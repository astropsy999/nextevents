import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import  EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
 
function EventDetailPage () {

    const router = useRouter()
    const eventId = router.query.eventId
    console.log('eventId: ', eventId);

    const event = getEventById(eventId)
    console.log('event: ', event);

    if(!event) {
        return <p>No event found!</p>
    }

    return (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics 
            date={event.date} 
            address={event.location} 
            image={event.image} 
            imageAlt={event.title}
            />
            <EventContent><p>{event.description}</p></EventContent>
        </Fragment>
    )
}

export default EventDetailPage;