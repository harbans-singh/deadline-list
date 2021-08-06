import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from "react-redux"
import DeadlineList from '../deadlines/DeadlinesList';
import { Redirect } from "react-router-dom"

const Dashboard = ({deadlines, uid}) => {

    if(!uid) return <Redirect to="/signin" />

    return (
        <div>
            <DeadlineList deadlines={deadlines} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        deadlines: state.firestore.ordered.deadlines,
        uid: state.firebase.auth.uid
    };
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
)(Dashboard);