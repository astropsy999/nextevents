import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";

export default function FilteredEventsPage () {

    const router = useRouter()

    const fltrdData = router.query.slug

    if(!fltrdData) {
        return <p className="center">Завантаження...</p>
    }

    const [fltrdYear, fltrdMonth] = fltrdData

    if(isNaN(+fltrdYear) || isNaN(+fltrdMonth) || +fltrdYear > 2030 || +fltrdYear < 2021 || fltrdData.length > 2) {
        return <Fragment>
            <ErrorAlert>
            <p>Невірні дані фільтру. Будь ласка виправте</p>
            </ErrorAlert>
            
        <div className="center">
        <Button link="/events">Показати всі події</Button>
        </div>
        
        </Fragment>
    }

    const numYear = +fltrdYear
    const numMonth = +fltrdMonth

    const filteredEventsArr = getFilteredEvents({
        year: numYear, 
        month: numMonth})

    if(!filteredEventsArr || filteredEventsArr.length === 0) {
        return <Fragment>
            <ErrorAlert>
            <p>За обраним фільтром нічого не знайдено!</p>
            </ErrorAlert>
            <div className="center">
            <Button link="/events">Показати всі події</Button></div>
            
            </Fragment>
    }

    const date = new Date(numYear, numMonth-1)


    return (<Fragment>
            <ResultsTitle date={date}/>
            <EventList items={filteredEventsArr}/>
            </Fragment>
            )
}