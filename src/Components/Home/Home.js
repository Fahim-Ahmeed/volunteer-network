import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css';


const Home = () => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/allWorks')
        .then(response=>response.json())
        .then(data=>{
            if(data.length>0){
                setItems(data)
            }
        })
       
    },[])
    let history = useHistory();
  const handleVolunteer=(item)=>{
   
      history.push('/volunteerForm',{params:item})
  }

    return (
        <div>
         <Header></Header>
            <div className="container">
                <div className="row" >
                    {
                        items.map(item=>
                        <div className="col-3"key={item.name} onClick={()=>{handleVolunteer(item)}} style={{marginBottom:'30px'}}>
                           <div>
                               <img src={item.image} className="img-fluid" alt=""/>
                                <h4  >{item.name}</h4>
                               </div> 
                           
                            </div>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;