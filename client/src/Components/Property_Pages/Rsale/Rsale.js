import React from 'react'

const Rsale = () => {
  return (
    <div className="col-lg-8 col-md-12 col-sm-12">
    <div className="row justify-content-center">
      {/* Single Property */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="property-listing list_view">
          <div className="listing-img-wrapper">
            <div className="_exlio_125">For Rent</div>
            <div className="list-img-slide">
              <div className="click">
                <div><a href="single-property-1.html"><img src="assets/img/p-1.png" className="img-fluid mx-auto" alt /></a></div>
                <div><a href="single-property-1.html"><img src="assets/img/p-2.png" className="img-fluid mx-auto" alt /></a></div>
                <div><a href="single-property-1.html"><img src="assets/img/p-3.png" className="img-fluid mx-auto" alt /></a></div>
              </div>
            </div>
          </div>
          <div className="list_view_flex">										
            <div className="listing-detail-wrapper mt-1">
              <div className="listing-short-detail-wrap">
                <div className="_card_list_flex mb-2">
                  <div className="_card_list_flex">
                    <div className="_card_flex_01">
                      <h6 className="cms_title mb-0"><a href="single-property-1.html">5689 Resot Relly Market, Montreal </a></h6>
                    </div>
                  </div>
                  <div className="_card_flex_last">
                    <h6 className="cms_amount mb-0">$7,000</h6>
                  </div> 
                </div>
              </div>
            </div>
            <div style={{borderTop: '#dddddd solid', borderBottom: '#dddddd solid', paddingBottom: 10}}>
              <br /><div className="_card_list_flex">
                <div className="_card_flex_01">
                  {/* <h4 class="listing-name verified" style="padding-top: 10px;"><a href="single-property-1.html" class="prt-link-detail">5689 Resot Relly Market, Montreal Canada</a></h4> */}
                </div>
              </div>												
              <div className="_card_list_flex mb-2">
                <p className="location_fuzail"><i className="lni-map-marker" />Chaman Ganj, Kanpur Nagar, Uttar Pradesh, India </p>
              </div>											
              <div className="row" style={{paddingLeft: 17}}>
                <div className="row col-lg-12 col-md-12">
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">₹50,000 </p>
                    <i className="fa fa-money pr-1" /> per sq. ft.
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">540 sqft</p>
                    <i className="fa fa-bed pr-1" />Buil-up Area
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">North</p>
                    <i className="fa fa-compass pr-1" />facing
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">3 BHK</p>
                    <i className="fa fa-building pr-1" />BHK Type
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">2 Bathroom</p>
                    <i className="fa fa-bath pr-1" />Bathrooms
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">Both</p>
                    <i className="fa fa-parking pr-1" />Parking
                  </div>
                </div>
              </div>
            </div>
            <div className="listing-detail-footer" style={{marginTop: 0, paddingRight: 0}}>
              <div className="footer-first">
                <div className="foot-rates">
                  <span className="elio_rate good">4.2</span>
                  <div className="_rate_stio">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
              </div>
              <a href="#">  <i className=" fa fa-heart" style={{fontSize: 35, paddingRight: 22, paddingTop: 5}} /></a> 
              <div className="footer-flex">
                <a href="property-detail.html" className="prt-view" style={{backgroundColor: '#27ae60'}}>Get Owner Details</a>
                {/* <a href="property-detail.html" class="prt-view">View Detail</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Property */}
     
    </div>
  </div>
  )
}

export default Rsale