import React from 'react';
import './App.css'; 
import {useNavigate} from 'react-router-dom';

function Home() {
   const navigate = useNavigate();
   const home = async (e) => {
      navigate('/');
   };
   const login = async (e) => {
      navigate('/login');
   };
   const fruit = async (e) => {
      navigate('/fruit');
   };

return (
<div>
      <nav className="navbar bg-btn-outline-success" > 
        <img src="https://png.pngitem.com/pimgs/s/507-5072519_fruits-clipart-collage-fresh-fruits-clipart-hd-png.png"  style={{ width:"230px",height:"150px", margin:"15px"}} alt="..."/>
        <div className="logo">Online Fruits and Vegetables Market</div>
        <div className="fluid">
            <button type="button" className="btn btn-success btn-lg me-4" onClick={home}>Home</button>
            <button type="button" className="btn btn-success btn-lg me-4"onClick={login} >Login</button>
         </div>
      </nav>

      <section>
         <img src="https://www.abelandcole.co.uk/content/homepage2017/images/prospect/2022/hero-image-test.png" style={{margin:"80px 480px", width:"800px",height:"460px"}} alt="..."/>
         <button type="button" className="btn btn-success btn-lg me-5" style={{ margin:"0px 700px"}} onClick={fruit}>Click here to buy Fresh Furits and Vegetables <i className="fas fa-arrow-circle-right fa-xl fa-beat"></i></button>
      </section>
</div>
  );
}

export default Home;
  



