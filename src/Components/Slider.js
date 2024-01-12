import React from "react";
import './Asset/css/style.css'

function Slider() {
    return (
        <>
            <section id="home" class="welcome-hero">



                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2 className="mb-3">Buy your car today! </h2>
                        <button type="button" class="btn btn-success btn-lg active">See All Cars In Stocks</button>
                    </div>
                </div>


                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="model-search-content">

                                <div class="row">
                                    <div class="container">
                                        <p>Tip: You can search by brand, model, engine and equipment</p>
                                        <div class="form mb-5 mt-3">
                                            <i class="fa fa-search"></i>
                                            <input type="text" class="form-control form-input" placeholder="Search anything..." />
                                        </div>
                                    </div>

                                    <div class="container">
                                        <div class="row">

                                            <div class="col">
                                                <div class="single-model-search">
                                                    <h2> Vehicle type</h2>
                                                    <div class="model-select-icon">
                                                        <select class="form-control">
                                                            <option value="default">Vehicle type</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col">
                                                <div class="single-model-search">
                                                    <h2>Make</h2>
                                                    <div class="model-select-icon">
                                                        <select class="form-control">

                                                            <option value="default">Make</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="single-model-search">
                                                    <h2>Model</h2>
                                                    <div class="model-select-icon">
                                                        <select class="form-control">

                                                            <option value="default">Model</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="single-model-search">
                                                    <h2>New and used</h2>
                                                    <div class="model-select-icon">
                                                        <select class="form-control">

                                                            <option value="default">New and used</option>
                                                            <option value="2018">2018</option>
                                                            <option value="2017">2017</option>
                                                            <option value="2016">2016</option>

                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    
                                    <div className="col searchButton mt-5"><button type="button" class="btn btn-outline-success">Search</button></div>   

</div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Slider