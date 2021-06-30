import React, { Fragment } from 'react'

function Footer() {
    return (
        <Fragment>
            <div className="bar"></div>
            <div>
                <p className="footer">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veritatis veniam corrupti eveniet obcaecati autem optio tenetur facere,
                    Lorem ipsum dolor sit amet,so consectetur adipiewuq elit.
                    Eaque consequuntur dolores modi delectus est commodi dolor repellendus ipsa repellat quod laborumminima, officia laborum suscipit molestias,
                    voluptatum error dolorem fugit ab aperiam repudiandae magnam?
                </p>
                <div className="mt-4 mb-4">
                    <ul className="list-inline text-center">
                        <li className="list-inline-item ml-2">
                            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-twitter-square icon-color"></i>
                            </a>
                        </li>
                        <li className="list-inline-item ml-2">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-facebook-square icon-color"></i>
                            </a>
                        </li>
                        <li className="list-inline-item ml-2">
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-instagram icon-color"></i>
                            </a>
                        </li>
                        <li className="list-inline-item ml-2">
                            <a href="https://www.google.com/" target="_blank" rel="noreferrer" >
                                <i className="fa fa-google icon-color"></i>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center text-muted"><i><small>Copyright © Your Website 2021</small></i></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer
