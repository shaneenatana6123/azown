import React, { useContext, useEffect, useState } from 'react'
import propertyContext from '../context/PropertyContext'

const Myprofile = () => {
    const context = useContext(propertyContext)
    const {getuserdetail,userdetail,kycupdatefun} = context
    useEffect (()=>{
// getuserdetail()
    },[])
    console.log(userdetail);
    const [data , setdata] = useState({name:"", email:"",usertype:"",phone:"",adharno:""})
function handleChange(e){
    setdata({...data, [e.target.name]:e.target.value})

}
function handleSubmit(e){
    e.preventDefault()
    kycupdatefun(data.name,data.email,data.usertype, data.phone, data.adharno)
    
}
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="text" name = "name" value={data.name} onChange={handleChange} placeholder="Full Name"/>
            <input type="email" value={data.email}  name="email" onChange={handleChange} placeholder="enter email" />
            
            <select name="usertype" onChange={handleChange} class="form-select" aria-label="Default select example" >
            <option value="visiter" selected>Choose...</option>
            <option value="visiter">visiter</option>
            <option value="broker">broker</option> 
            <option value="vender">vender</option>
            </select>
            <input type="text" value={data.phone}  name="phone" onChange={handleChange} placeholder="Phone no" />
            <input type="text" value={data.adharno}  name="adharno" onChange={handleChange} placeholder="adharno no" />
            <button type='submit' className='btn btn-dark m-2' >update</button>
        </form>
    </div>
  )
}

export default Myprofile