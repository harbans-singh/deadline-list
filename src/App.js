import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp';
import DeadlineDetail from './component/deadlines/DeadlineDetail';
import Dashboard from './component/dashboard/Dashboard';
import AddDeadline from './component/deadlines/AddDeadline';
import Navbar from './component/layout/Navbar';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/addDeadline'>
            <AddDeadline />
          </Route>
          <Route path='/deadline/:id'>
            <DeadlineDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
