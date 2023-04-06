import React from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
const Login = () => {
    const navigate=useNavigate();
    const [data,setData]=React.useState({
        email:"",
        password:""
    })
    const handlechange= (event)=>{
        const {name,value}=event.target;
        setData({...data,[name]:value})
    }
    const clicked=async (event)=>{
        event.preventDefault();
        const {email,password}=data;
        const res=await fetch("https://e-combackend-3gqu.onrender.com/login",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify({
              email,
              password
            })
        })
        const info=await  res.json();
        if(info.msg==="enter required fields"){
            window.alert("enter required fields")
        }
        else if(info.msg==="loggedIn successfully..."){
            localStorage.setItem("auth","true");
            window.alert("loggedIn successful")
            navigate("/")
        }else{
            window.alert("invalid credentials")
            console.log(info,"invaliddd")
          }
    }
  return (
    <Wrapper>
    <div>
    <div className="outer-box">
      <div className="inner-box">
          <header className="signup-header">
              <h1>Sign in</h1>
              <p>Welcome back!!!</p>
          </header>
          <main className="signup-body">
              <form action="/signin" method="post">
                  <p>
                      <label name="email">Your Email</label>
                      <input type="email" id="email" placeholder="Email@gmail.com" name="email" onChange={handlechange} required value={data.email}/>
                  </p>
                  <p>
                      <label name="password">Your Password</label>
                      <input type="password" id="password" placeholder="at least 8 characters" name="password" onChange={handlechange} value={data.password} required />
                  </p>
                  <p>
                      <input type="submit" id="submit" value="signin" onClick={clicked}/>
                  </p>
              </form>
          </main>
      </div>
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

export default Login;
