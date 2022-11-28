import { Navbar } from "./Navbar";
import { Smallbutton } from "./Smallbutton";
import BusinessIcon from "@mui/icons-material/Business";
import { Icondiv } from "./Icondiv";
import { Bookingcss } from "./Bookingcss";
import { Fromto } from "./Fromto";

import { Header } from "./Header";
import { Link } from "react-router-dom";
import { SmallBottom } from "./SmallBottom";
import { useState } from "react";
import { FareTypes } from "./FareTypes";
export const Main = () => {
  const [data, setData] = useState({
    from: "",
    to: "",
  });
  const handleData = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const addLocal = () => {
    localStorage.setItem("myKey", JSON.stringify(data));
  };
  const handlePopup = () => {
    const popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <div>
      <Header></Header>
      <Navbar>
        <div className="topdiv">
          <img
            className="laltain"
            src="https://imgak.mmtcdn.com/pwa_v3/pwa_commons_assets/desktop/DiwaliLantern.webp"
            alt=""
          />
          <Link to="/">
            
          </Link>
          <div className="login">

          </div>
          <Smallbutton>
            <div className="smallbuttonpic">
              <BusinessIcon></BusinessIcon>
            </div>
            <div>
              <h4>My Trips</h4>
              <p>Manage your Bookings</p>
            </div>
          </Smallbutton>
          <Smallbutton>
            <div className="smallbuttonpic">
              <img
                src="https://imgak.mmtcdn.com/mybiz/assets/images/landing/myBizLogo_light.png"
                alt=""
              />
            </div>
            <div>
              <h4>Introducing myBiz</h4>
              <p>MakeMyTrip for Buisness</p>
            </div>
          </Smallbutton>
        </div>
        <Bookingcss>
          <Icondiv className="icondiv"></Icondiv>
          <div className="checkboxdiv">
            <div>
              {" "}
              <input type="checkbox" />
              <label htmlFor="">ONEWAY</label>
              <input type="checkbox" />
              <label htmlFor="">ROUNDWAY</label>
              <input type="checkbox" />
              <label htmlFor="">MULTI CITY</label>
            </div>
            <div>INTERNATIONAL FLIGHTS | DOMESTIC FLIGHTS</div>
          </div>
          <Fromto handleChange={handleData} />
          <FareTypes />
        </Bookingcss>
        <div className="button">
          <button onClick={addLocal}>
            <Link to="/search">SEARCH</Link>
          </button>
        </div>
      </Navbar>
      <div style={{ background: "#ebe7e7", paddingTop: "50px" }}>
        <SmallBottom />
       
        
        
          
        
        
      </div>
    </div>
  );
};
