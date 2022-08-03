import { useRouter } from "next/router";
import { Fragment } from "react";
import { getEventById } from "../../dummy-data";
import  EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
 
function EventDetailPage () {

    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)

    if(!event) {
        return <Fragment><ErrorAlert><p>Подій не знайдено</p></ErrorAlert>
        <div className="center"><Button link='/events'>Дивитись всі події</Button></div></Fragment>
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