import React, { Fragment } from 'react'

function Data({ prop }) {

    return (
        <Fragment>

            <div class="modal fade" id="exampleModal" role="dialog">
                <div class="modal-dialog" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {prop.map((i, ind) => {
                                return (
                                    <div key={ind}>
                                        <div className="text-center linear">
                                            <h5 className="d-inline">Location</h5><span> : {i.name}</span>
                                        </div>
                                        <hr></hr>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Cloud Status</th>
                                                    <td>
                                                        {i.weather.map((item, index) => {
                                                            return (
                                                                <div key={index}>
                                                                    {item.description}
                                                                </div>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>Wind Speed</th>
                                                    <td>{i.wind.speed} <small>/mph</small></td>
                                                </tr>
                                                <tr>
                                                    <th>Humidity</th>
                                                    <td>{i.main.humidity}</td>
                                                </tr>
                                                <tr>
                                                    <th>Feel like</th>
                                                    <td>{i.main.feels_like}<sup> 0</sup> deg</td>
                                                </tr>
                                                <tr>
                                                    <th>Pressure</th>
                                                    <td>{i.main.pressure} <small>/sec</small></td>
                                                </tr>
                                                <tr>
                                                    <th>Temp</th>
                                                    <td>{i.main.temp}<sup> 0</sup> deg</td>
                                                </tr>
                                                <tr>
                                                    <th>Max Temp</th>
                                                    <td>{i.main.temp_max} <sup>0</sup> deg</td>
                                                </tr>
                                                <tr>
                                                    <th>Min Temp</th>
                                                    <td>{i.main.temp_min} <sup>0</sup> deg </td>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                )
                            })}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn bg-orange" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div >
            </div >


        </Fragment >
    )
}

export default Data
