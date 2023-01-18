import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link, NavLink} from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/receptionist/dashboard" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/receptionist/reservation" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
        <ListItemIcon>
            <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Reservations" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/receptionist/patient" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
        <ListItemIcon>
            <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Patient Records" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/receptionist/schedules" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
        <ListItemIcon>
            <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Schedules" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/reports" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
        <ListItemIcon>
            <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
        </ListItemButton>
    </NavLink>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
        User Profile
    </ListSubheader>
    <NavLink to="/my-settings" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="My Profile" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/profile-settings" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
        </ListItemButton>
    </NavLink>
    <NavLink to="/logout" style={({ isActive }) => ({ 
                            color: isActive ? '#157ec1' : 'black', textDecoration: 'none'})}>
        <ListItemButton>
            <ListItemIcon>
                <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
        </ListItemButton>
    </NavLink>
  </React.Fragment>
);