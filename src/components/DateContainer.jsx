import { useEffect, useState } from "react";
import DateDisplay from "./DateDisplay";
import "./date.css"
const DateContainer = () => {
    const [date, setDate] = useState(Date.now())

    useEffect(() => {
        console.log(rerendered)
    }, [date])
    const handleDateChange = (e) => {
        console.log(e);

        setDate(e.target.value)
    }

    return (
        <>
            <input type="date" className="date-input" onChange={handleDateChange} />
            <DateDisplay date={date} />
        </>
    );
}

export default DateContainer;
