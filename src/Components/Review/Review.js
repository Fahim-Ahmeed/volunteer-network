import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history=useHistory()

    const [totalItem, setTotalItem] = useState([])
    const reviewWork=()=>{
        fetch(`http://localhost:4000/reviewWork?email=${loggedInUser.email}`, {
            method: 'GET',
            //   headers: {
            //       'authorization':(`bearer ${sessionStorage.getItem('jwt')}`),
            //       'Accept' : 'application/json',
            //       'Content-Type': 'application/json'
            //   }
        })
            .then(response => response.json())
            .then(data => {
                setTotalItem(data)
            })

    }
    useEffect(() => {
        reviewWork();
    }, [])
    const deleteItem = (id) => {
        fetch(`http://localhost:4000/deleteWork/${id}`, {
            method: 'DELETE',
        })
            .then(result => {
                if (result) {
                  reviewWork()
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row">
                    {
                        totalItem.map(item =>
                            <div className="col-6 shadow p-3 mb-5 bg-white rounded">
                                <div className="row">
                                    <div className="col-5">
                                        <img src={item.image} className="img-fluid" alt="" />
                                    </div>
                                    <div className="col-7">
                                        <h3>{item.workName}
                                            <br />
                                            {item.date}
                                        </h3>
                                        <button className="btn btn-danger " style={
                                            {
                                                marginBottom: '0px',
                                                marginRight: '0px'
                                            }
                                        }
                                            onClick={() => deleteItem(item._id)}
                                        >cancel</button>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;