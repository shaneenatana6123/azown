import React from 'react'

const CsaleFilter = () => {
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
                        <input id="a-3" className="checkbox-custom" name="Showroom" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Showroom</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Warehouse" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Warehouse</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Industrial Shed" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Industrial Shed</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Industrial Building" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Industrial Building</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Restaurant" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Restaurant</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Cafe" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Cafe</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-3" className="checkbox-custom" name="Other Business" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Other Business</label>
                      </li>
                      <li className="col-lg-12 col-md-12 p-0">
                        <input id="a-3" className="checkbox-custom" name="Gated Community Villa" type="checkbox" />
                        <label htmlFor="a-3" className="checkbox-custom-label">Gated Community Villa</label>
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
                    <h6>Building Type</h6>
                    <ul className="row p-0 m-0">
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-6" className="checkbox-custom" name="Business Park" type="checkbox" />
                        <label htmlFor="a-6" className="checkbox-custom-label">Business Park</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-7" className="checkbox-custom" name="Mall" type="checkbox" />
                        <label htmlFor="a-7" className="checkbox-custom-label">Mall</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-4" className="checkbox-custom" name="Independent House" type="checkbox" />
                        <label htmlFor="a-4" className="checkbox-custom-label">Independent House</label>
                      </li>
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-8" className="checkbox-custom" name="Standalone Building" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">Standalone Building</label>
                      </li>	
                      <li className="col-lg-6 col-md-6 p-0">
                        <input id="a-8" className="checkbox-custom" name="Independent Shop" type="checkbox" />
                        <label htmlFor="a-8" className="checkbox-custom-label">Independent Shop</label>
                      </li>													
                    </ul>
                  </div>
                </div>
                {/*  <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Floor</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-9" class="checkbox-custom" name="0-10 Floor" type="checkbox">
              <label for="a-9" class="checkbox-custom-label">0-10 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-10" class="checkbox-custom" name="10-20 Floor" type="checkbox">
              <label for="a-10" class="checkbox-custom-label">10-20 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-11" class="checkbox-custom" name="20-30 Floor" type="checkbox">
              <label for="a-11" class="checkbox-custom-label">20-30 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-12" class="checkbox-custom" name="30-40 Floor" type="checkbox">
              <label for="a-12" class="checkbox-custom-label">30-40 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-13" class="checkbox-custom" name="40-50 Floor" type="checkbox">
              <label for="a-13" class="checkbox-custom-label">40-50 Floor</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-14" class="checkbox-custom" name="50+ Floor" type="checkbox">
              <label for="a-14" class="checkbox-custom-label">50+ Floor</label>
            </li>													
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Floor Type</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-15" class="checkbox-custom" name="Vitrified Tiles" type="checkbox">
              <label for="a-15" class="checkbox-custom-label">Vitrified Tiles</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-16" class="checkbox-custom" name="Mossaic" type="checkbox">
              <label for="a-16" class="checkbox-custom-label">Mossaic</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-17" class="checkbox-custom" name="Marble" type="checkbox">
              <label for="a-17" class="checkbox-custom-label">Marble</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-18" class="checkbox-custom" name="Granite" type="checkbox">
              <label for="a-18" class="checkbox-custom-label">Granite</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-19" class="checkbox-custom" name="Wooden" type="checkbox">
              <label for="a-19" class="checkbox-custom-label">Wooden</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-20" class="checkbox-custom" name="Cement" type="checkbox">
              <label for="a-20" class="checkbox-custom-label">Cement</label>
            </li>
            
          </ul>
        </div>
      </div> */}
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
                    <h6>Choose Price</h6>
                    <div className="rg-slider">
                      <input type="range" className="js-range-slider" name="my_range" defaultValue={100000} />
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
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Show Only </h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-29" class="checkbox-custom" name="Non-Veg Allowed" type="checkbox">
              <label for="a-29" class="checkbox-custom-label">Non-Veg Allowed</label>
            </li>
             <li class="col-lg-6 col-md-6 p-0">
              <input id="a-22" class="checkbox-custom" name="Student" type="checkbox">
              <label for="a-22" class="checkbox-custom-label">Student</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-23" class="checkbox-custom" name="Both" type="checkbox">
              <label for="a-23" class="checkbox-custom-label">Both</label>
            </li> 
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Parking</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-30" class="checkbox-custom" name="Car" type="checkbox">
              <label for="a-30" class="checkbox-custom-label">Car</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-31" class="checkbox-custom" name="Bike" type="checkbox">
              <label for="a-31" class="checkbox-custom-label">Bike</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-32" class="checkbox-custom" name="None" type="checkbox">
              <label for="a-32" class="checkbox-custom-label">None</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-33" class="checkbox-custom" name="Both" type="checkbox">
              <label for="a-33" class="checkbox-custom-label">Both</label>
            </li>
          </ul>
        </div>
      </div> */}
                {/* <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 pt-4">
          <h6>Bathroom</h6>
          <ul class="row p-0 m-0">
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-34" class="checkbox-custom" name="1" type="checkbox">
              <label for="a-34" class="checkbox-custom-label">1</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-35" class="checkbox-custom" name="2" type="checkbox">
              <label for="a-35" class="checkbox-custom-label">2</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-36" class="checkbox-custom" name="3" type="checkbox">
              <label for="a-36" class="checkbox-custom-label">3</label>
            </li>
            <li class="col-lg-6 col-md-6 p-0">
              <input id="a-37" class="checkbox-custom" name="3+" type="checkbox">
              <label for="a-37" class="checkbox-custom-label">3+</label>
            </li>
          </ul>
        </div>
      </div> */}
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

export default CsaleFilter