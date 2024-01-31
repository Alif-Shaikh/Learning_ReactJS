
import Button from 'react-bootstrap/Button';
// import CardComponent from './components/CardComponent';
// import TopHeader from './components/TopHeader';
import NavbarComponent from '../components/NavbarComponent';
import { useState } from 'react';
// import { useEffect } from 'react';


function Home() {
  const[name, setName]=useState("")
  // console.log("name : ",name)

const storeFrname=(e)=>{
e.preventDefault();
localStorage.setItem("frName",name);
window.location.reload();
}
// useEffect(()=>{
//   alert("Website Opened")
// },[name])
//[name]=>if any change in name then alert fired
  return (
    // <div classNameName='header'>
    // <div style={{backgroundColor:"yellow"}}>
    //  HELLO WORLD
    // </div>
    <div>
      {/* <TopHeader/>  */}
      {/* <NavbarComponent title='My-Website'/>
      <CardComponent/> */}
        {/* <h1>{process.env.REACT_APP_PASSWORD}</h1> */}
        <NavbarComponent title='Friends-Website'/> 
        <div classNameName='container my-4'>
        <h4>Enter your friend name</h4>
        <input style={{width:"300px" ,height:"35px"}} placeholder='Enter your friend name'value={name} onChange={(e)=>setName(e.target.value)}/>
        <Button onClick={storeFrname} classNameName='bt mx-2' variant="dark">Submit</Button>

        <h1>{localStorage.getItem("frName")}</h1>
        </div>  
    </div> 
  );
}

export default Home;
