import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history=useHistory()

    const [totalItem, setTotalItem] = useState([])
    const reviewWork=()=>{
        fetch(`https://volunteer-service-server.herokuapp.com/reviewWork?email=${loggedInUser.email}`, {
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
        fetch(`https://volunteer-service-server.herokuapp.com/deleteWork/${id}`, {
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
            <div classNameName="container">
                <div classNameName="row">
                    {
                        totalItem.map(item =>
                            <div classNameName="col-6 shadow p-3 mb-5 bg-white rounded">
                                <div classNameName="row">
                                    <div classNameName="col-5">
                                        <img src={item.image} classNameName="img-fluid" alt="" />
                                    </div>
                                    <div classNameName="col-7">
                                        <h3>{item.workName}
                                            <br />
                                            {item.date}
                                        </h3>
                                        <button classNameName="btn btn-danger " style={
                                            {
                                                marginBottom: '0px',
                                                marginRight: '0px'
                                            }
                                        }
                                        onClick={()=>deleteItem(item._id)}
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