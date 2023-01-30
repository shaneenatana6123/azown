import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../context/PropertyContext'

const SignUp = () => {
    const context = useContext(propertyContext)
    const { host } = context
const [failed ,setfailed] = useState(false)

    const history = useNavigate()
    const [credential, setcredential] = useState({ name: "", email: "", password: "" });
    const getuserdetail = async () => {
        const responce = await fetch(`${host}/api/auth/getuserdetail`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("token"),
            },
        });
        const userdetailed = await responce.json();
        console.log(userdetailed);
        localStorage.setItem('userType', userdetailed.usertype)
        localStorage.setItem('userId', userdetailed._id)
    };
    const signup = async (name, email, password) => {
        const responce = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, password }),
        });
        const json = await responce.json();
        if (json.success) {
            // console.log(json.success);
            localStorage.setItem("token", json.authtoken);
            getuserdetail()
            history("/")
            console.log("succ")
        } else {
             setfailed(true)
            setTimeout(() => {
                setfailed(false)
            }, 3000);
            
        }
    };
    const handleChange = (e) => {
        setcredential({ ...credential, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(credential);
        signup(credential.name, credential.email, credential.password);
        setcredential({ name: "", email: "", password: "" });
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
            {failed && <span className='text-danger'>Enter the Valid Details</span>}
                <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-with-icon">
                        <input type="text" className="form-control" name='name' onChange={handleChange} value={credential.name} />
                        <i className="ti-user" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Email ID</label>
                    <div className="input-with-icon">
                        <input type="email" className="form-control" name='email'  onChange={handleChange} value={credential.email} required />
                        <i className="ti-user" />
                    </div>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <div className="input-with-icon">
                        <input type="password" className="form-control" minLength={5} name='password' onChange={handleChange} value={credential.password} required />
                        <i className="ti-unlock" />
                    </div>
                </div>
                
                <div className="form-group">
                    <button type="submit" className="btn btn-md full-width pop-login">Register</button>
                </div>
            </form></div>
    )
}

export default SignUp