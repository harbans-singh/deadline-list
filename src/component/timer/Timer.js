import { useEffect, useRef, useState } from "react";
import DateObject from "react-date-object";

const Timer = (props) => {

    const deadline = props.date;
    let countdownRef = useRef();
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const runCountdown = () => {
        const deadlineDate = new DateObject(deadline);

        countdownRef.current = setInterval(() => {
            const currentDate = new DateObject();
            const duration = deadlineDate - currentDate;

            const totalseconds = (deadlineDate - currentDate) / 1000;
            const seconds = Math.floor(totalseconds) % 60;
            const minutes = Math.floor(totalseconds / 60) % 60;
            const hours = Math.floor(totalseconds / 3600) % 24;
            const days = Math.floor(totalseconds / 3600 / 24);

            if (duration < 0) {
                clearInterval(countdownRef.current);
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000)
        
    }

    useEffect(() => {
        runCountdown();
        return () => {
            clearInterval(countdownRef.current);
        }
    }, []);


    return (
        <div className="countdown-box">
            <div className="single-box">
                <p className="big-text" id="days">
                    {days}
                </p>
                <span>days</span>
            </div>
            <div className="single-box">
                <p className="big-text" id="hours">
                    {hours}
                </p>
                <span>hours</span>
            </div>
            <div className="single-box">
                <p className="big-text" id="mins">
                    {minutes}
                </p>
                <span>mins</span>
            </div>
            <div className="single-box">
                <p className="big-text" id="seconds">
                    {seconds}
                </p>
                <span>seconds</span>
            </div>
        </div>
    );
}

export default Timer;