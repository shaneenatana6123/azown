import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

const HomeNav = () => {
  const [hover, sethover] = useState(false)
  const [off, setoff] = useState(false)
  const [fix, setfix] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [log, setlog] = useState(false)

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // }
  useEffect(() => {
    if (show){

    }else{

    }
    function handleResize() {
      if (window.innerWidth < 992) {
        setoff(true);
      } else {
        setoff(false);
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    // return () =>  {
    // 	window.removeEventListener('resize', handleResize);
    // };

    const handleScroll = event => {
      //   console.log('window.scrollY', window.scrollY);
      let val = window.scrollY

      if (val > 50) {
        setfix(true)
        // console.log(fix)

      } else {
        setfix(false)
        // console.log(fix)
      }

    };
    window.addEventListener('scroll', handleScroll);
    // return () => {
    //   window.removeEventListener('scroll', handleScroll);
    // };
  }, []);
  return (
    <div className={fix ? "header-fixed header header-transparent change-logo" : "header header-transparent change-logo"} >
      <div className="container" >
        <nav id="navigation" className={off ? "navigation navigation-portrait" : "navigation navigation-landscape"} >
          <div className="nav-header">
            <a className="nav-brand static-logo" href><img src="assets/img/logo-light.png" className="logo" alt="dj" /></a>
            <a className="nav-brand fixed-logo" href><img src="assets/img/logo.png" className="logo" alt="dhj" /></a>
            <div className="nav-toggle" onClick={() => { setMenuOpen(!menuOpen); }}></div>
            <div className="mobile_nav">
              <ul>
                <li ><a href className="add_prt"><i className="fas fa-plus-circle" /></a></li>
                <span style={{ borderRight: "2px solid grey", padding: "5px" }}></span>
                <li onClick={()=>{setShow(!show)}}><a href data-toggle="modal" ><i className="fas fa-user-plus fa-lg" /></a></li>
                <li>
                  {/* <div class="btn-group account-drop p-0">
                  <button type="button" class="btn btn-order-by-filt" >
                    <img src="assets/img/user-5.jpg" class="avater-img" alt="" />
                  </button>

                </div> */}
                </li>
              </ul>
            </div>
          </div>
          <div className={menuOpen ? "nav-menus-wrapper nav-menus-wrapper-open" : "nav-menus-wrapper"} style={{ transitionProperty: menuOpen ? 'left' : 'none' }}>
            <span class="nav-menus-wrapper-close-button" onClick={() => { setMenuOpen(!menuOpen) }}>✕</span>
            <ul className="nav-menu">
              <li className="active" onMouseOut={() => { console.log("out") }} onMouseOver={() => { console.log("over") }}><a href="#">Home<span className="submenu-indicator" /></a>

              </li>
              <li><a href="#">About Us<span className="submenu-indicator" /></a>

              </li>
              <li><a href="#">Contact<span className="submenu-indicator" /></a>

              </li>
              <li><a href="#">FAQs<span className="submenu-indicator" /></a>

              </li>
            </ul>
            <ul className="nav-menu nav-menu-social align-to-right">
              <li onClick={() => { setShow(!show) }}>
                <a href className="alio_green"  >
                  <i className="fas fa-sign-in-alt mr-1" /><span className="dn-lg">Sign In</span>
                </a>

                {/* <div class="btn-group account-drop p-0">
                <button type="button" class="btn btn-order-by-filt" >
                  <img src="assets/img/user-5.jpg" class="avater-img" alt="" />
                </button>
                <span style={{ borderRight: "2px solid grey ", padding: "10px" }}></span>

              </div> */}

              </li>
              <li className="add-listing">
                <Link to="/create-property" className="theme-cl">
                  <i className="fas fa-plus-circle mr-1" />Add Property
                </Link>
              </li>
            </ul>
          </div>
          {menuOpen && <div class="nav-overlay-panel" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", display: "block" }}></div>}
          {/* modal */}
          {show && <> <div className={show ? "modal fade show" : "modal fade"} id='login' aria-labelledby='resgistermodal' tabIndex={-1} role="dialog" style={{ display: show ? "block" : "none" }} aria-hidden="true">
            <div className="modal-dialog modal-xl login-pop-form" role="document">
              <div className="modal-content overli" >
                <div className="modal-body p-0">
                  <div className="resp_log_wrap">
                    <div className="resp_log_thumb" style={{ background: 'url(assets/img/p-2.png)no-repeat' }} />
                    <div className="resp_log_caption">
                      <span className="mod-close" data-dismiss="modal" aria-hidden="true" onClick={() => { setShow(!show) }}><i className="ti-close" /></span>
                      <div className="edlio_152">
                        <ul className="nav nav-pills tabs_system center" role="tablist">
                          <li className="nav-item" onClick={() => { setlog(true) }}>
                            <a className={!log ? "nav-link" : "nav-link active"} href ><i className="fas fa-sign-in-alt mr-2" />Login</a>
                          </li>
                          <li className="nav-item" onClick={() => { setlog(false) }}>
                            <a className={log ? "nav-link" : "nav-link active"} href ><i className="fas fa-user-plus mr-2" />Register</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-content" >
                        <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="pills-login-tab">
                          <div className="login-form">
                            {log ? 
                            <Login/> :
                             <SignUp/>
                            }

                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></>}
          {/* modal end */}
        </nav>
      </div>
    </div>
  )
}

export default HomeNav