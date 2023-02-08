import React, { useContext, useEffect, useState } from 'react'
import { leadContext } from '../../../context/LeadContext';
import propertyContext from '../../../context/PropertyContext';
import LeadProfile from './LeadProfile';
import img from '../../images/p-1.png'
import { Link } from 'react-router-dom';

const MyProperties = () => {
  const context = useContext(propertyContext);
  const { dash, host } = context;
  const leadcontext = useContext(leadContext)
  const { ownerlead, ownerleaddata } = leadcontext
  const [model, setmodel] = useState(false);

  const handleClose = () => setmodel(false);
  const handleShow = () => setmodel(true);
  const [rr, setrr] = useState([])
  const [rrs, setrrs] = useState([])
  const [rpg, setrpg] = useState([])
  const [rfm, setrfm] = useState([])
  const [cmr, setcmr] = useState([])
  const [cms, setcms] = useState([])
  const [plot, setplot] = useState([])


  useEffect(() => {
    async function MyRent() {
      const responce = await fetch(`${host}/api/property/myrr`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setrr(data)

    };
    async function MyRsale() {
      const responce = await fetch(`${host}/api/property/myrrs`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setrrs(data)

    };
    async function MyRpg() {
      const responce = await fetch(`${host}/api/property/myrpg`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setrpg(data)

    };
    async function MyRfm() {
      const responce = await fetch(`${host}/api/property/myrfm`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setrfm(data)
    };
    async function MyCmr() {
      const responce = await fetch(`${host}/api/property/mycmr`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setcmr(data)
    };
    async function MyCms() {
      const responce = await fetch(`${host}/api/property/mycms`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setcms(data)
    };
    async function MyPlot() {
      const responce = await fetch(`${host}/api/property/myplot`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });
      const data = await responce.json();
      setplot(data)
    };
    MyRent()
    MyRsale()
    MyRpg()
    MyRfm()
    MyCmr()
    MyCms()
    MyPlot()

  }, [])
  return (
    <div className="col-lg-9 col-md-8 col-sm-12">

      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Rent</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rr && rr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                                <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.rr_detail_title && item.rr_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.rr_location_city && item.rr_location_city.slice(0, 60)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rr_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><span><button onClick={() => { setmodel(true); ownerlead(item._id);console.log(item._id) }} className='btn btn-light p-2 btn-success'>{item.lead && item.lead.length} till now</button></span></div>
                            
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                              <Link to={`/edit-rrent/${item._id}`}><i className="fas fa-edit" /></Link>
                              
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>

      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Residential Sale</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rrs && rrs.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.rrs_detail_title && item.rrs_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.rrs_location_city && item.rrs_location_city.slice(0, 60)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rrs_resale_detail_exp_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                           
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rsale/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>

      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Paying Guest</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rpg && rpg.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.rpg_detail_title && item.rpg_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.rpg_location_city && item.rpg_location_city.slice(0, 60)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rpg_detail_room_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rpg/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">

        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Flatmates</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>
                    {rfm && rfm.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.rfm_detail_title && item.rfm_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.rfm_location_city && item.rfm_location_city.slice(0, 60)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.rfm_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-rfm/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Rent</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cmr && cmr.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.cr_detail_title && item.cr_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.cr_location_city && item.cr_location_city.slice(0,60)}....`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.cr_rental_detail_exp_deposit}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-cmr/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Commercial Sale</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cms && cms.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.cs_detail_title && item.cs_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.cs_location_city && item.cs_location_city.slice(0,60)}...`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.cs_resale_details_exp_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-cms/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className="dashboard-body mb-3">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="dashboard_property">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Lands / Plot</th>
                      <th scope="col" className="m2_hide">Leads</th>
                      <th scope="col" className="m2_hide">Likes</th>
                      <th scope="col" className="m2_hide">Posted On</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plot && plot.map(item => {
                      return <>
                        <tr>
                          <td>
                            <div className="dash_prt_wrap">
                              <div className="dash_prt_thumb">
                              <img src={item.images && item.images.length===0 ?img:item.images[0]} className="img-fluid" alt="jfh" />
                              </div>
                              <div className="dash_prt_caption">
                                <h5>{`${item.ps_detail_title && item.ps_detail_title.slice(0,50)}...`}</h5>
                                <div className="prt_dashb_lot">{`${item.ps_location_city && item.ps_location_city.slice(0, 60)}....`}</div>
                                <div className="prt_dash_rate"><span>Rs.{item.ps_sale_detail_price}</span></div>
                              </div>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="prt_leads"><button onClick={() => { setmodel(true); ownerlead(item._id) }} className='btn btn-success p-2'>{item.lead && item.lead.length} till now</button></div>
                            <div className="prt_leads_list">
                              <ul>

                              </ul>
                            </div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_view"><h5 className="up">{item.like && item.like.length}</h5></div>
                            <div className="_leads_view_title"><span>Likes</span></div>
                          </td>
                          <td className="m2_hide">
                            <div className="_leads_posted"><h5>{item.date && item.date.slice(0, 10)}</h5></div>
                            <div className="_leads_view_title"><span>On Date</span></div>
                          </td>
                          <td>
                            <div className="_leads_status"><span className="active">Active</span></div>
                            {/* <div className="_leads_view_title"><span>Till 12 Oct</span></div> */}
                          </td>
                          <td>
                            <div className="_leads_action">
                            <Link to={`/edit-plot/${item._id}`}><i className="fas fa-edit" /></Link>
                              {/* <a href="#"><i className="fas fa-trash" /></a> */}
                            </div>
                          </td>
                        </tr>
                      </>
                    })}



                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* row */}
      </div>
      <div className={model ? "modal fade show" : "modal fade"} tabIndex={-1} role="dialog" aria-labelledby="authomessage" style={{ display: model ? 'block' : 'none' }}  >
        <div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
          <div className="modal-content" id="authomessage">
            <span className="mod-close" data-dismiss="modal" onClick={() => { setmodel(false) }} aria-hidden="true"><i className="ti-close" /></span>
            <div className="modal-body">
              <h4 className="modal-header-title">Total Lead</h4>
              <hr />
              <div className="login-form">
                {ownerleaddata && ownerleaddata.map((lead) => {
                  return <div>
                    < LeadProfile key={lead._id} lead={lead} />
                  </div>
                })}


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default MyProperties