import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Navbar() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" className="back-color border-radius py-0 px-0 mb-3">
        <MDBContainer fluid className="ps-0">
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
            className="py-3"
          >
            <MDBIcon icon="bars" fas className="text-white"/>
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mb-2 mb-lg-0">
                <Link className="link-btn py-2 mx-0 my-0 px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Name
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0 px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Metric
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0  px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Create Team
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0  px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Player Market
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0   my-0 px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Player Comparison
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0  px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        Similar Player
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0  px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        GK Search
                    </MDBNavbarItem>
                </Link>
                <Link className="link-btn py-2 mx-0 my-0  px-4" to="/" role={"button"}>
                    <MDBNavbarItem className="">
                        How to Guide
                    </MDBNavbarItem>
                </Link>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div className="margin-bot"></div>
    </>
  );
}
