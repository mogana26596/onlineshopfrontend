import React,{useState} from 'react';
import './App.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Login(){
const navigate = useNavigate();
const[formData, setFormData] =useState({
    email: "",
    password: ""
}); 
const handleSubmit = async (e) => {
    e.preventDefault();
    try{
        const response = await axios.post('https://onlineshoppingbackend-65lw.onrender.com/login', {...formData });
        console.log(response);
        if(response.data) {
            await localStorage.setItem("token", response.data);
            navigate('/fruit');
        }
        } catch(err) {
        console.log(err);
        }
};
const handleregister = async (e) => {
    navigate('/signup');
};


return(
<body>
<div className="card mb-3" style={{maxWidth: "900px", margin:"200px auto"}}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Landing-Page-Design-of-Online-Shop-by-OtpirusThree-2-580x417.jpg" style={{Width: "400px",height: "400px", margin:"90px 0px"}} className="img-fluid rounded-start" alt="card-img"/>
    </div>
    <div className="col-md-6">
      <div className="card-body2">
      <h3 className="card-title1">Login</h3>
                        <form onSubmit={handleSubmit}>
                          <div className="form mb-4"style={{marginTop:"10px", textAlign: "center"}}>

                            <label for="email" className="email mb-3"><b>Email Address</b></label><br/>
                            <input type="email" className="email mb-3" placeholder="name@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email:e.target.value})}/><br/>
                                                                  
                            <label for="password" className="password mb-3"><b>Password</b></label><br/>
                            <input type="password" className="password mb-3" placeholder="Password" value={formData.password} onChange={(e) => setFormData({...formData, password:e.target.value})}/><br/>

                            <button  type="SignUp" className="btn btn-primary mb-3" style={{marginLeft:"20px"}}>Login</button><br/>
                          </div>
                        </form>  
                        <div style={{textAlign: "center"}}>Don’t have an account?<button type="button" className="btn btn-link" onClick={handleregister}>Sign up</button></div> 
      </div>
    </div>
  </div>
</div>

  </body>   
    )
}

export default Login;
