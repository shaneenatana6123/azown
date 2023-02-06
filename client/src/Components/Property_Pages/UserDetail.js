import React from 'react'
import { Link } from 'react-router-dom'

const UserDetail = () => {
  return (
 <div id="main-wrapper">

  <div className="clearfix" />

  <div className="page-title" style={{background: '#f4f4f4 url(assets/img/slider-1.jpg)'}} data-overlay={5}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="breadcrumbs-wrap">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">Owner Detail</li>
            </ol>
            <h2 className="breadcrumb-title">California Real Estate - UK</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="gray min">
    <div className="container">
      <div className="row">
        {/* property main detail */}
        <div className="col-lg-8 col-md-12 col-sm-12">
          {/* Single Block Wrap */}
          <div className="property_block_wrap">
            <div className="property_block_wrap_header">
              <h4 className="property_block_title">Agency Info</h4>
            </div>
            <div className="block-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's s  printer took a galley of type and scrambled it to make a type specimen book.</p>
             
            </div>
          </div>
          {/* Single Block Wrap */}
          <div className="_prtis_list mb-4">
            <div className="_prtis_list_header">
              <ul>
                <li>
                  <div className="content_thumb"><i className="fa fa-envelope" /></div>
                  <div className="content">
                    <span className="dark">svalia.tech@gmail.com</span>
                    <span className="title">Email</span>
                  </div>
                </li>
                <li>
                  <div className="content_thumb"><i className="fa fa-phone" /></div>
                  <div className="content">
                    <span className="dark">856 574 2314</span>
                    <span className="title">Call Me</span>
                  </div>
                </li>
                <li>
                  <div className="content_thumb"><i className="fa fa-map-marker-alt" /></div>
                  <div className="content">
                    <span className="dark">Montreal, USA</span>
                    <span className="title">Location</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="_prtis_list_body">
              <ul className="deatil_features">
                <li><strong>California Real Estate</strong>Name</li>
                <li><strong>svalia.tech@gmail.com</strong>Email</li>
                <li><strong>568 942 5163</strong>Call</li>
                <li><strong>Liverpool</strong>City</li>
                <li><strong>London</strong>State</li>
                <li><strong>United Kingdom</strong>Country</li>
                {/* <li><strong>+91 256 8547</strong>Fax</li> */}
                {/* <li><strong>22 Listed</strong>Property</li> */}
              </ul>
            </div>
          </div>
          {/* Single Block Wrap */}
        </div>
        {/* property Sidebar */}
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="property-sidebar">
            <div className="agency_gridio_wrap">
              <div className="agency_gridio_header" style={{background: '#d2382d url(assets/img/bg2.png)no-repeat'}}>
                <span className="agents_count">22 Agents</span>
              </div>
              <div className="agency_gridio_caption">
                <div className="agency_gridio_thumb">
                  <a href="agency-page.html"><img src="assets/img/brand-4.png" className="img-fluid" alt /></a>	
                </div>
                <div className="agency_gridio_txt">
                  <h4><a href="agency-page.html">California Real Estate</a></h4>
                  <span className="agt_gridio_ocat">Liverpool. London</span>
                 
                  <a href="#" data-toggle="modal" data-target="#autho-message" className="vew_agency_btn">Send Message</a>	
                  
                </div>
              </div>
            </div>
           
          </div>
        </div>
        <div className='col-12'>
        <div className="property_block_wraps">
            <div className="property_block_wrap_header">
              <ul className="nav nav-pills tabs_system" id="pills-tab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" id="pills-property-tab" data-toggle="pill" href="#pills-property" role="tab" aria-controls="pills-property" aria-selected="true">Properties</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="pills-agent-tab" data-toggle="pill" href="#pills-agent" role="tab" aria-controls="pills-agent" aria-selected="false">Agent</a>
                </li>
              </ul>
            </div>
            <div className="block-bodys">
              <div className="sidetab-content">
                <div className="tab-content" id="pills-tabContent">
                  {/* Book Now Tab */}
                  <div className="tab-pane fade show active" id="pills-property" role="tabpanel" aria-labelledby="pills-property-tab">
                    <div className="row justify-content-center">
                      {/* Single Property */}
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="property-listing property-2">
                          <div className="listing-img-wrapper">
                            <div className="_exlio_125">For Sale</div>
                            <div className="list-img-slide">
                              <div className="click">
                                <div><a href="single-property-1.html"><img src="assets/img/p-1.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-2.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-3.png" className="img-fluid mx-auto" alt /></a></div>
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-wrapper">
                            <div className="listing-short-detail-wrap">
                              <div className="_card_list_flex mb-2">
                                <div className="_card_flex_01">
                                  <span className="_list_blickes _netork">6 Network</span>
                                  <span className="_list_blickes types">Family</span>
                                </div>
                                <div className="_card_flex_last">
                                  <div className="prt_saveed_12lk">
                                    <label className="toggler toggler-danger"><input type="checkbox" /><i className="ti-heart" /></label>
                                  </div>
                                </div>
                              </div>
                              <div className="_card_list_flex">
                                <div className="_card_flex_01">
                                  <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">7012 Shine Sehu Street, Liverpool London, LC345AC</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="price-features-wrapper">
                            <div className="list-fx-features">
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>3 Beds
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>1 Bath
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>800 sqft
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-footer">
                            <div className="footer-first">
                              <h6 className="listing-card-info-price mb-0 p-0">$7,000</h6>
                            </div>
                            <div className="footer-flex">
                              <a href="property-detail.html" className="prt-view">View Detail</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Property */}
                      {/* Single Property */}
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="property-listing property-2">
                          <div className="listing-img-wrapper">
                            <div className="_exlio_125">For Rent</div>
                            <div className="list-img-slide">
                              <div className="click">
                                <div><a href="single-property-1.html"><img src="assets/img/p-4.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-5.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-6.png" className="img-fluid mx-auto" alt /></a></div>
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-wrapper">
                            <div className="listing-short-detail-wrap">
                              <div className="_card_list_flex mb-2">
                                <div className="_card_flex_01">
                                  <span className="_list_blickes _netork">4 Network</span>
                                  <span className="_list_blickes types">Condos</span>
                                </div>
                                <div className="_card_flex_last">
                                  <div className="prt_saveed_12lk">
                                    <label className="toggler toggler-danger"><input type="checkbox" /><i className="ti-heart" /></label>
                                  </div>
                                </div>
                              </div>
                              <div className="_card_list_flex">
                                <div className="_card_flex_01">
                                  <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">5689 Resot Relly Market, Montreal Canada, HAQC445</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="price-features-wrapper">
                            <div className="list-fx-features">
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>4 Beds
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>2 Bath
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>740 sqft
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-footer">
                            <div className="footer-first">
                              <h6 className="listing-card-info-price mb-0 p-0">$8,200</h6>
                            </div>
                            <div className="footer-flex">
                              <a href="property-detail.html" className="prt-view">View Detail</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Single Property */}
                      {/* Single Property */}
                      <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="property-listing property-2">
                          <div className="listing-img-wrapper">
                            <div className="_exlio_125">For Sale</div>
                            <div className="list-img-slide">
                              <div className="click">
                                <div><a href="single-property-1.html"><img src="assets/img/p-7.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-8.png" className="img-fluid mx-auto" alt /></a></div>
                                <div><a href="single-property-1.html"><img src="assets/img/p-9.png" className="img-fluid mx-auto" alt /></a></div>
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-wrapper">
                            <div className="listing-short-detail-wrap">
                              <div className="_card_list_flex mb-2">
                                <div className="_card_flex_01">
                                  <span className="_list_blickes _netork">5 Network</span>
                                  <span className="_list_blickes types">Offices</span>
                                </div>
                                <div className="_card_flex_last">
                                  <div className="prt_saveed_12lk">
                                    <label className="toggler toggler-danger"><input type="checkbox" /><i className="ti-heart" /></label>
                                  </div>
                                </div>
                              </div>
                              <div className="_card_list_flex">
                                <div className="_card_flex_01">
                                  <h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">9632 New Green Garden, Huwai Denever USA, AWE789O</a></h4>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="price-features-wrapper">
                            <div className="list-fx-features">
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>5 Beds
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>2 Bath
                              </div>
                              <div className="listing-card-info-icon">
                                <div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>900 sqft
                              </div>
                            </div>
                          </div>
                          <div className="listing-detail-footer">
                            <div className="footer-first">
                              <h6 className="listing-card-info-price mb-0 p-0">$9,500</h6>
                            </div>
                            <div className="footer-flex">
                              <a href="property-detail.html" className="prt-view">View Detail</a>
                            </div>
                          </div>
                        </div>
                      </div>
                   
                    </div>	
                  </div>
                  {/* Appointment Now Tab */}
                  <div className="tab-pane fade" id="pills-agent" role="tabpanel" aria-labelledby="pills-agent-tab">
                    <div className="row justify-content-center">
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">102 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-1.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />Montreal, USA</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Adam K. Jollio</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">72 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-2.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />Liverpool, Canada</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Sargam S. Singh</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">22 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-3.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />Montreal, Canada</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Harijeet M. Siller</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">50 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-4.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />Denever, USA</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Anna K. Young</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">42 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-5.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />2272 Briarwood Drive</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Michael P. Grimaldo</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Single Agent */}
                      <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="grid_agents">
                          <div className="elio_mx_list theme-bg-2">102 Listings</div>
                          <div className="grid_agents-wrap">
                            <div className="fr-grid-thumb">
                              <a href="agent-page.html">
                                <span className="verified"><img src="assets/img/verified.svg" className="verify mx-auto" alt /></span>
                                <img src="assets/img/team-1.jpg" className="img-fluid mx-auto" alt />
                              </a>
                            </div>
                            <div className="fr-grid-deatil">
                              <span><i className="ti-location-pin mr-1" />Montreal, USA</span>
                              <h5 className="fr-can-name"><a href="agent-page.html">Adam K. Jollio</a></h5>
                              <ul className="inline_social">
                                <li><a href="#" className="fb"><i className="ti-facebook" /></a></li>
                                <li><a href="#" className="ln"><i className="ti-linkedin" /></a></li>
                                <li><a href="#" className="ins"><i className="ti-instagram" /></a></li>
                                <li><a href="#" className="tw"><i className="ti-twitter" /></a></li>
                              </ul>
                            </div>
                            <div className="fr-infos-deatil">	
                              <a href="#" className="btn agent-btn theme-bg"><i className="fa fa-envelope mr-2" />Message</a>
                              <a href="#" className="btn agent-btn theme-black"><i className="fa fa-phone" /></a>
                            </div>
                          </div>
                        </div>
                      </div>						
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>					
    </div>	
  </section>

 

</div>

  )
}

export default UserDetail