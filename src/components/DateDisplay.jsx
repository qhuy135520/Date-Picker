
import "./date.css"
import moment from "moment/moment";

const DateDisplay = (props) => {
    const { date } = props
    return (
        <section className="date-display">
            My Date is: {moment(date).format('LL')}
        </section>
    );
}

export default DateDisplay;
