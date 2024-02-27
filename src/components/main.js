import React, { useEffect } from "react";
import landingpageimage from "../Images/SupermarketRacks.jpg";
import Axios from 'axios';
const Home = () => {

  const getUser = async() =>{
    console.log("bm")
    await Axios.get("http://localhost:6000/getusers").then((response)=>{
      console.log(response.data,"from backend")
     }).catch((error)=>{
      console.log(error)
     })
     console.log("fm")
  }
  useEffect(()=>{
    getUser();
  },[]);
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src={landingpageimage}
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-rightenter">
            <div className="container">
              <h5 className="card-title fs-1 text " style={{ backgroundColor:'lightwhite',fontFamily:'Times New Roman, Times, serif',color: 'black', fontWeight: 'bolder', fontSize: '3vh' }}>The Leading Manufacturer 
              & suppliers of</h5>
              <h2 className="card-text fs-5 d-none d-sm-block " style={{ fontFamily:'Times New Roman, Times, serif',color: 'black', fontWeight: 'bolder', fontSize: '5vh' }}>
              Supermarket Racks,Cash Counter and many more. 
              We also provide vegetable rack, Textiles Racks many more. 
              These products and services are known for their best quality.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
