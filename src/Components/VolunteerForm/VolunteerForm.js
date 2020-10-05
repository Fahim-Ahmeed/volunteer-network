import React, { useContext } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import './VolunteerForm.css';
import volunteerLogo from'../../fakeData/logos/Group.png'

const VolunteerForm = () => {
    let location = useLocation()
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const myItem = location.state.params;
    let history = useHistory()
    const handleSubmit = () => {
        const fullName = document.getElementById('name').value
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value
        const description = document.getElementById('description').value
        const workName = document.getElementById('workName').value
        const image = myItem.image;
        const totalSubmit = { name: fullName, email: email, date: date, description: description, workName: workName, image: image }
        console.log(totalSubmit)
        fetch("https://volunteer-service-server.herokuapp.com/addMember", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(totalSubmit)
        })
            .then(result => {
                if (result) {

                    console.log(result)

                }
            })
        history.push('/review')
    }

    return (
        <>
            <div className="container">
                
            <div className="row">
                    <div className="col-2 " style={{margin:'auto',paddingBottom:'10px',marginBottom:'0px'}}>
                        <Link to="/home">
                            <img src={volunteerLogo} className="img-fluid" alt=""/>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3 style={{ marginTop: '20px' }}>Register as a volunteer</h3>

                        <input type="text" className="form-control reg-form" id="name" value={loggedInUser.name} />
                        <input type="text" className="form-control reg-form" id="email" value={loggedInUser.email} />
                        <label htmlFor="date" >date</label>
                        <input type="date" id="date" className="form-control reg-form" />
                        <input type="text" className="form-control reg-form" id="description" value="Description" />
                        <input type="text" className="form-control reg-form" id="workName" value={myItem.name} />
                        {/* <input type="text" className="form-control reg-form" style={{Display: 'hide'}} name="workName" value={myItem.image} /> */}
                        <input type="submit" onClick={handleSubmit} className="form-control btn btn-primary" value="Registration" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default VolunteerForm;