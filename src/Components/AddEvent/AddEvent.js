import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import volunteerLogo from '../../fakeData/logos/Group.png'
import RegiserLogo from '../../fakeData/logos/register.png'
import addLogo from '../../fakeData/logos/add.png'
import './AddEvent.css'
const AddEvent = () => {
    let history = useHistory()
    const handleAddEvent = () => {
        const eventTitle = document.getElementById('title').value;
        const eventDate = document.getElementById('date').value;
        const eventDescription = document.getElementById('description').value;
        const totalSubmit = { name: eventTitle, date: eventDate, description: eventDescription }
        fetch("https://volunteer-service-server.herokuapp.com/addEvent", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(totalSubmit)
        })
            .then(result => {
                if (result) {

                    document.getElementById('title').value = '';
                    document.getElementById('date').value = '';
                    document.getElementById('description').value = '';
                    alert('event added successfully')

                }
            })
    }
    return (
        <div>
            <nav classNameName="navbar navbar-expand-lg navbar-light ">
                <NavLink to="/home">
                    <img classNameName="nav-logo" src={volunteerLogo} alt="" />
                </NavLink>
                <div classNameName="collapse navbar-collapse" >

                    <ul>
                        <h5>Add Event</h5>
                    </ul>
                </div>
            </nav>
            <div classNameName="container">
                <div classNameName="row">
                    <div classNameName="col-2">
                        <NavLink activeclassNameName="selected" to='/register'><img src={RegiserLogo} style={{ width: '17px' }} alt="" /><span>  Volunteer register list</span></NavLink>
                        <br />
                        <NavLink activeclassNameName="selected" to='/addEvent'><img src={addLogo} style={{ width: '17px' }} alt="" /><span> Add event</span></NavLink>
                    </div>
                    <div classNameName="col-2">

                    </div>
                    <div classNameName="col-8">
                        <div classNameName="container">
                            <div classNameName="row">

                                <div classNameName="col-6">
                                    <label>Event title</label>
                                    <input style={{ width: '100%' }} id="title" type="text" />
                                </div>
                                <div classNameName="col-6">
                                    <label>Date</label>
                                    <input type="date" id="date" style={{ width: '100%' }} />
                                </div>
                                <div classNameName="col-6">
                                    <label>Description</label>
                                    <input type="text" id="description" style={{ width: '100%' }} />
                                </div>
                                <div classNameName="col-6">
                                </div>
                            </div>
                            <br />
                            <div classNameName="col-6">
                                <button classNameName="btn btn-success" onClick={handleAddEvent}>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddEvent;