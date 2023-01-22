import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../Header/HomeNav'
import TestimonialClient from './Testimonial_Client/TestimonialClient'
import TestimonialUsers from './Testimonial_Client/TestimonialUsers'


const Home = () => {

	return (
		<div >


			<div id="main-wrapper" >
				<HomeNav />

				{/* End Navigation */}
				<div className="clearfix" />

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
										<li className="nav-item">
											<a className="nav-link active" id="buy-tab" data-toggle="tab" href="#buy" role="tab" aria-controls="buy" aria-selected="true">Residential</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" id="sell-tab" data-toggle="tab" href="#sell" role="tab" aria-controls="sell" aria-selected="false">Commercial</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" id="rent-tab" data-toggle="tab" href="#rent" role="tab" aria-controls="rent" aria-selected="false">Land/Plot</a>
										</li>
									</ul>
									<div className="tab-content" id="myTabContent">

										<div className="tab-pane fade show active" id="buy" role="tabpanel" aria-labelledby="buy-tab">
											<div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
												<div className="search_hero_wrapping">
													<div className="row">

														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>City/Street</label>
																<div className="input-with-icon">
																	<select id="location" className="form-control">
																		{/* <option value>&nbsp;</option> */}
																		<option value="Pune">Pune</option>
																		<option value={1}>New York City</option>
																		<option value={2}>Honolulu, Hawaii</option>
																		<option value={3}>California</option>
																		<option value={4}>New Orleans</option>
																		<option value={5}>Washington</option>
																		<option value={6}>Charleston</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-3 col-sm-12 col-md-3">
															<div className="form-group">
																<label>Area</label>
																<input type="text" className="form-control search_input b-0" placeholder="ex. Neighborhood" />
															</div>
														</div>
														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>Property Type</label>
																<div className="input-with-icon">
																	<select id="ptypes" className="form-control">
																		{/* <option value>&nbsp;</option> */}
																		<option value={1}>All categories</option>
																		<option value="Rent">Rent</option>
																		<option value="Sale">Sale</option>
																		<option value="Rent">Rent</option>
																		<option value="Rent">Rent</option>
																		{/* <option value={2}>Apartment</option>
							<option value={3}>Villas</option>
							<option value={4}>Commercial</option>
							<option value={5}>Offices</option>
							<option value={6}>Garage</option> */}
																	</select>
																</div>
															</div>
														</div>

														<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
															<div className="form-group none">
																<a href="#" className="btn search-btn">Search Property</a>
															</div>
														</div>
													</div>

												</div>
											</div>
										</div>
										{/* Tab for Sell */}
										<div className="tab-pane fade" id="sell" role="tabpanel" aria-labelledby="sell-tab">
											<div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
												<div className="search_hero_wrapping">
													<div className="row">

														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>City/Street</label>
																<div className="input-with-icon">
																	<select id="location" className="form-control">
																		<option value>&nbsp;</option>
																		<option value={1}>New York City</option>
																		<option value={2}>Honolulu, Hawaii</option>
																		<option value={3}>California</option>
																		<option value={4}>New Orleans</option>
																		<option value={5}>Washington</option>
																		<option value={6}>Charleston</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-3 col-sm-12 col-md-3">
															<div className="form-group">
																<label>Area</label>
																<input type="text" className="form-control search_input b-0" placeholder="ex. Neighborhood" />
															</div>
														</div>
														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>Property Type</label>
																<div className="input-with-icon">
																	<select id="ptypes" className="form-control">
																		<option value>&nbsp;</option>
																		<option value={1}>All categories</option>
																		<option value={2}>Apartment</option>
																		<option value={3}>Villas</option>
																		<option value={4}>Commercial</option>
																		<option value={5}>Offices</option>
																		<option value={6}>Garage</option>
																	</select>
																</div>
															</div>
														</div>

														<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
															<div className="form-group none">
																<a href="#" className="btn search-btn">Search Property</a>
															</div>
														</div>
													</div>
													{/* Collapse Advance Search Form */}

												</div>
											</div>
										</div>
										{/* Tab for Rent */}
										<div className="tab-pane fade" id="rent" role="tabpanel" aria-labelledby="rent-tab">
											<div className="full_search_box nexio_search lightanic_search hero_search-radius modern">
												<div className="search_hero_wrapping">
													<div className="row">

														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>City/Street</label>
																<div className="input-with-icon">
																	<select id="location" className="form-control">
																		<option value>&nbsp;</option>
																		<option value={1}>New York City</option>
																		<option value={2}>Honolulu, Hawaii</option>
																		<option value={3}>California</option>
																		<option value={4}>New Orleans</option>
																		<option value={5}>Washington</option>
																		<option value={6}>Charleston</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-3 col-sm-12 col-md-3">
															<div className="form-group">
																<label>Area</label>
																<input type="text" className="form-control search_input b-0" placeholder="ex. Neighborhood" />
															</div>
														</div>
														<div className="col-lg-3 col-md-3 col-sm-12">
															<div className="form-group">
																<label>Property Type</label>
																<div className="input-with-icon">
																	<select id="ptypes" className="form-control">
																		<option value>&nbsp;</option>
																		<option value={1}>All categories</option>
																		<option value={2}>Apartment</option>
																		<option value={3}>Villas</option>
																		<option value={4}>Commercial</option>
																		<option value={5}>Offices</option>
																		<option value={6}>Garage</option>
																	</select>
																</div>
															</div>
														</div>

														<div className="col-lg-3 col-md-3 col-sm-12 small-padd">
															<div className="form-group none">
																<a href="#" className="btn search-btn">Search Property</a>
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

				{/* ============================ Hero Banner End ================================== */}
				{/* ============================ Our Awards Start ================================== */}
				{/* <section className="p-0">
		<div className="container">
		  <div className="row justify-content-center">
			<div className="col-xl-11 col-lg-11 col-md-12">
			  <div className="_awards_group">	
				<ul className="_awards_lists">
				
				  <li>
					<div className="_awards_list_wrap">
					  <div className="_awards_list_thumb"><img src="assets/img/award-1.png" className="img-fluid" alt /></div>
					  <div className="_awards_list_caption">
						<h5 className="theme-cl">2021</h5>
						<span>Annual Awards</span>
					  </div>
					</div>
				  </li>
				 
				  <li>
					<div className="_awards_list_wrap">
					  <div className="_awards_list_thumb"><img src="assets/img/award-5.png" className="img-fluid" alt /></div>
					  <div className="_awards_list_caption">
						<h5 className="theme-cl-2">2018</h5>
						<span>Filka Vivo Award</span>
					  </div>
					</div>
				  </li>
				
				  <li>
					<div className="_awards_list_wrap">
					  <div className="_awards_list_thumb"><img src="assets/img/award-2.png" className="img-fluid" alt /></div>
					  <div className="_awards_list_caption">
						<h5 className="text-warning">2017</h5>
						<span>IITCA Green Award</span>
					  </div>
					</div>
				  </li>
				</ul>
			  </div>
			</div>
		  </div>
		</div>
	  </section> */}
				{/* ============================ Our Awards End ================================== */}
				{/* ============================ Property Category Start ================================== */}
				<section className="min">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 col-md-8">
								<div className="sec-heading center">
									<h2>Our Services</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
								</div>
							</div>
						</div>
						<div className="row justify-content-center mt-4">

							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-7.png" className="img-fluid hover" alt />
												<img src="assets/img/f-77.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Office &amp; Studio</h5>
												{/* <span>72 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-2.png" className="img-fluid hover" alt />
												<img src="assets/img/f-22.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Industrial</h5>
												{/* <span>22 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-3.png" className="img-fluid hover" alt />
												<img src="assets/img/f-33.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Buildings</h5>
												{/* <span>85 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-4.png" className="img-fluid hover" alt />
												<img src="assets/img/f-44.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Commercial</h5>
												{/* <span>79 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-5.png" className="img-fluid hover" alt />
												<img src="assets/img/f-55.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Home &amp; Villas</h5>
												{/* <span>22 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							<div className="col-lg-2 col-md-4 col-sm-6">
								<div className="_category_box">
									<a href="list-layout-with-sidebar.html">
										<div className="_category_elio">
											<div className="_category_thumb">
												<img src="assets/img/f-6.png" className="img-fluid hover" alt />
												<img src="assets/img/f-66.png" className="img-fluid simple" alt />
											</div>
											<div className="_category_caption">
												<h5>Garages</h5>
												{/* <span>22 Properties</span> */}
											</div>
										</div>
									</a>
								</div>
							</div>
							{/* Single Category */}
							{/* <div className="col-lg-2 col-md-4 col-sm-6">
			  <div className="_category_box">
				<a href="list-layout-with-sidebar.html">
				  <div className="_category_elio">
					<div className="_category_thumb">
					  <img src="assets/img/f-7.png" className="img-fluid hover" alt />
					  <img src="assets/img/f-77.png" className="img-fluid simple" alt />
					</div>
					<div className="_category_caption">
					  <h5>Office &amp; Studio</h5>
					 
					</div>
				  </div>
				</a>
			  </div>
			</div> */}
							{/* Single Category */}
							{/* <div className="col-lg-2 col-md-4 col-sm-6">
			  <div className="_category_box">
				<a href="list-layout-with-sidebar.html">
				  <div className="_category_elio">
					<div className="_category_thumb">
					  <img src="assets/img/f-8.png" className="img-fluid hover" alt />
					  <img src="assets/img/f-88.png" className="img-fluid simple" alt />
					</div>
					<div className="_category_caption">
					  <h5>Apartment</h5>
					 
					</div>
				  </div>
				</a>
			  </div>
			</div> */}

						</div>
						<div class="row">
							<div class="col-lg-12 col-md-12 col-sm-12 text-center">
								<a href="list-layout-with-map.html" class="btn btn-theme-light-2 rounded">Explore More Services</a>
							</div>
						</div>
					</div>
				</section>
				{/* ============================ Property Category End ================================== */}
				{/* ============================ Properties Start ================================== */}
				<section className="pt-0 min">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 col-md-8">
								<div className="sec-heading center">
									<h2>Featured Listed Property</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							{/* Single Property */}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="property-listing property-2">
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
									<div className="listing-detail-wrapper">
										<div className="listing-short-detail-wrap">
											<div className="_card_list_flex mb-2">
												<div className="_card_flex_01">
													<span className="_list_blickes _netork">4 Network</span>
													<span className="_list_blickes types">Condos</span>
												</div>
												<div className="_card_flex_last">
													<h6 className="listing-card-info-price mb-0">$6,700</h6>
												</div>
											</div>
											<div className="_card_list_flex">
												<div className="_card_flex_01">
													<h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">7012 Shine Sehu Street, Liverpool London, LC345AC</a></h4>
												</div>
											</div>
										</div>
									</div>
									<div className="price-features-wrapper">
										<div className="list-fx-features">
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>4 Beds
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>2 Bath
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>820 sqft
											</div>
										</div>
									</div>
									<div className="listing-detail-footer">
										<div className="footer-first">
											<div className="foot-location"><img src="assets/img/pin.svg" width={18} alt />Montreal, Canada</div>
										</div>
										<div className="footer-flex">
											<ul className="selio_style">
												<li>
													<div className="prt_saveed_12lk">
														<label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart" /></label>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle" /></a>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right" /></a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* End Single Property */}
							{/* Single Property */}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="property-listing property-2">
									<div className="listing-img-wrapper">
										<div className="_exlio_125">For Sale</div>
										<div className="list-img-slide">
											<div className="click">
												<div><a href="single-property-1.html"><img src="assets/img/p-4.png" className="img-fluid mx-auto" alt /></a></div>
												<div><a href="single-property-1.html"><img src="assets/img/p-5.png" className="img-fluid mx-auto" alt /></a></div>
												<div><a href="single-property-1.html"><img src="assets/img/p-6.png" className="img-fluid mx-auto" alt /></a></div>
											</div>
										</div>
									</div>
									<div className="listing-detail-wrapper">
										<div className="listing-short-detail-wrap">
											<div className="_card_list_flex mb-2">
												<div className="_card_flex_01">
													<span className="_list_blickes _netork">5 Network</span>
													<span className="_list_blickes types">Apartment</span>
												</div>
												<div className="_card_flex_last">
													<h6 className="listing-card-info-price mb-0">$6,900</h6>
												</div>
											</div>
											<div className="_card_list_flex">
												<div className="_card_flex_01">
													<h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">425 Vine 012 Street, Montreal Canada, UHW45Q</a></h4>
												</div>
											</div>
										</div>
									</div>
									<div className="price-features-wrapper">
										<div className="list-fx-features">
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>4 Beds
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>2 Bath
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>700 sqft
											</div>
										</div>
									</div>
									<div className="listing-detail-footer">
										<div className="footer-first">
											<div className="foot-location"><img src="assets/img/pin.svg" width={18} alt />Montreal, Canada</div>
										</div>
										<div className="footer-flex">
											<ul className="selio_style">
												<li>
													<div className="prt_saveed_12lk">
														<label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart" /></label>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle" /></a>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right" /></a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* End Single Property */}
							{/* Single Property */}
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="property-listing property-2">
									<div className="listing-img-wrapper">
										<div className="_exlio_125">For Rent</div>
										<div className="list-img-slide">
											<div className="click">
												<div><a href="single-property-1.html"><img src="assets/img/p-7.png" className="img-fluid mx-auto" alt /></a></div>
												<div><a href="single-property-1.html"><img src="assets/img/p-8.png" className="img-fluid mx-auto" alt /></a></div>
												<div><a href="single-property-1.html"><img src="assets/img/p-9.png" className="img-fluid mx-auto" alt /></a></div>
											</div>
										</div>
									</div>
									<div className="listing-detail-wrapper">
										<div className="listing-short-detail-wrap">
											<div className="_card_list_flex mb-2">
												<div className="_card_flex_01">
													<span className="_list_blickes _netork">4 Network</span>
													<span className="_list_blickes types">Villas</span>
												</div>
												<div className="_card_flex_last">
													<h6 className="listing-card-info-price mb-0">$8,500</h6>
												</div>
											</div>
											<div className="_card_list_flex">
												<div className="_card_flex_01">
													<h4 className="listing-name verified"><a href="single-property-1.html" className="prt-link-detail">1244 Vansh Market, Mise Mizkel Australia, AU456HA</a></h4>
												</div>
											</div>
										</div>
									</div>
									<div className="price-features-wrapper">
										<div className="list-fx-features">
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bed.svg" width={13} alt /></div>3 Beds
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/bathtub.svg" width={13} alt /></div>2 Bath
											</div>
											<div className="listing-card-info-icon">
												<div className="inc-fleat-icon"><img src="assets/img/move.svg" width={13} alt /></div>800 sqft
											</div>
										</div>
									</div>
									<div className="listing-detail-footer">
										<div className="footer-first">
											<div className="foot-location"><img src="assets/img/pin.svg" width={18} alt />Montreal, Canada</div>
										</div>
										<div className="footer-flex">
											<ul className="selio_style">
												<li>
													<div className="prt_saveed_12lk">
														<label className="toggler toggler-danger" data-toggle="tooltip" data-placement="top" data-original-title="Save property"><input type="checkbox" /><i className="ti-heart" /></label>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="compare-property.html" data-toggle="tooltip" data-placement="top" data-original-title="Compare property"><i className="ti-control-shuffle" /></a>
													</div>
												</li>
												<li>
													<div className="prt_saveed_12lk">
														<a href="single-property-1.html" data-toggle="tooltip" data-placement="top" data-original-title="View Property"><i className="ti-arrow-right" /></a>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* End Single Property */}
						</div>
					</div>
				</section>
				{/* ============================ Properties End ================================== */}
				{/* ============================ Top Agents ================================== */}
				<TestimonialUsers/>
				{/* ============================ Top Agents End ================================== */}
				{/* ============================ Property By Location ================================== */}
				<section className="min">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 col-md-8">
								<div className="sec-heading center">
									<h2>Top Property Places</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-lg-4 col-md-4 col-sm-6">
								<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Pune, INDIA</h4>
											<span>48 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right" /></div>
									</div>
									<div className="img-wrap-background" style={{ backgroundImage: 'url(assets/img/city-6.png)' }} />
								</a>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Mumbai, INDIA</h4>
											<span>73 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right" /></div>
									</div>
									<div className="img-wrap-background" style={{ backgroundImage: 'url(assets/img/city-7.png)' }} />
								</a>
							</div>
							<div className="col-lg-4 col-md-4 col-sm-6">
								<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Banglore, INDIA</h4>
											<span>40 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right" /></div>
									</div>
									<div className="img-wrap-background" style={{ backgroundImage: 'url(assets/img/city-3.png)' }} />
								</a>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Delhi, INDIA</h4>
											<span>35 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right" /></div>
									</div>
									<div className="img-wrap-background" style={{ backgroundImage: 'url(assets/img/city-4.png)' }} />
								</a>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6">
								<a href="grid-layout-with-sidebar.html" className="img-wrap">
									<div className="location_wrap_content visible">
										<div className="location_wrap_content_first">
											<h4>Noida, INDIA</h4>
											<span>10 Properties</span>
										</div>
										<div className="location_btn"><i className="fa fa-arrow-right" /></div>
									</div>
									<div className="img-wrap-background" style={{ backgroundImage: 'url(assets/img/city-5.png)' }} />
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* ============================ Property By Location End ================================== */}
				{/* ============================ Smart Testimonials ================================== */}
				{/* <TestimonialClient/> */}
				{/* ============================ Smart Testimonials End ================================== */}
				{/* ============================ article Start ================================== */}
				<section className="min">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-lg-7 col-md-8">
								<div className="sec-heading center">
									<h2>Latest News &amp; Articles</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							{/* Single blog Grid */}
							<div className="col-lg-4 col-md-6">
								<div className="grid_blog_box">
									<div className="gtid_blog_thumb">
										<a href="blog-detail.html"><img src="assets/img/b-1.jpg" className="img-fluid" alt /></a>
										<div className="gtid_blog_info"><span>12</span>Sep 2021</div>
									</div>
									<div className="blog-body">
										<h4 className="bl-title"><a href="blog-detail.html">Creative Designs</a><span className="latest_new_post">New</span></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
									</div>
									<div className="modern_property_footer">
										<div className="property-author">
											<div className="path-img"><a href="agent-page.html" tabIndex={-1}><img src="assets/img/user-1.jpg" className="img-fluid" alt /></a></div>
											<h5><a href="agent-page.html" tabIndex={-1}>Shaurya Preet</a></h5>
										</div>
										<span className="article-pulish-date"><i className="ti-comment-alt mr-2" />202</span>
									</div>
								</div>
							</div>
							{/* Single blog Grid */}
							<div className="col-lg-4 col-md-6">
								<div className="grid_blog_box">
									<div className="gtid_blog_thumb">
										<a href="blog-detail.html"><img src="assets/img/b-5.jpg" className="img-fluid" alt /></a>
										<div className="gtid_blog_info"><span>15</span>Aug 2021</div>
									</div>
									<div className="blog-body">
										<h4 className="bl-title"><a href="blog-detail.html">UX/UI Developer</a><span className="latest_new_post hot">Hot</span></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
									</div>
									<div className="modern_property_footer">
										<div className="property-author">
											<div className="path-img"><a href="agent-page.html" tabIndex={-1}><img src="assets/img/user-2.jpg" className="img-fluid" alt /></a></div>
											<h5><a href="agent-page.html" tabIndex={-1}>Nirgam Singh</a></h5>
										</div>
										<span className="article-pulish-date"><i className="ti-comment-alt mr-2" />407</span>
									</div>
								</div>
							</div>
							{/* Single blog Grid */}
							<div className="col-lg-4 col-md-6">
								<div className="grid_blog_box">
									<div className="gtid_blog_thumb">
										<a href="blog-detail.html"><img src="assets/img/b-6.jpg" className="img-fluid" alt /></a>
										<div className="gtid_blog_info"><span>27</span>Nov 2021</div>
									</div>
									<div className="blog-body">
										<h4 className="bl-title"><a href="blog-detail.html">WordPress Developer &amp; UI</a><span className="latest_new_post">New</span></h4>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. </p>
									</div>
									<div className="modern_property_footer">
										<div className="property-author">
											<div className="path-img"><a href="agent-page.html" tabIndex={-1}><img src="assets/img/user-3.jpg" className="img-fluid" alt /></a></div>
											<h5><a href="agent-page.html" tabIndex={-1}>Dhananjay Singh</a></h5>
										</div>
										<span className="article-pulish-date"><i className="ti-comment-alt mr-2" />410</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="clearfix" />
				{/* ============================ article End ================================== */}
				{/* ============================ Call To Action ================================== */}
				<section className="theme-bg call_action_wrap-wrap">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="call_action_wrap">
									<div className="call_action_wrap-head">
										<h3>Do You Have Questions ?</h3>
										<span>We'll help you to grow your career and growth.</span>
									</div>
									<a href="#" className="btn btn-call_action_wrap">Contact Us Today</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				{/* ============================ Call To Action End ================================== */}
				{/* ============================ Footer Start ================================== */}
				<footer className="dark-footer skin-dark-footer style-2">
					<div className="footer-middle">
						<div className="container">
							<div className="row">
								<div className="col-lg-5 col-md-5">
									<div className="footer_widget">
										<img src="assets/img/logo-light.png" className="img-footer small mb-2" alt />
										<h4 className="extream mb-3">Do you need help with<br />anything?</h4>
										<p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
										<div className="foot-news-last">
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Email Address" />
												<div className="input-group-append">
													<button type="button" className="input-group-text theme-bg b-0 text-light">Subscribe</button>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-7 ml-auto">
									<div className="row">
										<div className="col-lg-4 col-md-4">
											<div className="footer_widget">
												<h4 className="widget_title">Layouts</h4>
												<ul className="footer-menu">
													<li><a href="#">Home Page</a></li>
													<li><a href="#">About Page</a></li>
													<li><a href="#">Service Page</a></li>
													<li><a href="#">Property Page</a></li>
													<li><a href="#">Contact Page</a></li>
													<li><a href="#">Single Blog</a></li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4">
											<div className="footer_widget">
												<h4 className="widget_title">All Sections</h4>
												<ul className="footer-menu">
													<li><a href="#">Headers<span className="new">New</span></a></li>
													<li><a href="#">Features</a></li>
													<li><a href="#">Attractive<span className="new">New</span></a></li>
													<li><a href="#">Testimonials</a></li>
													<li><a href="#">Videos</a></li>
													<li><a href="#">Footers</a></li>
												</ul>
											</div>
										</div>
										<div className="col-lg-4 col-md-4">
											<div className="footer_widget">
												<h4 className="widget_title">Company</h4>
												<ul className="footer-menu">
													<li><a href="#">About</a></li>
													<li><a href="#">Blog</a></li>
													<li><a href="#">Pricing</a></li>
													<li><a href="#">Affiliate</a></li>
													<li><a href="#">Login</a></li>
													<li><a href="#">Changelog<span className="update">Update</span></a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-12 col-md-12 text-center">
									<p className="mb-0">© 2021 RentUP. Designd By <a href="https://themezhub.com/">ThemezHub</a>.</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
				{/* ============================ Footer End ================================== */}
				{/* Log In Modal */}

				{/* End Modal */}
				{/* Send Message */}
				<div className="modal fade" id="autho-message" tabIndex={-1} role="dialog" aria-labelledby="authomessage" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered login-pop-form" role="document">
						<div className="modal-content" id="authomessage">
							<span className="mod-close" data-dismiss="modal" aria-hidden="true"><i className="ti-close" /></span>
							<div className="modal-body">
								<h4 className="modal-header-title">Drop Message</h4>
								<div className="login-form">
									<form>
										<div className="form-group">
											<label>Subject</label>
											<div className="input-with-icons">
												<input type="text" className="form-control" placeholder="Message Title" />
											</div>
										</div>
										<div className="form-group">
											<label>Messages</label>
											<div className="input-with-icons">
												<textarea className="form-control ht-80" defaultValue={""} />
											</div>
										</div>
										<div className="form-group">
											<button type="submit" className="btn btn-md full-width pop-login">Send Message</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* End Modal */}
				<a id="back2Top" className="top-scroll" title="Back to top" href="#"><i className="ti-arrow-up" /></a>
			</div>

		</div>
	)
}

export default Home