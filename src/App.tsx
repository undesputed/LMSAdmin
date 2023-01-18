import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Theme from "./settings/Theme";

import Login from './pages/login';
import SignUp from './pages/signup';
import MyProfile from './pages/profile/myProfile';
import ProfileSettings from './pages/profile/profileSettings'
import Dashboard from './layouts/receptionists/Dashboard';
import Patient from './layouts/receptionists/Patients';
import Reservation from './layouts/receptionists/Reservations';
import Schedules from './layouts/receptionists/Schedules';

function App() {
  return (
    <>
      <CssBaseline/>
      <ThemeProvider theme={Theme("theme1")}>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Navigate to='/login'/>}/>
            <Route path={"/login"} element={<Login/>}/>
            <Route path={"/signup"} element={<SignUp/>}/>
            <Route path={"/receptionist/dashboard"} element={<Dashboard/>}/>
            <Route path={"/receptionist/patient"} element={<Patient/>}/>
            <Route path={"/receptionist/reservation"} element={<Reservation/>}/>
            <Route path={"/receptionist/schedules"} element={<Schedules/>}/>
            <Route path={"/my-settings"} element={<MyProfile/>}/>
            <Route path={"/profile-settings"} element={<ProfileSettings/>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App;