import React from 'react'

const RflateFilter = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							
      <div className="collapse" id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Room Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-25" className="checkbox-custom" name="Shared Room" type="checkbox" />
                  <label htmlFor="a-25" className="checkbox-custom-label">Shared Room</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-26" className="checkbox-custom" name="Single Room" type="checkbox" />
                  <label htmlFor="a-26" className="checkbox-custom-label">Single Room</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Tenent Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-27" className="checkbox-custom" name="Male" type="checkbox" />
                  <label htmlFor="a-27" className="checkbox-custom-label">Male</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-28" className="checkbox-custom" name="Female" type="checkbox" />
                  <label htmlFor="a-28" className="checkbox-custom-label">Female</label>
                </li>													
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Property Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-1" className="checkbox-custom" name="Appartment" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Appartment</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-2" className="checkbox-custom" name="Independent House Villa" type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Independent House Villa</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-3" className="checkbox-custom" name="Gated Community Villa" type="checkbox" />
                  <label htmlFor="a-3" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Floor</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-9" className="checkbox-custom" name="0-10 Floor" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">0-10 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-10" className="checkbox-custom" name="10-20 Floor" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">10-20 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-11" className="checkbox-custom" name="20-30 Floor" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">20-30 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-12" className="checkbox-custom" name="30-40 Floor" type="checkbox" />
                  <label htmlFor="a-12" className="checkbox-custom-label">30-40 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-13" className="checkbox-custom" name="40-50 Floor" type="checkbox" />
                  <label htmlFor="a-13" className="checkbox-custom-label">40-50 Floor</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-14" className="checkbox-custom" name="50+ Floor" type="checkbox" />
                  <label htmlFor="a-14" className="checkbox-custom-label">50+ Floor</label>
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
              <h6>Furnishing</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Furnished" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Furnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Unfurnished" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Unfurnished</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Semi Furnished" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Semi Furnished</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Show Only </h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-29" className="checkbox-custom" name="Non-Veg Allowed" type="checkbox" />
                  <label htmlFor="a-29" className="checkbox-custom-label">Non-Veg Allowed</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Parking</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-30" className="checkbox-custom" name="Car" type="checkbox" />
                  <label htmlFor="a-30" className="checkbox-custom-label">Car</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-31" className="checkbox-custom" name="Bike" type="checkbox" />
                  <label htmlFor="a-31" className="checkbox-custom-label">Bike</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-32" className="checkbox-custom" name="None" type="checkbox" />
                  <label htmlFor="a-32" className="checkbox-custom-label">None</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-33" className="checkbox-custom" name="Both" type="checkbox" />
                  <label htmlFor="a-33" className="checkbox-custom-label">Both</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Bathroom</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-34" className="checkbox-custom" name={1} type="checkbox" />
                  <label htmlFor="a-34" className="checkbox-custom-label">1</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-35" className="checkbox-custom" name={2} type="checkbox" />
                  <label htmlFor="a-35" className="checkbox-custom-label">2</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-36" className="checkbox-custom" name={3} type="checkbox" />
                  <label htmlFor="a-36" className="checkbox-custom-label">3</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-37" className="checkbox-custom" name="3+" type="checkbox" />
                  <label htmlFor="a-37" className="checkbox-custom-label">3+</label>
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

export default RflateFilter