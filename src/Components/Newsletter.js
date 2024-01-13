import React from "react";

function Newsletter() {
    return (
        <>
            <section id="newsletter" class="newsletter">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <h3 className="text-white" style={{opacity: 0}}>GET OUR NEWSLETTER</h3>
                            <p className="text-white">Enter your email address and receive our exciting news</p>
                        </div>
                        <div class="col-12 col-md-5">
                            <div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon2">subscribe</span>
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
export default Newsletter;