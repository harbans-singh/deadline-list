import { connect } from "react-redux"
import DeadlineList from '../deadlines/DeadlinesList';
import { Redirect } from "react-router-dom"

const Dashboard = ({uid, deadlinedata}) => {
    if(!uid) return <Redirect to="/signin" />

    return (
        <div>
            {!deadlinedata && <div className="emptylist">
                Woo-hoo! You have no deadline...
            </div>}
            <DeadlineList />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid,
        deadlinedata: state.firestore.data.deadlines
    };
}

export default connect(mapStateToProps)(Dashboard);