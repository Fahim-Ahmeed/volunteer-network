import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import volunteerLogo from '../../fakeData/logos/Group.png'
import RegiserLogo from '../../fakeData/logos/register.png'
import addLogo from '../../fakeData/logos/add.png'
const Register = () => {
    const [allMembers, setAllMembers] = useState([])
    const loadAllMember = () => {
        fetch('https://volunteer-service-server.herokuapp.com/allMembers')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setAllMembers(data)
                }
            })
    }
    useEffect(() => {
        loadAllMember()
    }, [])

    const deleteItem = (id) => {
        fetch(`https://volunteer-service-server.herokuapp.com/deleteWork/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result) {
                  loadAllMember()
                }
            })
    }

    console.log(allMembers)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <NavLink to="/home">
                    <img className="nav-logo" src={volunteerLogo} alt="" />
                </NavLink>
                <div className="collapse navbar-collapse" >

                    <ul>
                        <h5> Volunteer register list</h5>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <NavLink activeClassName="selected" to='/register'><img src={RegiserLogo} style={{ width: '17px' }} alt="" /><span>  Volunteer register list</span></NavLink>
                        <br />
                        <NavLink activeClassName="selected" to='/addEvent'><img src={addLogo} style={{ width: '17px' }} alt="" /><span> Add event</span></NavLink>
                    </div>
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email id</th>
                                    <th scope="col">Registration date</th>
                                    <th scope="col">Volunteer list</th>
                                    <th scope="col">action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                      allMembers.map(member => <tr>
                                        <td>{member.name}</td>
                                        <td>{member.email}</td>
                                        <td>{member.date}</td>
                                        <td>{member.workName}</td>
                                        <td><button class="btn btn-danger" onClick={() => deleteItem(member._id)}>delete</button></td>
                                       </tr>
                                      )}
                            </tbody>
                        </table>
                    </div>

                    </div>
                </div>

            </div>
    );
};

export default Register;