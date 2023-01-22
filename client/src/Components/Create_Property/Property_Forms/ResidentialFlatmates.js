import React from 'react'

const ResidentialFlatmates = () => {
  return (
   <div id="main-wrapper">
  {/* ============================================================== */}
  {/* Top header  */}
  {/* ============================================================== */}
  {/* Start Navigation */}
  <div className="header header-light">
    <div className="container">
      <nav id="navigation" className="navigation navigation-landscape">
        <div className="nav-header">
          <a className="nav-brand" href="#">
            <img src="assets/img/logo.png" className="logo" alt />
          </a>
          <div className="nav-toggle" />
          <div className="mobile_nav">
            <ul>
              <li className="_my_prt_list"><a href="#"><span>2</span>My List</a></li>
              <li><a href="#" data-toggle="modal" data-target="#login"><i className="fas fa-user-circle fa-lg" /></a></li>
            </ul>
          </div>
        </div>
        <div className="nav-menus-wrapper" style={{transitionProperty: 'none'}}>
          <ul className="nav-menu">
            <li className="active"><a href="#">Home<span className="submenu-indicator" /></a>
              <ul className="nav-dropdown nav-submenu">
                <li><a href="index-2.html">Home 1</a></li>
                <li><a href="home-2.html">Home 2</a></li>
                <li><a href="home-3.html">Home 3</a></li>
                <li><a href="home-4.html">Home 4</a></li>
                <li><a href="home-5.html">Home 5</a></li>
                <li><a href="home-6.html">Home 6</a></li>
                <li><a href="home-7.html">Home 7</a></li>
                <li><a href="map.html">Map Home</a></li>
              </ul>
            </li>
            <li><a href="#">Listings<span className="submenu-indicator" /></a>
              <ul className="nav-dropdown nav-submenu">
                <li><a href="#">Listing Grid<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="grid-layout-with-sidebar.html">Grid Style 1</a></li>
                    <li><a href="grid-layout-2.html">Grid Style 2</a></li>
                    <li><a href="grid-layout-3.html">Grid Style 3</a></li>
                  </ul>
                </li>
                <li><a href="#">Listing List<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="list-layout-with-sidebar.html">List Style 1</a></li>
                    <li><a href="list-layout-with-map-2.html">List Style 2</a></li>
                  </ul>
                </li>
                <li><a href="#">Listing Map<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="half-map.html">Half Map</a></li>
                    <li><a href="half-map-2.html">Half Map 2</a></li>
                    <li><a href="classical-layout-with-map.html">Classical With Sidebar</a></li>
                    <li><a href="list-layout-with-map.html">List Sidebar Map</a></li>
                    <li><a href="grid-layout-with-map.html">Grid Sidebar Map</a></li>
                  </ul>
                </li>
                <li><a href="#">Agents View<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="agents.html">Agent Grid Style</a></li>
                    <li><a href="agents-2.html">Agent Grid 2</a></li>
                    <li><a href="agent-page.html">Agent Detail Page</a></li>
                  </ul>
                </li>
                <li><a href="#">Agency View<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="agencies.html">Agency Grid Style</a></li>
                    <li><a href="agency-page.html">Agency Detail Page</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="#">Property<span className="submenu-indicator" /></a>
              <ul className="nav-dropdown nav-submenu">
                <li className><a href="#">User Admin<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="dashboard.html">User Dashboard</a></li>
                    <li><a href="my-profile.html">My Profile</a></li>
                    <li><a href="my-property.html">My Property</a></li>
                    <li><a href="messages.html">Messages</a></li>
                    <li><a href="bookmark-list.html">Bookmark Property</a></li>
                    <li><a href="submit-property.html">Submit Property</a></li>
                  </ul>
                </li>
                <li><a href="#">Single Property<span className="submenu-indicator" /></a>
                  <ul className="nav-dropdown nav-submenu">
                    <li><a href="single-property-1.html">Single Property 1</a></li>
                    <li><a href="single-property-2.html">Single Property 2</a></li>
                    <li><a href="single-property-3.html">Single Property 3</a></li>
                    <li><a href="single-property-4.html">Single Property 4</a></li>
                  </ul>
                </li>
                <li><a href="compare-property.html">Compare Property</a></li>
              </ul>
            </li>
            <li><a href="#">Pages<span className="submenu-indicator" /></a>
              <ul className="nav-dropdown nav-submenu">
                <li><a href="blog.html">Blog Style</a></li>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="404.html">404 Page</a></li>
                <li><a href="checkout.html">Checkout</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="component.html">Elements</a></li>
                <li><a href="privacy.html">Privacy Policy</a></li>
                <li><a href="faq.html">FAQs</a></li>
              </ul>
            </li>
          </ul>
          <ul className="nav-menu nav-menu-social align-to-right">
            <li>
              <a href="#" className="alio_green" data-toggle="modal" data-target="#login">
                <i className="fas fa-sign-in-alt mr-1" /><span className="dn-lg">Sign In</span>
              </a>
            </li>
            <li className="add-listing">
              <a href="submit-property.html" className="theme-cl">
                <i className="fas fa-plus-circle mr-1" />Add Property
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  {/* End Navigation */}
  <div className="clearfix" />
  {/* ============================================================== */}
  {/* Top header  */}
  {/* ============================================================== */}
  {/* ============================ Page Title Start================================== */}
  <div className="page-title" style={{background: '#f4f4f4 url(assets/img/bg.jpg)'}} data-overlay={5}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="breadcrumbs-wrap">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Submit Property</li>
            </ol>
            <h2 className="breadcrumb-title">Submit Your Property</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* ============================ Page Title End ================================== */}
  {/* ============================ Submit Property Start ================================== */}
  <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="alert alert-info" role="alert">
            <p>If you don't have an account you can create one by <a href="#">Click Here</a></p>
          </div>
        </div>
        {/* Submit Form */}
        <div className="col-lg-12 col-md-12">
          <div className="submit-page p-0">
            {/* Basic Information */}
            <div className="frm_submit_block">	
              <h3>Basic Information</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Property Title<a href="#" className="tip-topdata" data-tip="Property Title"><i className="ti-help" /></a></label>
                    <input type="text" name="rfm_detail_description" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>BHK Type</label>
                    <select id="status" name="rfm_detail_bhk_type" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="1 RK">1 RK</option>
                      <option value="1 bhk">1 BHK</option>
                      <option value="2 bhk">2 BHK</option>
                      <option value="3 bhk">3 BHK</option>
                      <option value="4 bhk">4 BHK</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Property Type</label>
                    <select id="ptypes" className="form-control" name="rfm_detail_app_type">
                      <option value>&nbsp;</option>
                      <option value="appartment">Appartment</option>
                      <option value="independent house villa">Independent House Villa</option>
                      <option value="gateed community villa">Gated Community Villa</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Floor</label>
                    <select id="ptypes" className="form-control" name="rfm_detail_floor">
                      <option value>&nbsp;</option>
                      <option value="1 floor">1 Floor</option>
                      <option value="2 floor">2 Floor</option>
                      <option value="3 floor">3 Floor</option>
                      <option value="4 floor">4 Floor</option>
                      <option value="5 floor">5 Floor</option>
                      <option value="6 floor">6 Floor</option>
                      <option value="7 floor">7 Floor</option>
                      <option value="8 floor">8 Floor</option>
                      <option value="9 floor">9 Floor</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Total Floor</label>
                    <select id="ptypes" className="form-control" name="rfm_detail_total_floor">
                      <option value>&nbsp;</option>
                      <option value="0-10 floor">0-10 Floor</option>
                      <option value="10-20 floor">10-20 Floor</option>
                      <option value="20-30 floor">20-30 Floor</option>
                      <option value="30-40 floor">30-40 Floor</option>
                      <option value="40-50 floor">40-50 Floor</option>
                      <option value="50+ floor">50+ Floor</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Property Age</label>
                    <select id="ptypes" className="form-control" name="rfm_detail_prop_age">
                      <option value>&nbsp;</option>
                      <option value="0-10 yrs">0-10 yrs</option>
                      <option value="10-20 yrs">10-20 yrs</option>
                      <option value="20-30 yrs">20-30 yrs</option>
                      <option value="30-40 yrs">30-40 yrs</option>
                      <option value="40-50 yrs">40-50 yrs</option>
                      <option value="50+ yrs">50+ yrs</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Facing</label>
                    <select id="ptypes" className="form-control" name="rfm_detail_facing">
                      <option value>&nbsp;</option>
                      <option value="north">North</option>
                      <option value="east">East</option>
                      <option value="west">West</option>
                      <option value="south">South</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Builtup Area</label>
                    <input type="text" name="rfm_detail_builtup_area" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Room Type</label>
                    <select id="bedrooms" name="rfm_detail_room_type" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="single">Single</option>
                      <option value="single">Shared</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Tenent Type</label>
                    <select id="bathrooms" name="rfm_detail_tenent_type" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Furnishing</label>
                    <select name="rfm_detail_furnishing" id="bathrooms" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="furnished">Furnished</option>
                      <option value="unfurnished">Unfurnished</option>
                      <option value="semi furnished">Semi Furnished</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Parking</label>
                    <select name="rfm_detail_parking" id="bathrooms" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="car">Car</option>
                      <option value="bike">Bike</option>
                      <option value="both">Both</option>
                      <option value="none">none</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Bathrooms</label>
                    <select name="rfm_detail_bathroom" id="bathrooms" className="form-control">
                      <option value>&nbsp;</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Balcony</label>
                    <select name="rfm_detail_balcony" id="bathrooms" className="form-control">
                      <option value>&nbsp;</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                  <div className="form-group col-md-6">
                    <label>Water Supply</label>
                    <select name="rfm_detail_water_supply" id="bathrooms" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                      <option value="borewell">Borewell</option>
                      <option value="corporation">Corporation</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* Gallery */}
            <div className="frm_submit_block">	
              <h3>Gallery</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <label>Upload Gallery</label>
                    <form action="https://themezhub.net/upload-target" className="dropzone dz-clickable primary-dropzone">
                      <div className="dz-default dz-message">
                        <i className="ti-gallery" />
                        <span>Drag &amp; Drop To Change Logo</span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* Rules */}
            <div className="frm_submit_block">	
              <h3>Rules</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <div className="o-features">
                      <ul className="no-ul-list third-row">
                        <li>
                          <input id="a-13" className="checkbox-custom" name="rfm_rules_is_non_veg_allowed" type="checkbox" />
                          <label htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                        </li>
                        {/* //////////////// */}
                        <li>
                          <input id="a-13" className="checkbox-custom" name="rfm_rules_is_non_veg_allowed" type="checkbox" hidden />
                          <label hidden htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                        </li>
                        <li>
                          <input id="a-13" className="checkbox-custom" name="rfm_rules_is_non_veg_allowed" type="checkbox" hidden />
                          <label hidden htmlFor="a-13" className="checkbox-custom-label">Non-Veg Allowed</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Location */}
            <div className="frm_submit_block">	
              <h3>Location</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label>Address</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>City</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>State</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group col-md-6">
                    <label>Zip Code</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            {/* Detailed Information */}
            <div className="frm_submit_block">	
              <h3>Rental Detailed</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label>Rent</label>
                    <input name="rfm_rental_detail_rent " className="form-control h-120" type="number" />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Expected Deposit</label>
                    <input name="rfm_rental_detail_exp_deposit " className="form-control h-120" type="number" />
                  </div>
                  <div className="form-group col-md-4">
                    <label>Negotiable </label>
                    <select id="bage" name="rfm_rental_detail_is_nogotiable" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label>Monthly Maintenance</label>
                    <select id="bage" name="rfm_rental_detail_monthly_maintenance" className="form-control">
                      <option value>&nbsp;</option>
                      <option value="maintenance included">Maintenance Included</option>
                      <option value="maintenance extra">Maintenance Extra</option>
                    </select>
                  </div>
                  <div className="form-group col-md-4">
                    <label>Available From</label>
                    <input name="rfm_rental_detail_avail_from " className="form-control h-120" type="date" />
                  </div>
                </div>
              </div>
            </div>
            {/* Detailed Information */}
            <div className="frm_submit_block">	
              <h3>Detailed Information</h3>
              <div className="frm_submit_wrap">
                <div className="form-row">
                  <div className="form-group col-md-12">
                    <div className="o-features">
                      <ul className="no-ul-list third-row">
                        <li>
                          <input id="a-1" className="checkbox-custom" name="rfm_amenities_ac" type="checkbox" />
                          <label htmlFor="a-1" className="checkbox-custom-label">Air Condition</label>
                        </li>
                        <li>
                          <input id="a-2" className="checkbox-custom" name="rfm_amenities_lift" type="checkbox" />
                          <label htmlFor="a-2" className="checkbox-custom-label">Lift</label>
                        </li>
                        <li>
                          <input id="a-3" className="checkbox-custom" name="rfm_amenities_intercom" type="checkbox" />
                          <label htmlFor="a-3" className="checkbox-custom-label">Inter communication</label>
                        </li>
                        <li>
                          <input id="a-4" className="checkbox-custom" name="rfm_amenities_internet" type="checkbox" />
                          <label htmlFor="a-4" className="checkbox-custom-label">Internet</label>
                        </li>
                        <li>
                          <input id="a-5" className="checkbox-custom" name="rfm_amenities_children_play_area" type="checkbox" />
                          <label htmlFor="a-5" className="checkbox-custom-label">Children Play Area</label>
                        </li>
                        <li>
                          <input id="a-6" className="checkbox-custom" name="rfm_amenities_servant_room" type="checkbox" />
                          <label htmlFor="a-6" className="checkbox-custom-label">Servant Room</label>
                        </li>
                        <li>
                          <input id="a-7" className="checkbox-custom" name="rfm_amenities_gas_pipeline" type="checkbox" />
                          <label htmlFor="a-7" className="checkbox-custom-label">Gas Pipeline</label>
                        </li>
                        <li>
                          <input id="a-8" className="checkbox-custom" name="rfm_amenities_rainwater_harvesting" type="checkbox" />
                          <label htmlFor="a-8" className="checkbox-custom-label">Rainwater Harvesting</label>
                        </li>
                        <li>
                          <input id="a-9" className="checkbox-custom" name="rfm_amenities_housekeepiing" type="checkbox" />
                          <label htmlFor="a-9" className="checkbox-custom-label">Housekeepiing</label>
                        </li>
                        <li>
                          <input id="a-10" className="checkbox-custom" name="rfm_amenities_club_house" type="checkbox" />
                          <label htmlFor="a-10" className="checkbox-custom-label">Club House</label>
                        </li>
                        <li>
                          <input id="a-11" className="checkbox-custom" name="rfm_amenities_visitor_parking" type="checkbox" />
                          <label htmlFor="a-11" className="checkbox-custom-label">Visitor Parking</label>
                        </li>
                        <li>
                          <input id="a-12" className="checkbox-custom" name="rfm_amenities_swimming_pool" type="checkbox" />
                          <label htmlFor="a-12" className="checkbox-custom-label">Swimming Pool</label>
                        </li>
                        <li>
                          <input id="a-14" className="checkbox-custom" name="rfm_amenities_fire_safety" type="checkbox" />
                          <label htmlFor="a-14" className="checkbox-custom-label">Fire Safety</label>
                        </li>
                        <li>
                          <input id="a-15" className="checkbox-custom" name="rfm_amenities_shopping_center" type="checkbox" />
                          <label htmlFor="a-15" className="checkbox-custom-label">Shopping Center</label>
                        </li>
                        <li>
                          <input id="a-16" className="checkbox-custom" name="rfm_amenities_park" type="checkbox" />
                          <label htmlFor="a-16" className="checkbox-custom-label">Park</label>
                        </li>
                        <li>
                          <input id="a-17" className="checkbox-custom" name="rfm_amenities_sewage_treatment" type="checkbox" />
                          <label htmlFor="a-17" className="checkbox-custom-label">Sewage Treatment</label>
                        </li>
                        <li>
                          <input id="a-18" className="checkbox-custom" name="rfm_amenities_power_backup" type="checkbox" />
                          <label htmlFor="a-18" className="checkbox-custom-label">Power Backup</label>
                        </li>
                        <li>
                          <input id="a-19" className="checkbox-custom" name="rfm_amenities_gated_security" type="checkbox" />
                          <label htmlFor="a-19" className="checkbox-custom-label">Gated Security</label>
                        </li>
                        <li>
                          <input id="a-20" className="checkbox-custom" name="rfm_amenities_gym" type="checkbox" />
                          <label htmlFor="a-20" className="checkbox-custom-label">GYM</label>
                        </li>
                        {/* //////////////// */}
                        <li>
                          <input id="a-21" className="checkbox-custom" name="rfm_amenities_gym" hidden type="checkbox" />
                          <label htmlFor="a-21" hidden className="checkbox-custom-label">GYM</label>
                        </li><li>
                          <input id="a-22" hidden className="checkbox-custom" name="rfm_amenities_gym" type="checkbox" />
                          <label htmlFor="a-22" hidden className="checkbox-custom-label">GYM</label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-12 col-md-12">
                <button className="btn btn-theme" type="submit">Submit &amp; Preview</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============================ Submit Property End ================================== */}
  {/* ============================ Call To Action ================================== */}
  <section className="theme-bg call_action_wrap-wrap">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="call_action_wrap">
            <div className="call_action_wrap-head">
              <h3>Do You Have Questions ?</h3>
              <span>We'll help you to grow your career and growth.</span>
            </div>
            <a href="#" className="btn btn-call_action_wrap">Contact Us Today</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ============================ Call To Action End ================================== */}
  {/* ============================ Footer Start ================================== */}
  <footer className="dark-footer skin-dark-footer style-2">
    <div className="footer-middle">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5">
            <div className="footer_widget">
              <img src="assets/img/logo-light.png" className="img-footer small mb-2" alt />
              <h4 className="extream mb-3">Do you need help with<br />anything?</h4>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
              <div className="foot-news-last">
                <div className="input-group">
                  <input type="text" className="form-control" placeholder="Email Address" />
                  <div className="input-group-append">
                    <button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-7 ml-auto">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Layouts</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Home Page</a></li>
                    <li><a href="#">About Page</a></li>
                    <li><a href="#">Service Page</a></li>
                    <li><a href="#">Property Page</a></li>
                    <li><a href="#">Contact Page</a></li>
                    <li><a href="#">Single Blog</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">All Sections</h4>
                  <ul className="footer-menu">
                    <li><a href="#">Headers<span className="new">New</span></a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Attractive<span className="new">New</span></a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Footers</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="footer_widget">
                  <h4 className="widget_title">Company</h4>
                  <ul className="footer-menu">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Affiliate</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Changelog<span className="update">Update</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 col-md-12 text-center">
            <p className="mb-0">© 2021 RentUP. Designd By <a href="https://themezhub.com/">ThemezHub</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* ============================ Footer End ================================== */}
  {/* Log In Modal */}
  <div className="modal fade" id="login" tabIndex={-1} role="dialog" aria-labelledby="registermodal" aria-hidden="true">
    <div className="modal-dialog modal-xl login-pop-form" role="document">
      <div className="modal-content overli" id="registermodal">
        <div className="modal-body p-0">
          <div className="resp_log_wrap">
            <div className="resp_log_thumb" style={{background: 'url(assets/img/log.jpg)no-repeat'}} />
            <div className="resp_log_caption">
              <span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
              <div className="edlio_152">
                <ul className="nav nav-pills tabs_system center" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="pills-login-tab" data-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true"><i className="fas fa-sign-in-alt mr-2" />Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="pills-signup-tab" data-toggle="pill" href="#pills-signup" role="tab" aria-controls="pills-signup" aria-selected="false"><i className="fas fa-user-plus mr-2" />Register</a>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="pills-login-tab">
                  <div className="login-form">
                    <form>
                      <div className="form-group">
                        <label>User Name</label>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                          <input type="password" className="form-control" />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="eltio_ol9">
                          <div className="eltio_k1">
                            <input id="dd" className="checkbox-custom" name="dd" type="checkbox" />
                            <label htmlFor="dd" className="checkbox-custom-label">Remember Me</label>
                          </div>	
                          <div className="eltio_k2">
                            <a href="#">Lost Your Password?</a>
                          </div>	
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Login</button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-signup" role="tabpanel" aria-labelledby="pills-signup-tab">
                  <div className="login-form">
                    <form>
                      <div className="form-group">
                        <label>Full Name</label>
                        <div className="input-with-icon">
                          <input type="text" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email ID</label>
                        <div className="input-with-icon">
                          <input type="email" className="form-control" />
                          <i className="ti-user" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <div className="input-with-icon">
                          <input type="password" className="form-control" />
                          <i className="ti-unlock" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="eltio_ol9">
                          <div className="eltio_k1">
                            <input id="dds" className="checkbox-custom" name="dds" type="checkbox" />
                            <label htmlFor="dds" className="checkbox-custom-label">By using the website, you accept the terms and conditions</label>
                          </div>	
                        </div>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="btn btn-md full-width pop-login">Register</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* End Modal */}
  <a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
</div>

  )
}

export default ResidentialFlatmates