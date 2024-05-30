import React, {useEffect, useState } from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function Buynow() {

   const navigate = useNavigate();

   const home = async (e) => {
      navigate('/');
   };
   const login = async (e) => {
      navigate('/login');
   };
  
   const [ cart, setCart ] = useState([]);
  
   useEffect(() => {
    const fetchCart = async () => {
        const res = await axios.get('https://onlineshoppingbackend-65lw.onrender.com/cart');
        setCart(res.data.products);
        console.log(res.data);
        calculateTotalAmount(res.data.products);
    };

    fetchCart();
}, []);

const [totalAmount, setTotalAmount] = useState(0);
const calculateTotalAmount = (items) => {
  const total = items.reduce((sum, item) => sum + item.amount, 0);
  console.log(total);
  setTotalAmount(total);
};
   const proceedToBuy = (e) => {
    e.preventDefault();
    var options={
        key:"rzp_test_7Ufao8ZnpRzVZq",
        key_secret:"L7kmIC11vJcDVttHDMimF7zm",
        amount:totalAmount*100,
        currency:"INR",
        name:"Online Shopping Market",
        description:"For testing purpose",
        handler:function(response){
          alert(response.razorpay_payment_id);
        },
        prefill:{
          name:"mogana",
          email:"mogana@gmail.com",
          contact:"9875654456"
        },
        roles:{
          address:"Razorpay corporate office"
        },
        theme:{
          color: '#3399cc'
        }
      };
      var pay=new window.Razorpay(options);
      pay.open();
    };

    const Clearcart = (e) => { 
    setCart([]);
    setTotalAmount([0]);
    };


return (
<div>
{/* navbar1 */}
    <nav className="navbar bg-btn-outline-success" > 
      <img src="https://png.pngitem.com/pimgs/s/507-5072519_fruits-clipart-collage-fresh-fruits-clipart-hd-png.png"  style={{ width:"230px",height:"150px", margin:"15px"}} alt="..."/>
      <div className="logo">Online Fruits and Vegetables Market</div>
      <div className="fluid">
          <button type="button" className="btn btn-success btn-lg me-4" onClick={home}>Home</button>
          <button type="button" className="btn btn-success btn-lg me-4"onClick={login} >Login</button>
      </div>
    </nav>

<div className="group">
   <img className="iag me-5" style={{ width:"750px",height:"140px", margin:"10px 90px"}} src="/images/image2.png" alt="..." />
   <div style={{color: "white"}} className="btn me-5" type="submit">
      <span className="badge bg-white text-dark rounded-pill fa-2x">Total Amount: {totalAmount}</span>
   </div>
   <button className="btn btn-success btn-lg me-6" type="submit"  onClick={Clearcart}>Clear Cart</button>
</div>

{/* main content   */}

<section className="py-2">
  <h3 className="text-center mt-4">Cart List</h3>
   <div className="container mt-4">
      <div className="row gx-sm-6  row-cols-md-4 justify-content-center" >
      {cart.map((items) => (
        <div key={items._id}>
              <div className="col mb-5">
                  <div className="card mb-4" style={{borderRadius:"20px",border: "2px solid rgb(60, 158, 40)"}}>
                     <img className="card-img justify-content-center" style={{height:" 160px", width:"150px", margin:"10px 70px"}} src={items.images} alt="..." />
                     <div className="card-body p-4">
                          <div className="text-center">
                             <h5 className="fw-bolder">{items.name}</h5>
                             ₹{items.amount} per kg
                          </div>
                     </div>
                  </div>
              </div>   
         </div>

    ))}
    </div>
    </div>
    <button type="button" className="btn btn-success btn-lg me-4" style={{ width:"300px", marginLeft:"780px"}} onClick={proceedToBuy}>Proceed to Buy</button>
    </section>
</div>
);
}
export default Buynow;