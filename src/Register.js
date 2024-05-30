import React from 'react';
import './App.css';
import {useNavigate} from 'react-router-dom';

function Register(){
  const navigate = useNavigate();
  const handleregister = async (e) => {
    e.preventDefault();
      alert("Registered Successfully!!"); 
      navigate('/fruit');
 };
    return(
        <body>

<div className="card mb-3" style={{maxWidth: "900px", margin:"200px auto"}}>
  <div className="row g-0">
    <div className="col-md-6">
      <img src="https://www.creativefabrica.com/wp-content/uploads/2019/05/Landing-Page-Design-of-Online-Shop-by-OtpirusThree-2-580x417.jpg" style={{Width: "400px",height: "400px", margin:"90px 0px"}} className="img-fluid rounded-start" alt="card-img"/>
    </div>
    <div className="col-md-6">
      <div className="card-body1">
      <h3 className="card-title1">Sign Up</h3>
                        <form >
                          <div className="form mb-4"style={{marginTop:"10px", textAlign: "center"}}>

                            <label for="name" className="name mb-3"><b>Name</b></label><br/>
                            <input type="name" className="name mb-3" placeholder="Enter Name"/><br/>

                            <label for="mobileNumber" className="mobileNumber mb-3"><b>Mobile Number</b></label><br/>
                            <input type="mobileNumber" className="mobileNumber mb-3" placeholder="Mobile Number" /><br/>

                            <label for="email" className="email mb-3"><b>Email Address</b></label><br/>
                            <input type="email" className="email mb-3" placeholder="name@example.com" /><br/>
                                                                  
                            <label for="password" className="password mb-3"><b>Password</b></label><br/>
                            <input type="password" className="password mb-3" placeholder="Password"/><br/>

                            <label for="Password" className="confirmPassword mb-3"><b>Confirm Password</b></label><br/>
                            <input type="Password" className="confirmPassword mb-3" placeholder="confirmPassword"/><br/>

                            <button  type="SignUp" className="btn btn-primary mb-3" style={{marginLeft:"20px"}} onClick={handleregister}>Sign Up</button><br/>
                          </div>
                        </form>  
                        
      </div>
    </div>
  </div>
</div>

  </body>   
    )
}

export default Register;
