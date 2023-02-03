import React from 'react'

const RpgFilter = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="page-sidebar p-0">
            <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							
            <div className="collapse" id="fltbox">
              {/* Find New Property */}
              <div className="sidebar-widgets p-4">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Available For</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-1" className="checkbox-custom" name="Male" type="checkbox" />
                        <label htmlFor="a-1" className="checkbox-custom-label">Male</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-2" className="checkbox-custom" name="Female" type="checkbox" />
                        <label htmlFor="a-2" className="checkbox-custom-label">Female</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Anyone" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Anyone</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Room Type</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-4" className="checkbox-custom" name="1 Room" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">1 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-6" className="checkbox-custom" name="2 Room" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">2 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-7" className="checkbox-custom" name="3 Room" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">3 Room</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-8" className="checkbox-custom" name="4+ Room" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">4+ Room</label>
                      </li>													
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                    <h6>Choose Price</h6>
                    <div className="rg-slider">
                      <input type="range" className="js-range-slider" name="my_range" defaultValue={100000} />
                    </div>
                  </div>
                </div>		
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Prefered For </h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-21" className="checkbox-custom" name="Working Professional" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">Working Professional</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-22" className="checkbox-custom" name="Student" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Student</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-23" className="checkbox-custom" name="Both" type="checkbox" />
                        <label htmlFor="a-23" className="checkbox-custom-label">Both</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <h6>Parking</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-21" className="checkbox-custom" name="Car" type="checkbox" />
                        <label htmlFor="a-21" className="checkbox-custom-label">Car</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-22" className="checkbox-custom" name="Bike" type="checkbox" />
                        <label htmlFor="a-22" className="checkbox-custom-label">Bike</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-23" className="checkbox-custom" name="None" type="checkbox" />
                        <label htmlFor="a-23" className="checkbox-custom-label">None</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-24" className="checkbox-custom" name="Both" type="checkbox" />
                        <label htmlFor="a-24" className="checkbox-custom-label">Both</label>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
                    <button className="btn theme-bg rounded full-width">Find New Home</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar End */}						
        </div>
  )
}

export default RpgFilter