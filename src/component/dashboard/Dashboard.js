import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from "react-redux"
import DeadlineList from '../deadlines/DeadlinesList';

const Dashboard = ({deadlines}) => {
    return (
        <div>
            <DeadlineList deadlines={deadlines} />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        deadlines: state.firestore.ordered.deadlines
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
        { collection: "deadlines" }
    ])
)(Dashboard);