import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../Header/Header';

import './Home.css';


const Home = () => {
    const[items,setItems]=useState([]);
    useEffect(()=>{
        fetch('https://volunteer-service-server.herokuapp.com/allWorks')
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
console.log(items)
    return (
        <>
         <Header></Header>
         <h2 style={{textAlign: 'center'}}>I GROW BY HELPING PEOPLE IN NEED</h2>
      <div  style={{marginLeft:'40%',MarginRight:'45%',marginBottom:'5%'}}>
      <form classNameName="form-inline my-2 my-lg-0">
      <input classNameName="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
            <div classNameName="container" >
                <div classNameName="row">
                    {
                        items.map(item=>
                        <div classNameName="col-3"key={item.name} onClick={()=>{handleVolunteer(item)}} style={{marginBottom:'30px'}}>
                           <div>
                               <img src={item.image} classNameName="img-fluid" alt=""/>
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