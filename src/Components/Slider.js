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


                                    <div class="col-md-offset-1 col-md-2 col-sm-8">

                                        <div class="single-model-search">
                                            <h2>Vehicle type</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">year</option>
                                                    <option value="2018">2018</option>
                                                    <option value="2017">2017</option>
                                                    <option value="2016">2016</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="single-model-search">
                                            <h2>body style</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">style</option>

                                                    <option value="sedan">sedan</option>

                                                    <option value="van">van</option>
                                                    <option value="roadster">roadster</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-offset-1 col-md-2 col-sm-12">
                                        <div class="single-model-search">
                                            <h2>select make</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">make</option>

                                                    <option value="toyota">toyota</option>

                                                    <option value="holden">holden</option>
                                                    <option value="maecedes-benz">maecedes-benz.</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="single-model-search">
                                            <h2>car condition</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">condition</option>

                                                    <option value="something">something</option>

                                                    <option value="something">something</option>
                                                    <option value="something">something</option>

                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-offset-1 col-md-2 col-sm-12">
                                        <div class="single-model-search">
                                            <h2>select model</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">model</option>

                                                    <option value="kia-rio">kia-rio</option>

                                                    <option value="mitsubishi">mitsubishi</option>
                                                    <option value="ford">ford</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="single-model-search">
                                            <h2>select price</h2>
                                            <div class="model-select-icon">
                                                <select class="form-control">

                                                    <option value="default">price</option>

                                                    <option value="$0.00">$0.00</option>

                                                    <option value="$0.00">$0.00</option>
                                                    <option value="$0.00">$0.00</option>

                                                </select>
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
export default Slider