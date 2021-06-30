import React, { Fragment } from 'react';
import Ship from "../images/ship.jfif";

function Extra() {
    return (
        <Fragment>
            <div className="bar"></div>
            <div className="container-fluid mt-5">
                <div className="row text-center ml-4 mr-4">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <h2>Keeping The Ocean Clean</h2>
                        <p className="extra">
                            Storm Glass is a proud sponsor of several initiatives focused on the marine environment
                            and the global climate such as The Ocean Cleanup and Surfers Against Sewage.
                        </p>
                        <p className="extra">
                            If you are working with climate or charity projects that can benefit from using our services,
                            please get in touch and tell us about your organisation – we would love to help out!
                        </p>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <img src={Ship} alt="loading..." className="responsive" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Extra
