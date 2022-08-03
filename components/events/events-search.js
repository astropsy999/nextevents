import { useRef } from "react";
import Button from "../ui/button";

import classes from "./events-search.module.css"

export default function EventsSearch (props) {

    const yearsRef = useRef()
    const monthRef = useRef()
   

    function submitHandler(event) {
        event.preventDefault()
        const yearsValue = yearsRef.current.value
        console.log('yearsValue: ', yearsValue);
        const monthValue = monthRef.current.value
        console.log('monthValue: ', monthValue);

        props.onSearch(yearsValue, monthValue)
        
    }
    
    return (<form className={classes.form}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="year">Рік</label>
                <select id="year" ref={yearsRef}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Місяць</label>
                <select id="month"
                ref={monthRef}>
                    <option value="1">Січень</option>
                    <option value="2">Лютий</option>
                    <option value="3">Березень</option>
                    <option value="4">Квітень</option>
                    <option value="5">Травень</option>
                    <option value="6">Червень</option>
                    <option value="7">Липень</option>
                    <option value="8">Серпень</option>
                    <option value="9">Вересень</option>
                    <option value="10">Жовтень</option>
                    <option value="11">Листопад</option>
                    <option value="12">Грудень</option>
                </select>
            </div>
            <Button onClick={submitHandler}>Знайти події</Button>
        </div>
    </form>)
}