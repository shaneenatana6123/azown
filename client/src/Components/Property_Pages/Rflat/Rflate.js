import React from 'react'
import { Link } from 'react-router-dom';

const Rflate = ({property}) => {
  console.log(property);
  return (
   
    <div className="row justify-content-center">
      {/* Single Property */}
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <div className="property-listing list_view">
          <div className="listing-img-wrapper">
            <div className="_exlio_125">For Flatmate</div>
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
                      <h6 className="cms_title mb-0"><Link to=''>5689 Resot Relly Market, Montreal </Link></h6>
                    </div>
                  </div>
                  <div className="_card_flex_last">
                    <h6 className="cms_amount mb-0">Rs.{property.rfm_rental_detail_rent}</h6>
                  </div> 
                </div>
              </div>
            </div>
            <div style={{borderTop: '#dddddd solid', borderBottom: '#dddddd solid', paddingBottom: 10}}>
              <br /><div className="_card_list_flex">
                <div className="_card_flex_01">
                 
                </div>
              </div>												
              <div className="_card_list_flex mb-2">
                <p className="location_fuzail"><i className="lni-map-marker" />{property.rfm_location_city}</p>
              </div>											
              <div className="row" style={{paddingLeft: 17}}>
                <div className="row col-lg-12 col-md-12">
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">Rs.{property.rfm_rental_detail_exp_deposit} </p>
                    <i className="fa fa-money pr-1" /> Deposit
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rfm_detail_builtup_area} sqft</p>
                    <i className="fa fa-bed pr-1" />built-up Area
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rfm_detail_furnishing}</p>
                    <i className="fa fa-building pr-1" />Furnishing
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className=" rr_list">{property.rfm_detail_bhk_type}</p>
                    <i className="fa fa-parking pr-1" />BHK Type
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rfm_detail_bathroom} Bathrooms</p>
                    <i className="fa fa-building pr-1" />Bathrooms
                  </div>
                  <div className="listing-card-info-icon col-lg-4 col-md-4 col-sm-10">
                    <p className="rr_list">{property.rfm_rental_detail_avail_from}</p>
                    <i className="fa fa-calendar pr-1" />Available From
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
                <a href className="prt-view" style={{backgroundColor: '#27ae60'}}>Get Owner Details</a>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    

    </div>
  
  )
}

export default Rflate