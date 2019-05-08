import React from 'react';
import './styles/Home.css';
import HomeLogo from '../images/astronauts.svg';
import HomeConf from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <div className='Home'>
        <div className='container'>
          <div className='row'>
            <div className='Home__col col-12 col-md-4'>
              <img src={HomeConf} alt='Home Conf' className='img-fluid mb-2' />
              <h1>Badge Management System</h1>
              <Link className='btn btn-primary' to='/badges'>
                Start
              </Link>
            </div>
            <div className='Home__col'>
              <img src={HomeLogo} alt='Home Logo' />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
