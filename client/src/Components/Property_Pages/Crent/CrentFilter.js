import React from 'react'

const CrentFilter = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							
      <div className="collapse" id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Property Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-l6 col-md-6 p-0">
                  <input id="a-1" className="checkbox-custom" name="Office Space" type="checkbox" />
                  <label htmlFor="a-1" className="checkbox-custom-label">Office Space</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-2" className="checkbox-custom" name="Co-Working" type="checkbox" />
                  <label htmlFor="a-2" className="checkbox-custom-label">Co-Working</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-3" className="checkbox-custom" name="Shop" type="checkbox" />
                  <label htmlFor="a-3" className="checkbox-custom-label">Shop</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-4" className="checkbox-custom" name="Showroom" type="checkbox" />
                  <label htmlFor="a-4" className="checkbox-custom-label">Showroom</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-5" className="checkbox-custom" name="Warehouse" type="checkbox" />
                  <label htmlFor="a-5" className="checkbox-custom-label">Warehouse</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-6" className="checkbox-custom" name="Industrial Shed" type="checkbox" />
                  <label htmlFor="a-6" className="checkbox-custom-label">Industrial Shed</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-7" className="checkbox-custom" name="Industrial Building" type="checkbox" />
                  <label htmlFor="a-7" className="checkbox-custom-label">Industrial Building</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-8" className="checkbox-custom" name="Restaurant" type="checkbox" />
                  <label htmlFor="a-8" className="checkbox-custom-label">Restaurant</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-9" className="checkbox-custom" name="Cafe" type="checkbox" />
                  <label htmlFor="a-9" className="checkbox-custom-label">Cafe</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-10" className="checkbox-custom" name="Other Business" type="checkbox" />
                  <label htmlFor="a-10" className="checkbox-custom-label">Other Business</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-11" className="checkbox-custom" name="Gated Community Villa" type="checkbox" />
                  <label htmlFor="a-11" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
                <li className="col-lg-12 col-md-12 p-0">
                  <input id="a-12" className="checkbox-custom" name="Gated Community Villa" type="checkbox" />
                  <label htmlFor="a-12" className="checkbox-custom-label">Gated Community Villa</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Building Type</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-13" className="checkbox-custom" name="Business Park" type="checkbox" />
                  <label htmlFor="a-13" className="checkbox-custom-label">Business Park</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-14" className="checkbox-custom" name="Mall" type="checkbox" />
                  <label htmlFor="a-14" className="checkbox-custom-label">Mall</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-15" className="checkbox-custom" name="Independent House" type="checkbox" />
                  <label htmlFor="a-15" className="checkbox-custom-label">Independent House</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-16" className="checkbox-custom" name="Standalone Building" type="checkbox" />
                  <label htmlFor="a-16" className="checkbox-custom-label">Standalone Building</label>
                </li>	
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-17" className="checkbox-custom" name="Independent Shop" type="checkbox" />
                  <label htmlFor="a-17" className="checkbox-custom-label">Independent Shop</label>
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
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Built Up Area(sq. ft.): 0 sq. ft. to 1,00,000 sq. ft.</h6>
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

export default CrentFilter