import React from 'react'

const PlotFilter = () => {
  return (
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="page-sidebar p-0">
      <a className="filter_links" data-toggle="collapse" href="#fltbox" role="button" aria-expanded="false" aria-controls="fltbox">Open Advance Filter<i className="fa fa-sliders-h ml-2" /></a>							
      <div className="collapse" id="fltbox">
        {/* Find New Property */}
        <div className="sidebar-widgets p-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Price Range: ₹ 0 to ₹ 10 Crores</h6>
              <div className="rg-slider">
                <input type="text" className="js-range-slider" name="my_range" defaultValue={100000} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4 pb-4">
              <h6>Plot Area (sq. ft.): 0 to 1,00,000 sq.ft.</h6>
              <div className="rg-slider">
                <input type="text" className="js-range-slider" name="my_range" defaultValue={100000} />
              </div>
            </div>
          </div>		
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Onwnership</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Freehold" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Freehold</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Leasehold" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Leasehold</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Co-Operative Society" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Co-Operative Society</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Power of Attorney" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Power of Attorney</label>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 pt-4">
              <h6>Amenities</h6>
              <ul className="row p-0 m-0">
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-21" className="checkbox-custom" name="Water" type="checkbox" />
                  <label htmlFor="a-21" className="checkbox-custom-label">Water</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-22" className="checkbox-custom" name="Sewage Connection" type="checkbox" />
                  <label htmlFor="a-22" className="checkbox-custom-label">Sewage Connection</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-23" className="checkbox-custom" name="Gated Security" type="checkbox" />
                  <label htmlFor="a-23" className="checkbox-custom-label">Gated Security</label>
                </li>
                <li className="col-lg-6 col-md-6 p-0">
                  <input id="a-24" className="checkbox-custom" name="Electricity Connection" type="checkbox" />
                  <label htmlFor="a-24" className="checkbox-custom-label">Electricity Connection</label>
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

export default PlotFilter