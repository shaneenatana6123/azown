import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import HomeNav from '../Header/HomeNav'
import TestimonialClient from './Testimonial_Client/TestimonialClient'
import TestimonialUsers from './Testimonial_Client/TestimonialUsers'
import { Autocomplete } from '@react-google-maps/api'
import HeroBanner from './HeroBanner'
import TopRrent from './Testimonial_Client/TopRrent'
import Footer from '../Footer/Footer'


const Home = () => {
	return (
		<div >


			<div id="main-wrapper" >
				<HomeNav />

				{/* End Navigation */}
				<div className="clearfix" />

				<HeroBanner />


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

				<TestimonialUsers />
				<TopRrent/>			
			<Footer/>
			
			</div>

		</div>
	)
}

export default Home