import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css';


const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('https://volunteer-service-server.herokuapp.com/allWorks')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    setItems(data)
                }
            })

    }, [])
    let history = useHistory();
    const handleVolunteer = (item) => {

        history.push('/volunteerForm', { params: item })
    }
    return (
        <>
            <Header></Header>
            <h2 style={{ textAlign: 'center' }}>I GROW BY HELPING PEOPLE IN NEED</h2>
            <div style={{ marginLeft: '40%', MarginRight: '45%', marginBottom: '5%' }}>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-success">Search</button>
                </form>

            </div>
            <div className="container" >
                <div className="row">
                    {
                        items.map(item =>
                            <div className="col-3" key={item.name} onClick={() => { handleVolunteer(item) }} style={{ marginBottom: '30px' }}>
                                <div>
                                    <img src={item.image} className="img-fluid" alt="" />
                                    <h4  >{item.name}</h4>
                                </div>

                            </div>)
                    }
                </div>

            </div>
        </>
    );
};

export default Home;