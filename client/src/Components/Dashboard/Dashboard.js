import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import propertyContext from '../../context/PropertyContext'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
import Contacted from './Contacted/Contacted'
import MyProfile from './Myprofile/MyProfile'
import MyProperties from './MyProperty/MyProperties'
import ShortList from './ShortList/ShortList'
import user from '../images/user.jpeg'

const Dashboard = () => {
    const [tab, settab] = useState(1)
    const history = useNavigate()
    const context = useContext(propertyContext);
    const { userdetail,getuserdetail,} = context
    
    useEffect(()=>{
      getuserdetail()
    },[])
    return (
        <div id="main-wrapper">
            <Navbar />
            {/* End Navigation */}
            <div className="clearfix" />

            <div className="page-title" style={{ background: '#f4f4f4 url(assets/img/slider-5.jpg)' }} data-overlay={5}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <div className="breadcrumbs-wrap">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                                <h2 className="breadcrumb-title">Hello {userdetail.name}, Welcome</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============================ Page Title End ================================== */}
            {/* ============================ User Dashboard ================================== */}
            <section className="gray pt-5 pb-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="property_dashboard_navbar">
                                <div className="dash_user_avater">
                                    <img src={user} className="img-fluid avater" alt="udu" />
                                    {/* "assets/img/user-3.jpg" */}
                                    <h4>{userdetail.name}</h4>
                                    {/* <span>Canada USA</span> */}
                                    <hr />
                                </div>

                                <div className="dash_user_menues">
                                    <ul>

                                        <li className={tab === 1 ? 'active' : 'text-dark'} onClick={() => { settab(1) }}><a href><i className="fa fa-user-tie" />My Profile</a></li>
                                        <li className={tab === 2 ? 'active' : 'text-dark'} onClick={() => { settab(2) }}><a href><i className="fa fa-bookmark" />Saved Property</a></li>
                                        <li className={tab === 3 ? 'active' : 'text-dark'} onClick={() => { settab(3) }}><a href><i className="fa fa-tasks" />My Properties</a></li>
                                        <li className={tab === 4 ? 'active' : 'text-dark'} onClick={() => { settab(4) }}><a href><i className="fa fa-envelope" />Owner You Contacted</a></li>



                                    </ul>
                                </div>
                                <div className="dash_user_footer">
                                    <ul>
                                        <li onClick={() => { localStorage.removeItem('token'); history('/') }}><a href ><i className="fa fa-power-off text-light" /></a></li>
                                        <li><a href="#"><i className="fa fa-comment" /></a></li>
                                        <li><a href="#"><i className="fa fa-cog" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {tab === 1 && <MyProfile />}
                        {tab === 2 && <ShortList />}
                        {tab === 3 && <MyProperties />}
                        {tab === 4 && <Contacted />}


                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Dashboard