import React, { useContext, useEffect } from 'react'
import propertyContext from '../../../context/PropertyContext'
import Slider from 'react-slick'
import three from '../../images/user-3.png'
import two from '../../images/two.png'
import four from '../../images/four.png'
import one from '../../images/one.png'

const MyProfile = () => {
  const context = useContext(propertyContext);
  const { userdetail,getuserdetail,} = context
  
  useEffect(()=>{
    getuserdetail()
  },[])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll:1,
    nextArrow: <button  className="slick-next slick-arrow">Next</button>,
    prevArrow:   <button  className="slick-prev slick-arrow" >Previous</button>,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">
    <div className="dashboard-body mb-3">
    <div className="dashboard-wraper">
      
      <div className='row'>
      <div className='col-2'><h6>40% Completed</h6></div>
      <div className='col-10'>
  <div className="progress">
  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%',height:"4%" ,backgroundColor:"#27AE60"}}>
    40% Complete (success)
  </div>
</div>


      </div>
      <div className='col-2'><h6></h6></div>
      <div className='col-10'><p>To get verified , Complete Your Profile 100%</p></div>
      

         
      </div>
     
      
    </div>
  </div>
  <div className="dashboard-body mb-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>Basic Information <i className="fas fa-plus-circle m-0"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Name</h6></div>
      <div className='col-9'><p>{userdetail.name}</p></div>
      <div className='col-3'><h6>Email</h6></div>
      <div className='col-9'><p>{userdetail.email}</p></div>
      <div className='col-3'><h6>Phone No.</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>User Type</h6></div>
      <div className='col-9'><p>{userdetail.usertype}</p></div>   
      </div>
      {/* <button className='btn  btn-dark py-2 px-4 '>Edit</button> */}
      
    </div>
  </div>
  <div className="dashboard-body my-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>Add Social Media<i className="fas fa-plus-circle m-2"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Linked In</h6></div>
      <div className='col-3'><h6>FaceBook</h6></div>
      <div className='col-3'><h6>Twitter</h6></div>
      <div className='col-3'><h6>Instagram</h6></div>
      <div className='col-3'><p>https://linkedin.com</p></div>
      <div className='col-3'><p>https://facebook.com</p></div>
      <div className='col-3'><p>https://twitter.com</p></div>
      <div className='col-3'><p>https://instagram.com</p></div>
    
         
      </div>
      {/* <button className='btn  btn-dark py-2 px-4 '>Edit</button> */}
      
    </div>
  </div>
  <div className="row mr-1">
                    <div className="col-lg-12 col-md-12">
                        <div className="item-slide space slick-initialized">
                      
                          
                            <Slider {...settings}>
                          
                            <div className="single_items slick-slide slick-cloned" >
                                    <div className="grid_agents" style={{backgroundImage: "url(assets/img/auser-.jpeg)",objectFit:"cover"}}>
                                        <div className="elio_mx_list theme-bg-2">1 Owners</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a href="agent-page.html" >
                                                    <span className="verified">
                                                    <img src="assets/img/verified.svg" className="verify mx-auto" alt="djdh" />
                                                    </span>
                                                    <img src={one} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="keje" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a href="agent-page.html" tabIndex={-1}>Azown Owner</a></h5>
                                             
                                            </div>
                                            <div className="fr-infos-deatil">
                                                <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a>
                                             {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}
                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide slick-cloned" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">42 Builders</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a href="agent-page.html" >
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="djdh" /></span>
                                                    <img src={four} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="djd" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a href="agent-page.html" tabIndex={-1}>Builder</a></h5>
                                              
                                                
                                            </div>
                                            <div className="fr-infos-deatil">
                                            <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a>
                                            {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}

                                              
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">102 Venders</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a href="agent-page.html" tabIndex={0}>
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="ekje" /></span>
                                                    <img src={three} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt='jie' />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a href="agent-page.html" tabIndex={0}>Vender</a></h5>
                                            
                                            </div>
                                            <div className="fr-infos-deatil">
                                            <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a>
                                            {/* <button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>console.log("User Clicked")}><i className="fa fa-user-plus mr-2" />Register</button> */}
                                            {/* {localStorage.getItem('token')?<Link to="/more-services" >Open</Link>:<SigninPop/>} */}
                                             {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_items slick-slide slick-current slick-active" >
                                    <div className="grid_agents">
                                        <div className="elio_mx_list theme-bg-2">72 Brokers</div>
                                        <div className="grid_agents-wrap">
                                            <div className="fr-grid-thumb">
                                                <a href="agent-page.html" tabIndex={0}>
                                                    <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt="dkkj" /></span>
                                                    <img src={two} style={{objectFit:"cover"}} className="img-fluid mx-auto" alt="dkkj" />
                                                </a>
                                            </div>
                                            <div className="fr-grid-deatil">
                                                <span>Register as a</span>
                                                <h5 className="fr-can-name"><a href="agent-page.html" tabIndex={0}>Broker</a></h5>
                                              
                                            </div>
                                            <div className="fr-infos-deatil">
                                            <a href className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</a>
                                             {/* {localStorage.getItem('token')?<Link to="/dashboard" className="btn agent-btn theme-bg"style={{color:"#fff"}} ><i className="fa fa-user-plus mr-2" />Register</Link>:<button className="btn agent-btn theme-bg"style={{color:"#fff"}} onClick={()=>setSignIn(true)}><i className="fa fa-user-plus mr-2" />Register</button>} */}
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                                
                              
                            </Slider>
                              
                            {/* </div> */}
                            {/* </div> */}

                           
                            
                            </div>
                    </div>
                </div>
  <div className="dashboard-body my-3">
    <div className="dashboard-wraper">
      {/* Basic Information */}
      <div className="frm_submit_block">	
        <h4>KYC Update<i className="fas fa-plus-circle m-2"/></h4>
        <hr></hr>
      </div>
      <div className='row'>
      <div className='col-3'><h6>Business Name</h6></div>
      <div className='col-9'><p>{userdetail.name}</p></div>
      <div className='col-3'><h6>Working Area</h6></div>
      <div className='col-9'><p>{userdetail.email}</p></div>
      <div className='col-3'><h6>Shop Address</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>Locality</h6></div>
      <div className='col-9'><p>{userdetail.usertype}</p></div>   
      <div className='col-3'><h6>Landmark</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6> City</h6></div>
      <div className='col-9'><p>234567890</p></div>
       <div className='col-3'><h6>State</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6>GST No</h6></div>
      <div className='col-9'><p>234567890</p></div> 
      <div className='col-3'><h6>Rera No.</h6></div>
      <div className='col-9'><p>234567890</p></div>
      <div className='col-3'><h6>Work Exp.</h6></div>
      <div className='col-9'><p>234567890</p></div>
    
         
      </div>
     


      
    </div>
  </div>
  
</div>

  )
}

export default MyProfile