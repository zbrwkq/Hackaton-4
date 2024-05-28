import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{backgroundColor: '#E4E4E4',}}>
      {/* <nav className="bg-blue-500 py-4"> */}
      <nav>
        <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '20px', paddingBottom: '20px', paddingLeft:'50px', paddingRight:'50px',}}>
          <Link to="/" className="font-semibold text-xl">
            <img src="./image/Olympic_rings_without_rims.png" alt='olympic logo' style={{ height: 80,  width: "auto"}}/>
          </Link>
          <ul className="flex space-x-4" style={{ display: 'flex', gap: "90px",color : "#4A484B", alignItems:'center', fontSize: 30, alignSelf: 'center',fontFamily:'N27-Regular'}}>
            <li><Link to="/data">Data</Link></li>
            <li><Link to="/analyse">Analyse</Link></li>
            <li><Link to="/fact">Fact</Link></li>
          </ul>
        </div>
      </nav>
      {/* </nav> */}
    </header>
  );
};

export default Header;
