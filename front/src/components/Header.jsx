import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#E4E4E4' }}>
      <nav>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingTop: '20px',
          paddingBottom: '20px',
          paddingLeft: '50px',
          paddingRight: '50px',
        }}>
          <Link to="/" className="font-semibold text-xl">
            <img src="./image/Olympic_rings_without_rims.png" alt='olympic logo' style={{ height: 80, width: "auto" }} />
          </Link>
          <ul className="nav-links" style={{
            display: 'flex',
            gap: "90px",
            color: "#4A484B",
            alignItems: 'center',
            fontSize: 30,
            alignSelf: 'center',
            fontFamily: 'N27-Regular'
          }}>
            <li><Link to="/data">Data</Link></li>
            <li className="dropdown">
              <span className="dropbtn">Visualisation</span>
              <div className="dropdown-content">
                <Link to="/visualisation/medalPerson">Médaille par participant</Link>
                <Link to="/visualisation/medalCountry">Médaille par pays</Link>
              </div>
            </li>
            <li><Link to="/analyse">Analyse</Link></li>
            <li><Link to="/questions">Frequently asked questions</Link></li>
            <li><Link to="/fact">Fact</Link></li>
          </ul>
        </div>
      </nav>

      <style jsx="true">{`
        .nav-links {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-links li {
          display: inline;
          position: relative;
        }

        .nav-links a, .dropbtn {
          text-decoration: none;
          color: #4A484B;
          font-size: 30px;
          font-family: 'N27-Regular';
          padding: 14px 16px;
          display: block;
        }

        .dropdown {
          display: inline-block;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          min-width: 160px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }

        .dropdown-content a {
          color: black;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
        }

        .dropdown-content a:hover {
          background-color: #f1f1f1;
        }

        .dropdown:hover .dropdown-content {
          display: block;
        }
      `}</style>
    </header>
  );
};

export default Header;
