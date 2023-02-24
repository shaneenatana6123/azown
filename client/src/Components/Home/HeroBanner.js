import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api'




const HeroBanner = () => {
    const history = useNavigate()
    const originRef = useRef()
    const [tab, settab] = useState(1)
    const [formData, setFormData] = useState({
        city: "", area: "", proptype: 0
    })
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyCjYb2QG0B00lOeygGl9w2Nib4-NpBIc9U",
        libraries: ['places'],
    })
    if (!isLoaded) {
        return <h4>Page is Loading....</h4>
    }
    function handleForm(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    function handleClick(e) {
        e.preventDefault()
        let area = originRef.current.value
        let arr
        if (area !== "") {
            arr = area.split(",")
            //     console.log(arr)
            //     console.log(formData.city)
            //    console.log(arr.includes(formData.city)) 
        }



        // console.log(area)

        if (tab === 1) {

            if (formData.proptype === "1") {
                history('/rsale-list')
            } else if (formData.proptype === "2") {
                history('/plot-list')

            }
        } else if (tab === 2) {
            if (formData.proptype === '1') {
                history('/rrent-list')
            } else if (formData.proptype === "2") {
                history('/rfm-list')
            } else if (formData.proptype === "3") {
                history('/rpg-list')
            }
        } else if (tab === 3) {
            if (formData.proptype === '1') {
                history('/cms-list')
            } else if (formData.proptype === '2') {
                history('/cmr-list')
            }

        }
    }
    return (
        <div className="image-cover hero_banner" style={{ background: 'url(assets/img/banner-1.png) no-repeat' }} data-overlay={0}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <h1 className="big-header-capt mb-0 text-light">Search Your Next Home</h1>
                        <p className="text-center mb-4 text-light">Find new &amp; featured property located in your local city.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="simple_tab_search center">
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" onClick={() => { settab(1) }}>
                                    <a className={tab === 1 ? "nav-link active" : "nav-link"} id="buy-tab" data-toggle="tab" href role="tab" aria-controls="buy" aria-selected="true">Buy</a>
                                </li>
                                <li className="nav-item " onClick={() => { settab(2) }}>
                                    <a className={tab === 2 ? "nav-link active" : "nav-link"} id="sell-tab" data-toggle="tab" href role="tab" aria-controls="sell" aria-selected="false">Rent</a>
                                </li>
                                <li className="nav-item" onClick={() => { settab(3) }}>
                                    <a className={tab === 3 ? "nav-link active" : "nav-link"} id="rent-tab" data-toggle="tab" href role="tab" aria-controls="rent" aria-selected="false">Commercial</a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">

                                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="buy-tab">
                                    <div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
                                        <div className="search_hero_wrapping">
                                            <div className="row">

                                                <div className="col-lg-2 col-md-2 col-sm-12">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <div className="input-with-icon">
                                                            <select id="location" name='city' onChange={handleForm} className="form-control">

                                                                <option value="Pune" selected>Pune</option>
                                                                <option value="Banglore">Banglore</option>
                                                                <option value="Noida">Noida</option>
                                                                <option value="Delhi">Delhi</option>
                                                                <option value="Gurgaon">Gurgaon</option>
                                                                <option value="Mumbai">Mumbai</option>
                                                                <option value="Gaziabad">Gaziabad</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-12 col-md-4">
                                                    <div className="form-group">
                                                        <label>Area</label>
                                                        <Autocomplete>
                                                            <input type="text"
                                                                ref={originRef} className="form-control search_input b-0" placeholder="ex. Baner" />
                                                        </Autocomplete>

                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Property Type</label>
                                                        {tab === 1 && <div className="input-with-icon">
                                                            <select id="ptypes" name='proptype' onChange={handleForm} className="form-control">
                                                                <option value={0} disabled selected>Select categories</option>
                                                                <option value={1}>Full House</option>
                                                                <option value={2}>Land/Plots</option>


                                                            </select>
                                                        </div>}
                                                        {tab === 2 && <div className="input-with-icon">
                                                            <select id="ptypes" name='proptype' onChange={handleForm} className="form-control">
                                                                {/* <option value>&nbsp;</option> */}
                                                                <option selected disabled value={0}>Select categories</option>
                                                                <option value={1}>Full House</option>
                                                                <option value={2}>Flatmates</option>
                                                                <option value={3}>Paying Guest</option>


                                                            </select>
                                                        </div>}
                                                        {tab === 3 && <div className="input-with-icon">
                                                            <select name='proptype' onChange={handleForm} id="ptypes" className="form-control">
                                                                {/* <option value>&nbsp;</option> */}
                                                                <option selected disabled value={0}>Select categories</option>

                                                                <option value={1}>Commercial Buy</option>
                                                                <option value={2}>Commercial Rent</option>


                                                            </select>
                                                        </div>}


                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-3 col-sm-12 small-padd" onClick={handleClick}>
                                                    <div className="form-group none">
                                                        <a href="" className="btn search-btn">Search Property</a>
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
    )
}

export default HeroBanner