import React, { Fragment } from 'react'

function Pricing() {

    return (
        <Fragment>
            <div className="container-fluid mb-5">
                <div className="row mt-5 mb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 text-center">
                        <h2>Plans Pricing</h2>
                        <p className="pricing">
                            Simple and flexible pricing to assure you only pay for
                            what you need and always know the billed amount.
                            Credit card payments are handled by Stripe and enterprise invoicing is available.
                        </p>
                    </div>
                </div>
                <div className="row resp">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="card text-center hover">
                            <div className="card-header">
                                <h2>Free</h2>
                            </div>
                            <div className="card-body text-left">
                                <div>
                                    <span className="font1">$0</span><span className="font2">/Month</span>
                                </div>
                                <ol>
                                    <li>50 request per day</li>
                                    <li>All weather parameters</li>
                                    <li className="text-muted text-light">Can be used for commercial apps</li>
                                </ol>
                            </div>
                            <div className="card-footer">
                                <button className="btn bg-orange">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="card text-center hover">
                            <div className="card-header">
                                <h2>Medium</h2>
                            </div>
                            <div className="card-body text-left">
                                <div>
                                    <span className="font1">$48</span><span className="font2">/Month</span>
                                </div>
                                <ol>
                                    <li>1000 request per day</li>
                                    <li>All weather parameters</li>
                                    <li>10% discount if billed annually</li>
                                </ol>
                            </div>
                            <div className="card-footer">
                                <button className="btn bg-orange">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="card text-center hover">
                            <div className="card-header">
                                <h2>Large</h2>
                            </div>
                            <div className="card-body text-left">
                                <div>
                                    <span className="font1">$120</span><span className="font2">/Month</span>
                                </div>
                                <ol>
                                    <li>5000 request per day</li>
                                    <li>All weather parameters</li>
                                    <li>10% discount if billed annually</li>
                                </ol>
                            </div>
                            <div className="card-footer">
                                <button className="btn bg-orange">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                        <div className="card text-center hover">
                            <div className="card-header">
                                <h2>Extra Large</h2>
                            </div>
                            <div className="card-body text-left">
                                <div>
                                    <span className="font1">$260</span><span className="font2">/Month</span>
                                </div>
                                <ol>
                                    <li>Unlimited request per day</li>
                                    <li>All weather parameters</li>
                                    <li>10% discount if billed annually</li>
                                </ol>
                            </div>
                            <div className="card-footer">
                                <button className="btn bg-orange">Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Pricing
