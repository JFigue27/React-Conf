import React from 'react';
import Gravatar from './Gravatar';
import twitterLogo from '../images/twitter.svg';
import './styles/BadgesList.css';

const BadgesListItem = props => {
  return (
    <React.Fragment>
      <div className='BadgesListItem'>
        <Gravatar className='BadgesListItem__avatar' email={props.badge.email} alt='Avatar' />
        <p>
          {props.badge.firstName} {props.badge.lastName}
        </p>
        <p className='twitterColor'>
          <img src={twitterLogo} alt='twitter-logo' className='twitter' />
          {props.badge.twitter}
        </p>
        {props.badge.jobTitle}
      </div>
    </React.Fragment>
  );
};

export default BadgesListItem;
