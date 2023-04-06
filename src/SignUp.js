import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom"
const SignUp = () => {
    const navigate=useNavigate();
  const [user,setUser]=React.useState({
    name:"",
    email:"",
    password:""
  })
  function handleChange(event) {
    let {name,value}=event.target
    setUser({...user,[name]:value})
  }
  async function clicked (event) {
    event.preventDefault();
    const {name,email,password}=user;
    const res=await fetch("https://e-combackend-3gqu.onrender.com/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name,
        email,
        password
      })

    })
    const data=await  res.json();
    console.log(data);
    if(data.code===11000){
      window.alert("Email already registered...")
      console.log("email id already existed")
    }else{
      console.log(data,"successful")
      window.alert("Registartion successful")
      navigate("/login")
    }
  }

return (
    <Wrapper>
    <div className="outer-box">
      <div className="inner-box">
          <header className="signup-header">
              <h1>Signup</h1>
              <p>It just takes 30 seconds</p>
          </header>
          <main className="signup-body">
              <form  method="POST">
                  <p>
                      <label name="name">Full Name</label>
                      <input type="text" id="name" placeholder="Full name" name="name"  onChange={handleChange}  value={user.name} />
                  </p> 
                  <p>
                      <label name="email">Your Email</label>
                      <input type="email" id="email" placeholder="Email@gmail.com" name="email"  onChange={handleChange} value={user.email}/>
                  </p>
                  <p>
                      <label name="password">Your New Password</label>
                      <input type="password" id="password" placeholder="at least 8 characters" name="password"  onChange={handleChange} value={user.password}/>
                  </p>
                  <p>
                      <input type="submit" id="submit" value="register" onClick={clicked}/>
                  </p>
              </form>
          </main>

      </div>
  </div>
  </Wrapper>
  );
  
};
const Wrapper=styled.section`
       @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Silkscreen&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color:#000000;
}

body {
    font-family: 'Lato', sans-serif;
}

.outer-box {
    height: 90vh;
    background: linear-gradient(to top left, #3ed8ff, #a8f5ff);
}

.inner-box {
    width: 400px;
    margin: 0 auto;
    position: relative;
    top: 40%;
    transform: translateY(-50%);
    padding: 20px 40px;
    /* background-color: #ffffff09; */
    background: linear-gradient(to top left, #ffffffff, #ffffff33);
    backdrop-filter: blur(8px);
    border-radius: 8px;
    box-shadow: 2px 2px 5px #2773a5;
    /* border: 2px solid black; */
    z-index: 2;
}

.signup-header h1 {
    font-size: 3rem;
}

.signup-header p {
    font-size: 1.5rem;
    color: #555;
    margin-top: 5px;
}

.signup-body {
    margin: 20px 0;
}

.signup-body p {
    margin: 10px 0;
    display:flex;
    flex-direction:column;
}

.signup-body p label {
    display: block;
    font-weight: bold;

}

.signup-body p input {
    width: 100%;
    padding: 10px;
    border: 2px solid #cccc;
    border-radius: 4px;
    font-size: 1.5rem;
    margin-top: 4px;
}

.signup-body p input[type="submit"] {
    background-color: #3498db;
    border: none;
    color: white;
    cursor: pointer;
    margin:auto;
}

.signup-body p input[type="submit"]:hover {
    background-color: #2773a5;
} 
`;

export default SignUp;