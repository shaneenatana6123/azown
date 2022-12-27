import React from 'react'
import { Link } from 'react-router-dom'
import About from './About'
import HomeService from './HomeService'
import Navbar from './Navbar/Navbar'

const Home = () => {
  return (
    <div>
    {/* <Navbar/> */}
   <About/>
       {/* <div class="conatiner">
            <div class="container search">
                <h1 class="text-center m-5">World's Largest <b>Azown</b> Property Site</h1>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Residential</button>
                        <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile"
                            type="button" role="tab" aria-controls="nav-profile"
                            aria-selected="false">Commertial</button>
                        <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact"
                            type="button" role="tab" aria-controls="nav-contact"
                            aria-selected="false">Plot/Land</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabindex="0"> 
                        <Link className ='btn btn-primary' to ="/rrprop">Rent</Link>
                        <Link > <button class="btn btn-light m-3">Resale</button></Link>
                        <Link > <button class="btn btn-light m-3">Pg/Hostel</button></Link>
                        <Link > <button class="btn btn-light m-3">Flatmates</button></Link>



                       

                    </div>
                    <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabindex="0">
                        <a href=""> <button class="btn btn-primary m-3">Rent</button></a>
                        <a href=""> <button class="btn btn-light m-3">Sale</button></a>
                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"
                        tabindex="0">
                        <a href=""> <button class="btn btn-primary m-3">Resale</button></a>
                    </div>

                </div>

            </div>
        </div> */}
        {/* <HomeService/> */}
    </div>
  )
}

export default Home
