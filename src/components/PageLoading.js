import React from 'react';
import './styles/PageLoading.css';
import Loader from './Loader';

const PageLoading = () => {
  return (
    <React.Fragment>
      <div className='PageLoading'>
        <Loader />
        <h4>Loading...</h4>
      </div>
    </React.Fragment>
  );
};

export default PageLoading;
