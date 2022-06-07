import React from "react";
import { Link, useHistory } from "react-router-dom";

export function Footer() {
  let history = useHistory();
 
    return (
      <div className="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div className="row my-5 justify-content-center py-5">
            <div className="col-11">
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h3 className="text-muted mb-md-0 mb-5 bold-text">
                    <span className="men2">
                    DIEMFLASH.
                    </span>
                  </h3>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 className="mb-3 mb-lg-4 bold-text ">
                    <b>MENU</b>
                  </h6>
                  <ul className=" mr-auto navbar-nav link-colour">
                    <li>
                      <Link
                        className=" men nav-link"
                        aria-current="page"
                        to="/general"
                        onClick={()=> history.push("/general")}
                      >
                        • Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="men nav-link"
                        // aria-current="page"
                        to="/about"
                        onClick={()=> history.push("/about")}
                      >
                        • About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 className="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>ADDRESS</b>
                  </h6>
                  <p className="mb-1">
                    #H. NO. 106, STREET NO. 3, SHAKTI VIHAR, MEETHAPUR
                  </p>
                  <p>BADARPUR, NEW DELHI : 110044</p>
                </div>
              </div>
              <div className="row ">
                <div className="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p className="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span className="mx-2">
                      {/* <i className="fa fa-facebook-square" aria-hidden="true"></i> */}
                      <a
                        className="view overlay zoom"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.facebook.com/kawanchaudharyj"
                      >
                        <img
                          className="mask flex-center"
                          src="https://img.icons8.com/ios-glyphs/30/4267B2/facebook-new.png"
                          alt="facebook"
                        />
                      </a>
                    </span>{" "}
                    <span className="mx-2">
                      {/* <i className="fa fa-linkedin-square" aria-hidden="true" ></i> */}
                      <a
                        className="view overlay zoom"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/kawan-chaudhary-8739781a1/"
                      >
                        <img
                          className="mask flex-center"
                          src="https://img.icons8.com/fluency/30/000000/linkedin.png"
                          alt="linkedin"
                        />
                      </a>
                    </span>{" "}
                    <span className="mx-2">
                      {/* <i className="fa fa-twitter" aria-hidden="true"></i> */}
                      <a
                        className="view overlay zoom"
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/Kawanchaudhary"
                      >
                        <img
                          className="mask flex-center"
                          src="https://img.icons8.com/color/30/000000/twitter--v2.png"
                          alt="twitter"
                        />
                      </a>
                    </span>{" "}
                    <span className="mx-2 rights">
                      {/* <i className="fa fa-instagram" aria-hidden="true"></i> */}
                      <a
                        className="view overlay zoom"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/kawanchaudhary/"
                      >
                        <img
                          className="mask flex-center"
                          src="https://img.icons8.com/fluency/30/000000/instagram-new.png"
                          alt="instagram"
                        />
                      </a>
                    </span>{" "}
                  </p>                 

                  <span className="my-4">
                    <small>&#174; DIEMFLASH All Rights Reserved.</small>
                  </span>
                 
                </div>
                <div className="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 className="text-muted bold-text">
                    <b>KAWAN CHAUDHARY</b>
                  </h6>
                  <small>
                    <span className="men2">                    
                      <i className="fa fa-envelope" aria-hidden="true">
                         kawanchaudhary@gmail.com
                      </i>                 
                      </span>   
                  </small>
                  <small>
                    <span className="men2 ">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                      ​(91+)-9650045886
                    </span>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }


export default Footer;
