import Timer from '../timer/Timer';
import { Link } from 'react-router-dom';
import DateObject from "react-date-object";

const DeadlineList = (props) => {

    const deadlines = props.deadlines;
    // console.log(deadlines);

    return (
        <div className="dashboard">
            {deadlines && deadlines.map((deadline) => (
                <Link to={`/deadline/${deadline.id}`} key={deadline.id}>
                    <div className="dashboard-container">
                        <div className="deadline-title"> {deadline.title} </div>
                        <Timer date={new DateObject(deadline.date.seconds * 1000)} />
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default DeadlineList;