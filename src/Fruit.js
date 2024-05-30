import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';
import './App.css'; 
import {useNavigate} from 'react-router-dom';

function Fruit() {
   const navigate = useNavigate();
   const home = async (e) => {
      navigate('/');
   };
   const login = async (e) => {
      navigate('/login');
   };
   const buynow = async (e) => {
      navigate('/buynow');
   };

const[initialValue,setinitialValues]=useState(0);
const [products, setProducts] = useState([]);
const { setCart } = useContext(CartContext);

useEffect(() => {
    const fetchProducts = async () => {
        const res = await axios.get('https://onlineshoppingbackend-65lw.onrender.com/products');
        setProducts(res.data);
    };

    fetchProducts();
}, []);

const addToCart = async (productId) => {
    setinitialValues(initialValue+1);
    const res = await axios.post('https://onlineshoppingbackend-65lw.onrender.com/cart', { productId });
    setCart(res.data.products);
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


{/* navbar2 */}
<div className="group">
   <img className="iag me-5" style={{ width:"750px",height:"140px", margin:"10px 90px"}} src="/images/image2.png" alt="..." />
   <button style={{color: "white"}} className="btn me-5" type="submit"><i className="fas fa-cart-arrow-down fa-4x"></i>
      <span className="badge bg-white text-dark rounded-pill fa-1x">{initialValue}</span>
   </button>
   <button className="btn btn-success btn-lg me-5" type="submit" onClick={buynow}>Buy Now</button>
   <img className="iag me-5" style={{ width:"300px",height:"150px", margin:"5px 30px"}} src="https://png.pngtree.com/png-vector/20220501/ourmid/pngtree-cartoon-stall-of-fruits-vegetables-and-brown-wood-food-display-vector-png-image_30205748.png" alt="..." />
</div>


{/* main content   */}
<section className="py-2">
   <div className="container mt-4">
      <div className="row gx-sm-6  row-cols-lg-4 justify-content-center" >
       {products.map((product) => (
         <div style={{marginBottom:"30px"}} key={product._id}>
              <div className="col mb-5">
                  <div className="card mb-4" style={{borderRadius:"20px",border: "2px solid rgb(60, 158, 40)"}} >
                     <img className="card-img"  style={{height:" 160px", width:"150px", margin:"10px 70px"}} src={product.images} alt="..." />
                     <div className="card-body p-4">
                          <div className="text-center">
                             <h5 className="fw-bolder">{product.name}</h5>
                             ₹{product.amount} per kg
                             <div style={{margin: "10px 30px"}} className="col" >
                                  <div style={{width:"200px"}} className="btn btn-success me-2" onClick={() => addToCart(product._id)}>Add to Cart</div>
                             </div>
                          </div>
                     </div>
                  </div>
              </div>   
         </div>

       ))}
</div>
</div>
</section>
</div>
);
}
export default Fruit;