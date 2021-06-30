import React, { Fragment, useState } from 'react'
import Data from "./Data";

function Header() {

    const [Value, setValue] = useState("");
    const [data, setdata] = useState([]);

    const Check = () => {
        let apikey = "191dd20a6f07035b7005d510d2363753";
        let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Value}&appid=${apikey}`)
        response.then(res => res.json())
            .then(res => {
                let details = [res];
                if (details.length > 0) {
                    setValue("");
                    setdata([res]);
                }
                else {
                    alert("Entered Location not found!")
                }
            })
    }

    return (
        <Fragment>
            <div className="image1">
                <div id="opacity">
                    <nav className="navbar navbar-expand-lg navbar-light fixed">
                        <a className="navbar-brand" href=".#">
                            <h3 className="white">
                                <i className="fa fa-star-half orange"></i>Twinspark
                            </h3>
                        </a>
                    </nav>
                    <div className="main">
                        <h1 className="orange">Twinspark</h1>
                        <h2>Professional Global Weather</h2>
                        <h4>High-resolution <span className="orange" style={{ fontSize: "30px" }}>weather forecasts</span></h4>
                    </div>
                    <div className="text-center mt-4">
                        <label for="input" className="white">check weather in your area</label>
                        <div>
                            <input
                                type="text"
                                name="input"
                                id="input"
                                placeholder="search your city,state,country"
                                className="input input-sm"
                                value={Value}
                                onChange={(e) => { setValue(e.target.value) }}
                            />
                            <button className="btn bg-orange btn-sm" onClick={Check} data-toggle="modal" data-target="#exampleModal">check</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <Data prop={data} />
            </div>
        </Fragment>
    )
}

export default Header
