import React from 'react'

const RrentFilter = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							
      <div className="collapse" id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Apartment Type</h6>
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
              <h6>BHK Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-4" className="checkbox-custom" name="1 RK" type="checkbox" />
                  <label htmlFor="a-4" className="checkbox-custom-label">1 RK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-5" className="checkbox-custom" name="1 BHK" type="checkbox" />
                  <label htmlFor="a-5" className="checkbox-custom-label">1 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-6" className="checkbox-custom" name="2 BHK" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">2 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-7" className="checkbox-custom" name="3 BHK" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">3 BHK</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-8" className="checkbox-custom" name="4+ BHK" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">4+ BHK</label>
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
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Floor Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-15" className="checkbox-custom" name="Vitrified Tiles" type="checkbox" />
                  <label htmlFor="a-15" className="checkbox-custom-label">Vitrified Tiles</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-16" className="checkbox-custom" name="Mossaic" type="checkbox" />
                  <label htmlFor="a-16" className="checkbox-custom-label">Mossaic</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-17" className="checkbox-custom" name="Marble" type="checkbox" />
                  <label htmlFor="a-17" className="checkbox-custom-label">Marble</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-18" className="checkbox-custom" name="Granite" type="checkbox" />
                  <label htmlFor="a-18" className="checkbox-custom-label">Granite</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-19" className="checkbox-custom" name="Wooden" type="checkbox" />
                  <label htmlFor="a-19" className="checkbox-custom-label">Wooden</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-20" className="checkbox-custom" name="Cement" type="checkbox" />
                  <label htmlFor="a-20" className="checkbox-custom-label">Cement</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Choose Price</h6>
              <div className="rg-slider">
                <input type="text" className="js-range-slider" name="my_range" defaultValue={100000} />
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

export default RrentFilter