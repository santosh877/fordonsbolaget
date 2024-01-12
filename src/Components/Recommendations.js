import React from "react";
import cardBrands from '../Components/images/carBrand.jpeg';
import carLogo from '../Components/images/carLogo.jpg';
import driver from "../Components/images/woman-driving.jpg";
import hand from "../Components/images/woman-hands-steering.jpg";
import cart from "../Components/images/cart.png"

function Recommendations() {
	return (
		<>
			<section id="new-cars" className="new-cars mt-5">
				<div class="container">
					<div class="section-header mt-5">
						<p> <em>What do our customers think?</em></p>
						<h1 className="display-5 mb-3">Recommendations</h1>
						<p >Through Reco, you can read about other people's experiences with us before your purchase.</p>
					</div>

					<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
						<div class="carousel-indicators">
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
							<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
						</div>
						<div class="carousel-inner mt-5">
							<div class="carousel-item active">
								<p class="d-block"><i class="ml-4 fas fa-quote-left"></i>&nbsp;&nbsp;
									<span ><font className="fst-italic fs-5">Very professional and smooth car shop. Sharo as a car dealer was a very nice and honest man! Can be highly recommended!!!</font></span>
									&nbsp;&nbsp;<i class="mr-4 fas fa-quote-right"></i></p>
							</div>
							<div class="carousel-item">
								<p class="d-block"><i class="ml-4 fas fa-quote-left"></i>&nbsp;&nbsp;
									<span ><font className="fst-italic fs-5">Oscar Eisele gave me a fantastic experience at Fordonsbolaget! Professional and personal service that made the entire car purchase smooth and safe.Many thanks for a car in top condition and an extraordinary buying experience. Highly recommend!</font></span>
									&nbsp;&nbsp;<i class="mr-4 fas fa-quote-right"></i></p>
							</div>
							<div class="carousel-item">
								<p class="d-block"><i class="ml-4 fas fa-quote-left"></i>&nbsp;&nbsp;
									<span ><font className="fst-italic fs-5">Pleasant reception, helpful and accommodating in the sales process. Gave reasonable expectations for delivery, made sure the car was in good condition on handover.</font></span>
									&nbsp;&nbsp;<i class="mr-4 fas fa-quote-right"></i></p>
							</div>
							<div class="carousel-item">
								<p class="d-block"><i class="ml-4 fas fa-quote-left"></i>&nbsp;&nbsp;
									<span ><font className="fst-italic fs-5">Hello! Oscar had a professional attitude and was knowledgeable in his job. Had very good contact with him from the very beginning via phone &amp; text and he was clear and honest. Recommends both the car company and him as a seller. Satisfied customer/ Jeanette</font></span>
									&nbsp;&nbsp;<i class="mr-4 fas fa-quote-right"></i></p>
							</div>
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>
				</div>
			</section>

			<section className="mt-5">
				<div class="container">
					<div class="row">
						<h1 className="display-6 text-dark mb-5">Buy your car online with us at Fordonsbolaget</h1>
						<div class="row justify-content-md-center">

							<div class="new-cars-item">
								<div class="single-new-cars-item">


									<div class="row">
									<div class="col-md-6 col-sm-12">
											<div class="new-cars-img">
												<img src={cardBrands} alt="img" style={{ width: "100%", height: "30%" }} />
											</div>
										</div>
										<div class="col-md-6 col-sm-12">

											<div class="new-cars-txt">
												<img src={carLogo} style={{ width: "10%", height: "30%" }} />
												<h2><a href="#">Our car brands</a></h2>
												<p>Below you can see some of the car brands we sell.</p>
												<div class="container mt-3">
													<div class="row">
														<div class="col-sm">
															<div class="d-flex flex-column">
																<div class="p-1 text-success">Audi</div>
																<div class="p-1 text-success">Ferrari</div>
																<div class="p-1 text-success">The Mclaren</div>
																<div class="p-1 text-success">Range Rover</div>
															</div>
														</div>
														<div class="col-sm">
															<div class="d-flex flex-column">
																<div class="p-1 text-success">BMW</div>
																<div class="p-1 text-success">Jaguar</div>
																<div class="p-1 text-success">Mercedes</div>
																<div class="p-1 text-success">Tesla</div>
															</div>
														</div>
														<div class="col-sm">
															<div class="d-flex flex-column">
																<div class="p-1 text-success">Dodge</div>
																<div class="p-1 text-success">Lamborghini</div>
																<div class="p-1 text-success">Porsche</div>
															</div>
														</div>
													</div>
												</div>
													</div>
										</div>
										
									</div>

									<div class="row">
									
										
										<div class="col-md-6 col-sm-12">
											<div class="new-cars-txt mt-2">
												<img src={cart} style={{ width: "10%", height: "30%" }} />
												<h2><a href="#">Buy your car online with open purchase</a></h2>
												<p>We don't think you should have to miss your upcoming car purchase, just because you don't have the opportunity to visit us here in Stockholm for various reasons. That's why we now offer the Distance package, which means you can buy a car online directly from our garage. With our smart payment solution, you can sign your agreement within minutes via your phone, and have the car delivered to your business or home address within 3 working days.</p>
											</div>
										</div>
										<div class="col-md-6 col-sm-12">
											<div class="new-cars-img">
												<img src={driver} alt="img" style={{ width: "100%", height: "30%" }} />
											</div>
										</div>
										
									</div>

									<div class="row">
									<div class="col-md-6 col-sm-12">
											<div class="new-cars-img">
												<img src={hand} alt="img" style={{ width: "100%", height: "30%" }} />
											</div>
										</div>
										
										<div class="col-md-6 col-sm-12">
											<div class="new-cars-txt mt-2">
												<img src={cart} style={{ width: "10%", height: "30%" }} />
												<h2><a href="#">Sell ​​your car online today</a></h2>
												<p>
												Are you thinking about buying a new car and don't know what to do with the current car? Many choose to advertise it via social media, Blocket or the newspaper, but this can often be a time-consuming and slow process.

Don't worry, we at Fordonsbolaget are happy to buy your car!													</p>
											</div>
										</div>
										
										
									</div>





								</div>
							</div>
						</div>

					</div>
				</div>

			</section>
		</>
	)
}
export default Recommendations