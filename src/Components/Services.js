import React from "react";
import ServicesImage from "../Components/images/Services.jpg";

function Services() {
    return (
        <>
            <section className="mt-5 ">
                <div class="container">
                    <div class="row">
                        <div class="row justify-content-md-center">
                            <div class="new-cars-item">
                                <div class="">

                                    <div class="row">

                                        <div class="col-12 col-md-7 mt-5">
                                            <h1 className="servicesHeader mb-3">Our Services</h1>
                                            <p className="aboutus">
                                            At Fordonsbolaget you will find a wide range of both <span style={{color:" #323232"}}>new Hondas</span> and other <span style={{color:" #323232"}}>used cars</span> from several different car brands. In our car showroom, located just north of Stockholm, you have the opportunity to come and test drive the car you want. For those of you who do not have the opportunity to visit us, we also offer the opportunity to <span style={{color:" #323232"}}>buy the car online</span> using <span style={{color:" #323232"}}>the Distance Package</span> .                                                </p>
                                            <p className="aboutus mt-4">
                                            Are you thinking about <span style={{color:" #323232"}}>selling your car</span> ? We are happy to buy your car and also offer the opportunity to use your existing car as a trade-in when you buy your next car from us.
                                            </p>
                                            <p className="aboutus mt-4">
                                            We also have a <span style={{color:" #323232"}}>car workshop</span> that performs car service and repairs on all models and brands. In addition, we offer damage management, such as repainting and window replacement. We manage all contact with your insurance company, everything to ensure that your experience with us is as good as possible.                                            </p>
                                           
                                            <div class="container mt-3">
                                                <div class="row">
                                                    <div class="col-sm">
                                                        <div class="d-flex flex-column">
                                                            <div class="p-1 aboutUsUsefullink">
                                                                <h5>Buy a car</h5>
                                                                    <p>Time to buy a car? We sell used and new cars.</p>

                                                                    <p>Click here to buy a car</p>
                                                                
                                                                </div>
                                                            <div class="p-1 aboutUsUsefullink"><i className="fas fa-angle-right"></i>&nbsp; Buy a car online</div>
                                            
                                                        </div>
                                                    </div>
                                                    <div class="col-sm">
                                                        <div class="d-flex flex-column">
                                                        <div class="p-1 aboutUsUsefullink"><i className="fas fa-angle-right"></i>&nbsp; Our coworkers</div>
                                                        <div class="p-1 aboutUsUsefullink"><i className="fas fa-angle-right"></i>&nbsp; Sell ​​car</div>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-12 col-md-5">

                                            <img src={ServicesImage}/>

                                       
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
export default Services;