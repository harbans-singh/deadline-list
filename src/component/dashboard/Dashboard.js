import { connect } from "react-redux"
import DeadlineList from '../deadlines/DeadlinesList';
import { Redirect } from "react-router-dom"

const Dashboard = ({uid}) => {

    if(!uid) return <Redirect to="/signin" />

    return (
        <div>
            <DeadlineList />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        uid: state.firebase.auth.uid
    };
}

export default connect(mapStateToProps)(Dashboard);