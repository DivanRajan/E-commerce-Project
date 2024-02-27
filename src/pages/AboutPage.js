import React from 'react'
import { Footer, Navbar } from "../components";
import myImage from "../Images/myphoto.jpg";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
       
        <h1 className="text-center">About Us</h1>
        <hr />
        </div>
        <div className="text-center">
        <img
            className=""
            src={myImage}
            alt="Card"
            height={300}
            style = {{borderRadius:"200%"}}
          />
         <h1 className="lead text-center" style={{ backgroundColor: "lightblue",fontSize: '35px',fontFamily:'Times New Roman, Times, serif'}}>
  Mr. Divan Rajan 
</h1>
<h1 className="lead text-center" style={{ fontSize: '20px',fontFamily: 'serif' }}>
 Contact: 7904792486
</h1>
<h1 className="lead text-center" style={{ fontSize: '20px',fontFamily: 'serif' }}>
 EmailId: sairamrackscbe@gmail.com
</h1>
<h1 className="lead text-center" style={{ fontSize: '20px',fontFamily: 'serif' }}>
 Location: Coimbatore
</h1>

        <p className="lead text-center" style={{fontFamily: 'Georgia, serif'}}>
        Established in the year of 2021, 
        “Sai Ram Racks” are Manufacturer of extensive Supermarket Display Rack, 
        MS Supermarket Display Rack, Display Rack, Supermarket Cash Desk Counter, 
        Double Sided Display Rack, Heavy Duty Supermarket Display Rack, 
        Vegetable Rack For Shop, Hanging Rack, etc. 
        We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their gratification. 
        Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.
        For our accomplishment story, we are grateful to our Mr. Divan Rajan, 
        whose continual backing and direction have been useful to us for attaining exponential development in the current market.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://5.imimg.com/data5/ANDROID/Default/2021/8/OY/WK/KO/96453941/product-jpeg-500x500.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">SuperMarket Display Racks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://5.imimg.com/data5/ANDROID/Default/2021/8/NE/XK/GV/96453941/product-jpeg-500x500.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Full Round display Racks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://5.imimg.com/data5/ANDROID/Default/2021/9/CM/AF/JG/96453941/product-jpeg-500x500.png" alt="" height={130} />
              <div className="card-body">
                <h5 className="card-title text-center">Center Display Racks</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://5.imimg.com/data5/ANDROID/Default/2021/8/PZ/PA/EN/96453941/product-jpeg-500x500.png" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Vegetable Racks</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage