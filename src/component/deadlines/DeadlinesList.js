import Timer from '../timer/Timer';
import { Link } from 'react-router-dom';
import DateObject from "react-date-object";

import { compose } from 'redux';
import { connect } from "react-redux";
import { firestoreConnect } from 'react-redux-firebase';

import { motion } from 'framer-motion';

const DeadlineList = ({ deadlines, uid }) => {
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return (
        <div className="dashboard">
            {deadlines && deadlines.map((deadline) => (
                <Link to={`/deadline/${deadline.id}`} key={deadline.id}>
                    <motion.div
                    className="dashboard-container"
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ ease:"easeIn", duration: 0.1 }}>
                        <div className="deadline-title"> {deadline.title} </div>
                        <Timer date={new DateObject(deadline.date.seconds * 1000)} />
                    </motion.div>
                </Link>
            ))}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        deadlines: state.firestore.ordered.deadlines,
        uid: state.firebase.auth.uid
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect(ownProps => [
        {
            collection: "deadlines",
            where: ["authorId", "==", ownProps.uid],
            orderBy: ['date', 'asc']
        }
    ])
)(DeadlineList);