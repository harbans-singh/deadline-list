import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp';
import DeadlineDetail from './component/deadlines/DeadlineDetail';
import Dashboard from './component/dashboard/Dashboard';
import AddDeadline from './component/deadlines/AddDeadline';
import Navbar from './component/layout/Navbar';
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { createTheme, ThemeProvider } from "@material-ui/core"
import ForgotPassword from './component/forgotPassword/ForgotPassword';

const theme = createTheme({
  typography: {
    fontFamily: "Ubuntu",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  }
})

function App() {
  // const isActive = useMediaQuery('(min-width: 600px)')
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          {/* <Navbar /> */}
          {/* {isActive && <ToastContainer />} */}
          <Switch>
            <Route exact path='/'>
              <Navbar />
              <Dashboard />
            </Route>
            <Route path='/signin'>
              <Navbar />
              <SignIn />
            </Route>
            <Route path='/signup'>
              <Navbar />
              <SignUp />
            </Route>
            <Route path='/addDeadline'>
              <Navbar />
              <AddDeadline />
            </Route>
            <Route path='/deadline/:id'>
              <Navbar />
              <DeadlineDetail />
            </Route>
            <Route path='/forgotpassword'>
              <ForgotPassword />
            </Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
